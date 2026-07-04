// MÓDULO 01: WEB COMPONENTS (Custom Elements & Shadow DOM)
// ==========================================
// TODO: 1. Crear una clase `DevJobsAvatar` que extienda de `HTMLElement`.
// TODO: 2. En el constructor, inicializar la clase superior (`super()`) y adjuntar un Shadow Root (`this.attachShadow({ mode: 'open' })`).
// TODO: 3. Definir un método `render` que:
//          - Recupere atributos del elemento (`service`, `username`, `size`) con valores por defecto.
//          - Genere una URL de imagen usando un servicio como unavatar.io (`https://unavatar.io/${service}/${username}`).
//          - Defina estilos específicos para la imagen dentro del Shadow DOM.
//          - Asigne el HTML final al `shadowRoot.innerHTML`.
// TODO: 4. Usar el ciclo de vida `connectedCallback` para llamar al método `render`.
// TODO: 5. Registrar el componente usando `customElements.define('devjobs-avatar', DevJobsAvatar)`.

// ¡Comienza tu código aquí!