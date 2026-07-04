// MÓDULO 01: FETCH DATA
// ==========================================
// TODO: 1. Obtener la sección del DOM donde se listarán las ofertas de empleo (ej. selector `.jobs-listings`).
// TODO: 2. Realizar una petición asíncrona a "./data.json" usando fetch y promesas (.then) o async/await.
// TODO: 3. Una vez obtenidos los datos, iterar sobre la lista de empleos.
// TODO: 4. Para cada empleo, crear dinámicamente un elemento HTML (sugerencia: <article class="job-listing-card">).
// TODO: 5. Agregar datasets al elemento para que luego sirvan en los filtros (ej. modalidad, nivel, tecnología).
// TODO: 6. Insertar el contenido en el article utilizando template literals con los datos reales:
//          - titulo, empresa, ubicacion, descripcion, y un botón para aplicar.
// TODO: 7. Adjuntar el nuevo elemento al contenedor en el DOM.

const container = document.querySelector('.jobs-listings')

// ¡Comienza tu código aquí!