process.loadEnvFile() // Carga las variables de entorno desde el archivo .env

import { test } from 'node:test'
import assert from 'node:assert'
import { Stagehand } from '@browserbasehq/stagehand'

// MÓDULO 05: TESTING AUTOMATIZADO E2E CON IA (STAGEHAND)
// =======================================================
// TODO: 1. Crear un test que inicialice una instancia de Stagehand.
// TODO: 2. Configurar el agente con el modelo LLM deseado (ej. openai/computer-use-preview o similar).
// TODO: 3. Ejecutar `await stagehand.init()` para iniciar el navegador controlado por IA.
// TODO: 4. Navegar a la página web objetivo (ej. `https://jsconf.es`).
// TODO: 5. Usar el agente (`agent.execute(...)` o `stagehand.act(...)`) para indicarle con lenguaje natural
//          que agregue dos entradas "Entrada" al carrito y extraiga el subtotal del carrito.
// TODO: 6. Usar `stagehand.extract(...)` para recuperar el precio final de la página.
// TODO: 7. Validar el subtotal usando `assert.strictEqual`.
// TODO: 8. Cerrar la instancia del navegador con `await stagehand.close()`.

// ¡Comienza tu test con IA aquí!