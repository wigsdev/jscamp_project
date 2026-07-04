import { useState } from "react"

// MÓDULO 02: COMPONENTE JOBCARD (TARJETA DE EMPLEO)
// ==========================================
// TODO: 1. Crear un estado local `isApplied` (booleano) inicializado en false.
// TODO: 2. Crear una función handler `handleApplyClick` que actualice el estado a true al hacer click.
// TODO: 3. Condicionar el texto del botón: si `isApplied` es true, mostrar "Aplicado"; si no, mostrar "Aplicar".
// TODO: 4. Condicionar las clases CSS del botón: si `isApplied` es true, agregar la clase 'is-applied'.
// TODO: 5. Deshabilitar el botón si el usuario ya ha aplicado.

export function JobCard({ job }) {
  // ¡Define tu estado y lógica aquí!

  return (
    <article 
      className="job-listing-card"
      data-modalidad={job.data?.modalidad}
      data-nivel={job.data?.nivel}
      data-technology={job.data?.technology}
    >
      <div>
        <h3>{job.titulo}</h3>
        <small>{job.empresa} | {job.ubicacion}</small>
        <p>{job.descripcion}</p>
      </div>
      {/* TODO: Agregar event handler, clases condicionales y disabled */}
      <button className="button-apply-job">
        Aplicar
      </button>
    </article>
  )
}