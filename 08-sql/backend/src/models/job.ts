import crypto from "node:crypto"
import { db } from '../db/database.js'
import type { Job, CreateJobDTO, UpdateJobDTO, JobFilters } from "../types.js"

// MÓDULO 08: INTEGRACIÓN DE SQL (SQLite)
// ==========================================
// En este módulo reemplazaremos la simulación en memoria por consultas reales a SQLite.
//
// TODO: 1. Implementar `getAll(filters)` usando sentencias SQL prepadas (`db.prepare`):
//          - Escribir una consulta SELECT que una la tabla `jobs` con `job_technologies`.
//          - Agregar condicionales WHERE dinámicamente si vienen filtros (tech, modality, level).
//          - Agrupar por el ID de la oferta y concatenar tecnologías (ej. `GROUP_CONCAT(technology)`).
//          - Ejecutar la consulta con `.all(...params)` y mapear las filas al tipo `Job`.
// TODO: 2. Implementar `getById(id)`:
//          - Hacer un `SELECT` por `id`.
//          - Obtener también sus tecnologías asociadas.
//          - Devolver el objeto estructurado.
// TODO: 3. Implementar `create(input)`:
//          - Insertar un registro en la tabla `jobs`.
//          - Insertar registros asociados en `job_technologies`.
//          - Utilizar transacciones (`db.transaction`) para asegurar consistencia.
// TODO: 4. Implementar `delete(id)`:
//          - Eliminar de la tabla `jobs` (las claves foráneas con ON DELETE CASCADE se encargarán de `job_technologies`).
// TODO: 5. Implementar `update(id, input)`:
//          - Actualizar los campos que vengan en la tabla `jobs`.
//          - Si vienen tecnologías, eliminar las anteriores e insertar las nuevas.

export class JobModel {
  // ¡Implementa la persistencia en SQL aquí!
}
