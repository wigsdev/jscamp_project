// @ts-check
import { test, expect } from '@playwright/test';

// MÓDULO 05: TESTING E2E CON PLAYWRIGHT
// ==========================================
// Recuerda las mejores prácticas de Playwright:
// 1. Usar Roles/Aria (`page.getByRole(...)`) siempre que sea posible.
// 2. Apoyarse en etiquetas de texto, placeholders y nombres visuales.
// 3. Usar `data-testid` como alternativa.
// 4. Usar selectores CSS solo como último recurso.
//
// TODO: 1. Crear una prueba usando la función `test(...)` de Playwright.
// TODO: 2. Navegar a la aplicación local: `http://localhost:5173` (o la ruta donde corra tu app).
// TODO: 3. Localizar el input de búsqueda por su rol (searchbox) y escribir "React" (o algún término de empleo disponible).
// TODO: 4. Localizar el botón de búsqueda por su rol y nombre ("Buscar") y hacer click.
// TODO: 5. Localizar los elementos de tarjetas de empleos resultantes (ej. clase `.job-listing-card`).
// TODO: 6. Verificar con `expect` que la primera tarjeta sea visible.
// TODO: 7. Iniciar sesión si fuera necesario para habilitar la postulación (si implementaste la ruta /login de Módulo 03).
// TODO: 8. Hacer click en el botón "Aplicar" de la primera oferta.
// TODO: 9. Verificar que el botón cambie su estado a "Aplicado".

// ¡Comienza tu test aquí!