import { useState } from "react"

const API_URL = import.meta.env.VITE_API_URL

// MÓDULO 07: INTELIGENCIA ARTIFICIAL - HOOK FRONTEND (STREAMS)
// ============================================================
// TODO: 1. Definir los estados locales necesarios: `summary` (string/null), `loading` (booleano), `error` (string/null).
// TODO: 2. Implementar una función asíncrona `generateSummary()`.
// TODO: 3. Reiniciar estados y realizar un fetch a `${API_URL}/ai/summary/${jobId}`.
// TODO: 4. Si la respuesta es exitosa, recuperar el reader del cuerpo de la respuesta (`response.body.getReader()`).
// TODO: 5. Crear una instancia de `TextDecoder()` para decodificar los bytes recibidos.
// TODO: 6. Leer el stream en un bucle infinito (`while(true)`):
//          - Extraer `done` y `value` con `await reader.read()`.
//          - Si `done` es true, romper el bucle.
//          - Decodificar los bytes a string (`decoder.decode(value, { stream: true })`).
//          - Acumular el texto decodificado en el estado `summary` progresivamente (`setSummary(prev => prev + chunkText)`).
// TODO: 7. Retornar los estados (`summary`, `loading`, `error`) y la función `generateSummary`.

export function useAISummary (jobId) {
  // ¡Comienza tu código del hook de streaming aquí!
}