# 🛠️ Guía y Estándares de Control de Versiones (Git)

Este documento detalla la convención de escritura de mensajes de confirmación (**Conventional Commits**) y los comandos esenciales de Git utilizados en el proyecto.

---

## 📜 Estructura de Mensajes: Conventional Commits

Para mantener el historial del repositorio legible, ordenado y preparado para generación automática de versiones, seguimos el estándar de Conventional Commits:

```text
tipo(módulo): título descriptivo en minúscula y en español

- Detalle de los cambios en forma de lista (usando guiones)
- Explicaciones de la decisión técnica si es necesario
```

### Tipos de commits utilizados:
* **`feat`**: Una nueva característica o funcionalidad (ej. `feat(docker): agregar soporte de Compose`).
* **`fix`**: Corrección de un fallo o error de código (ej. `fix(docker): corregir version de Node.js`).
* **`docs`**: Cambios en la documentación (ej. `docs(readme): rediseñar README principal`).
* **`style`**: Cambios estéticos o de formato que no afectan la lógica del código (espacios, comas, etc.).
* **`refactor`**: Reestructuración de código que no corrige errores ni añade características.
* **`chore`**: Tareas de mantenimiento, configuraciones de herramientas de compilación o Git (ej. `chore(git): ignorar archivo local`).

---

## ⚙️ Comandos de Git Esenciales

### 1. Guardar cambios en el área de preparación (Stage)
```bash
# Agregar un archivo específico
git add ruta/al/archivo

# Agregar todos los archivos modificados
git add .
```

### 2. Confirmar cambios (Commit)
Utilizamos el parámetro `-m` para el título y parámetros `-m` subsecuentes para añadir detalles al cuerpo del mensaje sin salir de la consola:
```bash
git commit -m "tipo(modulo): titulo descriptivo" -m "- Detalle de cambio 1" -m "- Detalle de cambio 2"
```

### 3. Comprobar el estado del repositorio
```bash
# Ver archivos modificados y en cola de preparación
git status

# Ver qué archivos están ignorados actualmente
git status --ignored
```

### 4. Deshacer o corregir commits en local
* **Corregir el último commit realizado** (si olvidaste agregar un archivo o te equivocaste en el mensaje):
  ```bash
  git commit --amend
  ```
* **Eliminar el último commit conservando tus archivos intactos** (modo soft):
  ```bash
  git reset --soft HEAD~1
  ```
* **Eliminar el último commit y borrar todos los cambios realizados** (modo hard - ¡Usar con precaución!):
  ```bash
  git reset --hard HEAD~1
  ```
* **Restaurar un archivo específico a su último estado confirmado**:
  ```bash
  git restore ruta/al/archivo
  ```
