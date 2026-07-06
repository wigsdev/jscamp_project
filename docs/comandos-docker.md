# 🐳 Guía Práctica de Comandos Docker por Módulo

Este documento sirve como hoja de referencia rápida de todos los comandos de Docker que utilizamos para resolver, construir y depurar cada submódulo del curso.

---

## 📂 Módulo 00: Por qué (`00-por-que`)
Aprender a aislar la aplicación para asegurar que las dependencias modernas de Node.js no fallen en servidores con versiones antiguas.

### Construcción y Ejecución:
```bash
# Construir la imagen
docker build -t app-por-que .

# Ejecutar el contenedor (se destruye automáticamente al terminar)
docker run --rm app-por-que
```

---

## 📂 Módulo 01: Hola Docker (`01-hola-docker`)
Contenedor minimalista con Alpine Linux para ejecutar un único comando rápido del sistema operativo.

### Construcción y Ejecución:
```bash
# Construir la imagen
docker build -t hola-docker .

# Ejecutar contenedor
docker run --rm hola-docker
```

---

## 📂 Módulo 02: Node Web (`02-node-web`)
Empaquetar un servidor web Express y exponer su puerto de desarrollo hacia nuestra máquina.

### Construcción y Ejecución:
```bash
# Construir la imagen
docker build -t node-web-app .

# Ejecutar mapeando el puerto local 8081 al puerto 3000 del contenedor
docker run --rm -d -p 8081:3000 --name web-node node-web-app

# Detener el contenedor
docker stop web-node
```

---

## 📂 Módulo 02b: Node Web Init (`02b-node-web`)
Optimización del flujo con las plantillas oficiales generadas por Docker Init.

### Construcción y Ejecución con Compose:
```bash
# Iniciar servicios en segundo plano y forzar compilación
docker compose up -d --build

# Detener servicios y limpiar la red virtual creada
docker compose down
```

---

## 📂 Módulo 03: Multi-Stage Build (`03-multi-stage`)
Técnica avanzada para compilar aplicaciones y generar imágenes finales muy ligeras libres de herramientas de desarrollo.

### Construcción y Ejecución:
```bash
# Construir imagen optimizada de producción
docker build -t node-multistage .

# Ejecutar contenedor de producción
docker run --rm -d -p 8082:3000 --name web-multistage node-multistage

# Detener contenedor
docker stop web-multistage
```

---

## 📂 Módulo 04: Volúmenes y Persistencia (`04-volumes`)
Persistir archivos en disco y configurar flujos de desarrollo local rápidos (Hot Reload) con Bind Mounts en Windows (GitBash).

### Desarrollo Local (Hot Reload con Nodemon):
```bash
# 1. Ejecutar montando la ruta actual con doble barra (//) y polling (-L) activo
docker run -d -p 3000:3000 --name mi-app-live -v "/$(pwd)://app" app-volumenes sh -c "npx nodemon -L server.js"

# 2. Detener y eliminar el contenedor de desarrollo
docker stop mi-app-live && docker rm mi-app-live

# 3. Eliminar la carpeta de datos temporal local de tu disco
rm -rf data
```

### Ejecución con Volumen Nombrado (Postgres / BD):
```bash
docker run --rm -d -p 8083:3000 -v visitas_data:/app/data --name app-volumenes node-volumes
```

---

## 📂 Módulo 05: IA Local con Docker Models (`05-ia`)
Uso nativo de Inteligencia Artificial offline utilizando el motor interno de Docker Model Runner.

### Flujo de Trabajo Completo:
```bash
# 1. Descargar el LLM smollm2 en tu máquina física (Host)
docker model pull ai/smollm2

# 2. Verificar que se encuentra en la biblioteca local
docker model list

# 3. Levantar la aplicación de Flask comunicada al Host
docker compose up -d --build

# 4. Probar la API de IA en local
curl "http://localhost:5002/ask?q=Explain+containers+in+one+sentence"

# 5. Apagar servicios
docker compose down
```

---

## 📂 Módulo 06: Orquestación con Compose (`06-compose`)
Orquestar una aplicación Express conectada a una base de datos PostgreSQL utilizando validación de salud de dependencias.

### Comandos de control:
```bash
# Iniciar base de datos y aplicación sincronizadas
docker compose up -d --build

# Comprobar estado de los servicios (debe mostrar db como "healthy")
docker compose ps

# Apagar servicios
docker compose down
```

---

## 📂 Módulo 07: Despliegue en Vercel (`07-vercel`)
Construcción en Go utilizando micro-contenedores Alpine listos para Fluid Compute de Vercel.

### Construcción y Ejecución Local:
```bash
# Construir imagen especificando el Dockerfile de Vercel
docker build -f Dockerfile.vercel -t web-vercel .

# Ejecutar y verificar localmente
docker run --rm -d -p 8080:80 -e PORT=80 --name run-web-vercel web-vercel

# Detener contenedor local
docker stop run-web-vercel
```
