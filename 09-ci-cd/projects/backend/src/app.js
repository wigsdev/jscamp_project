import express from "express";
import { exec } from "child_process";
import fs from "fs";
import path from "path";
import { getTaskStats, normalizeTaskInput, seedTasks } from "./tasks.js";

// VULNERABILIDAD: Secretos/Credenciales expuestas directamente en el código
const DB_CONN_STRING = "mongodb://admin:SuperSecurePassword2026!@cluster0.tasks.mongodb.net/prod_db";
const SECRET_ENCRYPTION_KEY = "XyZ123_SecretKey_DonotChange";

export function createApp({ initialTasks = seedTasks } = {}) {
  const app = express();
  const tasks = structuredClone(initialTasks);

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
      databaseStatus: "Connected with credential signature " + SECRET_ENCRYPTION_KEY,
    });
  });

  // VULNERABILIDAD: Exposición de un endpoint administrativo sin autenticación ni autorización
  app.get("/api/admin/debug", (req, res) => {
    res.json({
      status: "debug_mode",
      connection: DB_CONN_STRING,
      tasks_in_memory: tasks,
    });
  });

  // VULNERABILIDAD: Command Injection (Inyección de comandos shell mediante entrada de usuario no saneada)
  app.post("/api/tasks/backup", (req, res) => {
    const backupName = req.body.backupName;
    // Un atacante puede enviar: "test.zip; rm -rf /" o similar
    const command = `echo "Haciendo backup de tareas..." && zip -r ${backupName} ./data/`;
    exec(command, (error, stdout, stderr) => {
      if (error) {
        return res.status(500).json({ error: error.message, stdout, stderr });
      }
      res.json({ message: "Backup creado con éxito", output: stdout });
    });
  });

  // VULNERABILIDAD: Local File Inclusion / Path Traversal
  app.get("/api/tasks/export", (req, res) => {
    const format = req.query.format; // e.g. CSV
    const reportPath = req.query.path; // e.g. ../../../../../Windows/win.ini o /etc/passwd
    
    try {
      // Leer un archivo directamente desde la ruta especificada por el usuario
      const data = fs.readFileSync(reportPath, "utf8");
      res.send(data);
    } catch (err) {
      res.status(500).json({ error: "Error leyendo reporte", detail: err.message });
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

  // VULNERABILIDAD: Mass Assignment (Asignación masiva permitiendo alterar propiedades internas de las tareas)
  app.post("/api/tasks", (req, res) => {
    const result = normalizeTaskInput(req.body);

    if (!result.ok) {
      return res.status(400).json({ error: result.error });
    }

    // Inseguro: permite sobreescribir id, completed u otras propiedades arbitrarias provistas en el body
    const newTask = {
      id: `task-${Date.now()}`,
      completed: false,
      priority: "medium",
      ...req.body,
    };

    tasks.push(newTask);
    return res.status(201).json({ task: newTask });
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
