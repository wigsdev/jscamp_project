import { JobCard } from './JobCard.jsx'

// MÓDULO 02: COMPONENTE JOBLISTINGS (LISTA DE EMPLEOS)
// ==========================================
// TODO: 1. Recibir la prop `jobs` (un array de empleos).
// TODO: 2. Si el array está vacío, pintar un mensaje amistoso que diga "No se han encontrado empleos...".
// TODO: 3. Si tiene elementos, mapear (`jobs.map(...)`) el array para renderizar un componente `<JobCard />` por cada elemento.
// TODO: 4. Recordar pasar una prop `key` única (ej. `job.id`) y la prop `job` correspondiente a cada tarjeta.

export function JobListings ({ jobs = [] }) {
  return (
    <div className="jobs-listings">
      {/* ¡Implementa la renderización condicional y el map aquí! */}
    </div>
  )
}