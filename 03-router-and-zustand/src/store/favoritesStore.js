import { create } from 'zustand'

// MÓDULO 03: FAVORITOS CON ZUSTAND
// ==========================================
// TODO: 1. Crear un store de Zustand para manejar la lista de ids de empleos favoritos.
// TODO: 2. Definir un estado inicial `favorites` (un array vacío `[]`).
// TODO: 3. Crear una acción `clearFavorites` para vaciar el array.
// TODO: 4. Crear una acción `addFavorite(jobId)` para agregar un id al array si no existe.
// TODO: 5. Crear una acción `removeFavorite(jobId)` para quitar un id del array.
// TODO: 6. Crear una acción `toggleFavorite(jobId)` que agregue o elimine un favorito basándose en si ya existe en el array.

export const useFavoritesStore = create((set, get) => ({
  // ¡Define tu estado y acciones aquí!
}))