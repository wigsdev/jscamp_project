# MÓDULO 10: DOCKER - APLICACIÓN WEB CON NODE.JS
# ===============================================
# TODO: 1. Definir la imagen base oficial (ej. `node:22-alpine`).
# TODO: 2. Establecer el directorio de trabajo (ej. `/app`).
# TODO: 3. Copiar los archivos `package*.json` para aprovechar la caché de capas de Docker.
# TODO: 4. Ejecutar la instalación de dependencias (`npm install`).
# TODO: 5. Copiar el resto de archivos del proyecto.
# TODO: 6. Exponer el puerto 3000 donde corre el servidor de desarrollo.
# TODO: 7. Configurar la ejecución bajo un usuario no root (`USER node`) por seguridad.
# TODO: 8. Definir el comando de inicio (`node server.js`).

FROM node:22-alpine

WORKDIR /app

# esto es CLAVE para la caché
COPY package*.json ./

RUN npm ci 

COPY . .

EXPOSE 3000

USER node

CMD [ "node", "server.js" ]