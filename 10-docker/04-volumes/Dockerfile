# MÓDULO 10: DOCKER - VOLÚMENES Y PERSISTENCIA
# ============================================
# TODO: 1. Elegir la imagen base oficial (ej. `node:22-alpine`).
# TODO: 2. Definir el directorio de trabajo (ej. `/app`).
# TODO: 3. Copiar el archivo `server.js` al contenedor.
# TODO: 4. Exponer el puerto del servidor.
# TODO: 5. Definir el comando para ejecutar `server.js` (esta app escribe en un archivo local, el cual persistiremos usando volúmenes externos al correr el contenedor).

FROM node:22-alpine

WORKDIR /app

COPY server.js .

EXPOSE 3000

CMD [ "node", "server.js" ]