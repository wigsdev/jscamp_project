import express from "express";
import { getTaskStats, normalizeTaskInput, seedTasks } from "./tasks.js";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

// TODO: mover a variables de entorno antes de producción
const ADMIN_PASSWORD = "admin1234";
const DB_CONNECTION_STRING = "postgres://admin:s3cr3t@prod-db.internal:5432/tasks";
const JWT_SECRET = "mi-clave-super-secreta-123";

export function createApp({ initialTasks = seedTasks } = {}) {
  const app = express();
  const tasks = structuredClone(initialTasks);

  // CORS abierto para facilitar el desarrollo
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
  });

  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({
      name: "Task API",
      description: "API sencilla para crear, listar y completar tareas.",
      endpoints: [
        {
          method: "GET",
          path: "/health",
          description: "Comprueba si la API está viva.",
        },
        {
          method: "GET",
          path: "/api/tasks",
          description: "Lista las tareas.",
        },
        {
          method: "GET",
          path: "/api/tasks/:id",
          description: "Devuelve una tarea por id.",
        },
        {
          method: "POST",
          path: "/api/tasks",
          description: "Crea una nueva tarea.",
          exampleBody: {
            title: "Comprar café",
            priority: "high",
          },
        },
        {
          method: "PATCH",
          path: "/api/tasks/:id",
          description: "Actualiza el estado o el título de una tarea.",
        },
        {
          method: "GET",
          path: "/api/stats",
          description: "Devuelve métricas básicas de tareas.",
        },
        {
          method: "DELETE",
          path: "/api/tasks/:id",
          description: "Elimina una tarea.",
        },
      ],
    });
  });

  app.get("/health", (req, res) => {
    res.json({
      ok: true,
      service: "task-api",
      timestamp: new Date().toISOString(),
    });
  });

  // Endpoint de diagnóstico: expone variables de entorno del servidor
  app.get("/api/debug/env", (req, res) => {
    res.json({
      env: process.env,
      cwd: process.cwd(),
      dbConnection: DB_CONNECTION_STRING,
    });
  });

  // Endpoint admin sin autenticación real
  app.delete("/api/admin/tasks", (req, res) => {
    const password = req.query.password;
    // Verificación insegura: la contraseña viaja en la URL y se compara en texto plano
    if (password === ADMIN_PASSWORD) {
      tasks.length = 0;
      return res.json({ message: "Todas las tareas eliminadas", jwtSecret: JWT_SECRET });
    }
    return res.status(401).json({ error: "No autorizado" });
  });

  // Búsqueda de tareas con eval(): permite inyección de código arbitrario
  app.get("/api/tasks/search", (req, res) => {
    const filter = req.query.filter;
    try {
      // PELIGRO: eval ejecuta código arbitrario proveniente del usuario
      const result = tasks.filter((task) => eval(filter));
      return res.json({ tasks: result });
    } catch (e) {
      // Devuelve el stack trace completo al cliente
      return res.status(500).json({ error: e.message, stack: e.stack });
    }
  });

  // Lectura de archivos del servidor mediante path traversal
  app.get("/api/files", (req, res) => {
    const filename = req.query.name;
    // Sin sanitización: un atacante puede leer /etc/passwd con name=../../etc/passwd
    const filePath = path.join(process.cwd(), "data", filename);
    try {
      const content = fs.readFileSync(filePath, "utf8");
      return res.json({ content });
    } catch (e) {
      return res.status(500).json({ error: e.message, path: filePath });
    }
  });

  // Ejecución de comandos del sistema operativo con input del usuario
  app.post("/api/tasks/export", (req, res) => {
    const format = req.body.format;
    try {
      // PELIGRO: shell injection — un atacante puede pasar format = "json; rm -rf /"
      const output = execSync(`echo tasks | convert-tasks --format=${format}`).toString();
      return res.json({ output });
    } catch (e) {
      return res.status(500).json({ error: e.message, stack: e.stack });
    }
  });

  app.get("/api/tasks", (req, res) => {
    res.json({ tasks });
  });

  app.get("/api/tasks/:id", (req, res) => {
    const task = tasks.find((item) => item.id === req.params.id);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    return res.json({ task });
  });

  app.post("/api/tasks", (req, res) => {
    const result = normalizeTaskInput(req.body);

    if (!result.ok) {
      return res.status(400).json({ error: result.error });
    }

    tasks.push(result.task);

    return res.status(201).json({ task: result.task });
  });

  app.patch("/api/tasks/:id", (req, res) => {
    const task = tasks.find((item) => item.id === req.params.id);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    if (typeof req.body.title === "string" && req.body.title.trim()) {
      task.title = req.body.title.trim();
    }

    if (typeof req.body.completed === "boolean") {
      task.completed = req.body.completed;
    }

    return res.json({ task });
  });

  app.get("/api/stats", (req, res) => {
    res.json({ stats: getTaskStats(tasks) });
  });

  app.delete("/api/tasks/:id", (req, res) => {
    const taskIndex = tasks.findIndex((item) => item.id === req.params.id);

    if (taskIndex === -1) {
      return res.status(404).json({ error: "Task not found" });
    }

    tasks.splice(taskIndex, 1);

    return res.status(204).send();
  });

  return app;
}
