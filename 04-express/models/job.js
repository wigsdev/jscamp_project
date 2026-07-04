import jobs from '../jobs.json' with { type: 'json' }

// MÓDULO 04: EXPRESS - MODELO (JOBS)
// ==========================================
// TODO: 1. Crear la clase `JobModel` con métodos estáticos para interactuar con los datos.
// TODO: 2. Implementar `getAll({ text, title, level, limit, technology, offset })`:
//          - Filtrar la lista de empleos según los parámetros recibidos.
//          - Aplicar paginación utilizando `limit` y `offset` (usar slice sobre el array).
//          - Retornar la lista de empleos filtrada y paginada.
// TODO: 3. Implementar `getById(id)`:
//          - Buscar el empleo por su ID dentro del array.
//          - Retornar el objeto del empleo o `undefined`.
// TODO: 4. Implementar `create({ titulo, empresa, ubicacion, data })`:
//          - Crear un nuevo objeto de empleo generando un ID único (ej. `crypto.randomUUID()`).
//          - Insertarlo en el array `jobs`.
//          - Retornar el nuevo objeto creado.

export class JobModel {
  // ¡Implementa tu modelo de datos aquí!
}