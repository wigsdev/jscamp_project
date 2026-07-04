import { readdir, stat } from 'node:fs/promises'
import { join } from 'node:path'

// MÓDULO 04: NODE.JS CLI (Listador de archivos)
// ==========================================
// TODO: 1. Recuperar la ruta de la carpeta a listar desde los argumentos de proceso (`process.argv[2]`). Si no se pasa, usar '.' por defecto.
// TODO: 2. Leer el contenido del directorio usando la función asíncrona `readdir`.
// TODO: 3. Para cada elemento leído, obtener su información usando la función asíncrona `stat`.
// TODO: 4. Identificar si el elemento es un archivo o un directorio (`info.isDirectory()`).
// TODO: 5. Obtener el tamaño del elemento y crear una función de formateo para mostrarlo en B o KB.
// TODO: 6. Mostrar el resultado de manera ordenada en la consola (ej. 📁 o 📄, alineando el nombre y el tamaño).

// ¡Comienza tu código aquí!