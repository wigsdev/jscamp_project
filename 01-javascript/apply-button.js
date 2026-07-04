// MÓDULO 01: BOTÓN APLICAR A OFERTAS
// ==========================================
// Puesto que las ofertas de empleo se crean de forma dinámica mediante fetch,
// no podemos registrar escuchadores directamente sobre ellas al cargar la página.
// Usaremos "Delegación de Eventos" (Event Delegation).
//
// TODO: 1. Obtener el contenedor principal de ofertas (ej. clase `.jobs-listings`).
// TODO: 2. Registrar un evento 'click' en el contenedor principal.
// TODO: 3. Comprobar si el elemento clicado (`event.target`) contiene la clase de botón aplicar (ej. `button-apply-job`).
// TODO: 4. Si es así:
//          - Cambiar el texto del botón a "¡Aplicado!".
//          - Deshabilitar el botón para que no se pueda volver a clicar.
//          - Opcionalmente, agregar una clase CSS para estilizar el botón aplicado (ej. `is-applied`).

// ¡Comienza tu código aquí!