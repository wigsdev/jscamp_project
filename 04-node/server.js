import { createServer } from 'node:http'
import { randomUUID } from 'node:crypto'
import { json } from 'node:stream/consumers'

// MÓDULO 04: SERVIDOR HTTP NATIVO EN NODE.JS
// ==========================================
// TODO: 1. Cargar el puerto desde las variables de entorno (utilizar `process.env.PORT` o usar 3000 por defecto).
// TODO: 2. Crear una base de datos ficticia en memoria (ej. una lista de usuarios `[{ id: 1, name: 'Alice' }]`).
// TODO: 3. Crear el servidor utilizando `createServer` con una función callback asíncrona para atender peticiones.
// TODO: 4. Extraer el método y la URL de la petición (`req.method` y `req.url`).
// TODO: 5. Manejar rutas HTTP:
//          - GET `/users`: Devolver la lista completa de usuarios formateada en JSON. Soporta paginación usando los query params `limit` y `offset`.
//          - GET `/health`: Devolver un estado simple `{ status: 'ok', uptime: process.uptime() }`.
//          - POST `/users`: Leer el cuerpo de la petición (`await json(req)`), validar que contenga un nombre, crear un objeto de usuario con un UUID aleatorio, guardarlo y retornar un estado 201.
//          - Cualquier otra ruta debe devolver un código de estado 404 (Not Found).
// TODO: 6. Escuchar en el puerto configurado e imprimir un mensaje en consola.

// ¡Comienza tu código aquí!