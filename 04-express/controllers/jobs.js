import { DEFAULTS } from "../config.js"
import { JobModel } from "../models/job.js"

// MÓDULO 04: EXPRESS - CONTROLADORES (JOBS)
// ==========================================
// TODO: 1. Crear la clase `JobController` con métodos estáticos para manejar cada una de las peticiones.
// TODO: 2. Implementar `getAll(req, res)`:
//          - Extraer query params (`text`, `title`, `level`, `limit`, `technology`, `offset`).
//          - Llamar al modelo `JobModel.getAll(...)`.
//          - Retornar la respuesta JSON con el formato: `{ data: jobs, total, limit, offset }`.
// TODO: 3. Implementar `getId(req, res)`:
//          - Extraer el `id` de los parámetros de ruta (`req.params`).
//          - Llamar al modelo `JobModel.getById(id)`.
//          - Si no existe, responder con código de estado 404 e indicar un mensaje de error.
//          - Si existe, responder con el JSON del empleo.
// TODO: 4. Implementar `create(req, res)`:
//          - Extraer del cuerpo de la petición (`req.body`) los campos obligatorios.
//          - Llamar al modelo `JobModel.create(...)`.
//          - Responder con código de estado 201 y los datos del nuevo empleo creado.
// TODO: 5. Agregar firmas vacías para `update`, `partialUpdate` y `delete`.

export class JobController {
  // ¡Implementa tus controladores aquí!
}