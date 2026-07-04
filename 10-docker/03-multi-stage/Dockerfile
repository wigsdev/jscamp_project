# MÓDULO 10: DOCKER - MULTI-STAGE BUILD
# ==========================================
# TODO: 1. ETAPA 1 (builder):
#          - Iniciar desde la imagen de Node.js asignándole un alias (ej. `FROM node:22-alpine AS builder`).
#          - Definir el directorio de trabajo (ej. `/app`).
#          - Copiar archivos de configuración y dependencias (`package*.json`).
#          - Ejecutar instalación limpia (`npm ci`).
#          - Copiar el resto del código del proyecto.
#          - Ejecutar el script de construcción / compilación (`npm run build`).
# TODO: 2. ETAPA 2 (runner):
#          - Iniciar una nueva etapa desde una imagen de Node limpia (ej. `FROM node:22-alpine AS runner`).
#          - Definir el directorio de trabajo.
#          - Configurar la variable de entorno `NODE_ENV` a `production`.
#          - Copiar únicamente la carpeta compilada de la etapa anterior (`COPY --from=builder /app/dist ./dist`).
#          - Exponer el puerto del servidor.
#          - Ejecutar bajo un usuario no root (`USER node`).
#          - Definir el comando de inicio (`node dist/server.js`).

# ¡Comienza tu Dockerfile aquí!