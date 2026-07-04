import { useEffect, useState } from 'react'

import { Pagination } from '../components/Pagination.jsx'
import { SearchFormSection } from '../components/SearchFormSection.jsx'
import { JobListings } from '../components/JobListings.jsx'
import { useRouter } from '../hooks/useRouter.jsx'

const RESULTS_PER_PAGE = 4

const useFilters = () => {
  const [filters, setFilters] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return {
      technology: params.get('technology') || '',
      location: params.get('type') || '',
      experienceLevel: params.get('level') || ''
    }
  })
  const [textToFilter, setTextToFilter] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('text') || ''
  })
  const [currentPage, setCurrentPage] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    const page = Number(params.get('page'))
    return Number.isNaN(page) ? page : 1
  })

  const [jobs, setJobs] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)

  const { navigateTo } = useRouter()

  useEffect(() => {
    // MÓDULO 02: PETICIÓN DE DATOS EN REACT (useEffect)
    // ==================================================
    // TODO: 1. Definir una función asíncrona (ej. `fetchJobs`).
    // TODO: 2. Activar el estado de carga (`setLoading(true)`).
    // TODO: 3. Construir los query params usando URLSearchParams agregando los filtros:
    //          - `text` (si textToFilter existe)
    //          - `technology` (si filters.technology existe)
    //          - `type` (si filters.location existe)
    //          - `level` (si filters.experienceLevel existe)
    //          - `limit` (fijado a RESULTS_PER_PAGE)
    //          - `offset` (calculado en base a `currentPage`)
    // TODO: 4. Realizar la llamada `fetch` a la API: `https://jscamp-api.vercel.app/api/jobs?${queryParams}`.
    // TODO: 5. Parsear la respuesta a JSON y guardar los resultados en el estado:
    //          - `setJobs(json.data)`
    //          - `setTotal(json.total)`
    // TODO: 6. Controlar errores y desactivar el estado de carga en el bloque `finally`.
    // TODO: 7. Ejecutar la función `fetchJobs()`.
    
    // ¡Comienza tu código aquí!
  }, [filters, currentPage, textToFilter])

  useEffect(() => {
    const params = new URLSearchParams()

    if (textToFilter) params.append('text', textToFilter)
    if (filters.technology) params.append('technology', filters.technology)
    if (filters.location) params.append('type', filters.location)
    if (filters.experienceLevel) params.append('level', filters.experienceLevel)

    if (currentPage > 1) params.append('page', currentPage)

    const newUrl = params.toString()
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname

    navigateTo(newUrl)
  }, [filters, currentPage, textToFilter, navigateTo])

  const totalPages = Math.ceil(total / RESULTS_PER_PAGE)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleSearch = (filters) => {
    setFilters(filters)
    setCurrentPage(1)
  }

  const handleTextFilter = (newTextToFilter) => {
    setTextToFilter(newTextToFilter)
    setCurrentPage(1)
  }

  return {
    loading,
    jobs,
    total,
    totalPages,
    currentPage,
    textToFilter,
    handlePageChange,
    handleSearch,
    handleTextFilter
  }
}

export function SearchPage() {
  const {
    jobs,
    total,
    loading,
    totalPages,
    currentPage,
    textToFilter,
    handlePageChange,
    handleSearch,
    handleTextFilter
  } = useFilters()

  const title = loading
    ? `Cargando... - DevJobs`
    : `Resultados: ${total}, Página ${currentPage} - DevJobs`

  return (
    <main>
      <title>{title}</title>
      <meta name="description" content="Explora miles de oportunidades laborales en el sector tecnológico. Encuentra tu próximo empleo en DevJobs." />

      <SearchFormSection
        initialText={textToFilter}
        onSearch={handleSearch}
        onTextFilter={handleTextFilter}
      />

      <section>
        <h2 style={{ textAlign: 'center' }}>Resultados de búsqueda</h2>

        {
          loading ? <p>Cargando empleos...</p> : <JobListings jobs={jobs} />
        }
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </section>
    </main>
  )
}
