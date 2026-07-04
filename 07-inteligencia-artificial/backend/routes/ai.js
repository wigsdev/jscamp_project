process.loadEnvFile()

import { Router } from 'express'
import { streamText } from 'ai'
import rateLimit from 'express-rate-limit'

import { JobModel } from '../models/job.js'
import { CONFIG } from '../config.js'

// MÓDULO 07: INTELIGENCIA ARTIFICIAL - API BACKEND
// ===============================================
// TODO: 1. Configurar un limitador de frecuencia (rateLimit) para evitar abusos en las llamadas de IA.
// TODO: 2. Crear una ruta GET `/summary/:id`.
// TODO: 3. Obtener el empleo correspondiente al ID de la ruta. Si no existe, devolver un error 404.
// TODO: 4. Diseñar un prompt del sistema y de usuario concatenando los datos del empleo (titulo, empresa, ubicacion, descripcion).
// TODO: 5. Usar `streamText` de la librería `ai` con el prompt y el modelo de IA configurado.
// TODO: 6. Enviar el stream directamente a la respuesta del cliente (`result.pipeTextStreamToResponse(res)`).
// TODO: 7. Controlar errores de generación y retornar código 500 si falla.

export const aiRouter = Router()

// ¡Comienza tu código aquí!