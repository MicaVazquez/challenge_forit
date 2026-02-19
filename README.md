# Challenge ForIT: Lista de Tareas (Fullstack)

Este proyecto es una aplicación web fullstack para gestionar tareas, desarrollada como challenge técnico. Incluye un backend con Node.js/Express y un frontend en React + TypeScript + Vite.

## Características principales

- **CRUD de tareas**: Crear, leer, actualizar y eliminar tareas.
- **Frontend moderno**: Interfaz en React, con estilos personalizados y feedback visual.
- **Backend simple**: API REST con Express, sin base de datos (almacenamiento en memoria).
- **Validaciones**: Formularios con validaciones y alertas amigables.
- **Diseño adaptable**: Uso de Bootstrap y componentes reutilizables.

---

## Estructura del proyecto

```
backend/           # Servidor Express (API REST)
  index.js         # Lógica de rutas y almacenamiento de tareas
  package.json     # Dependencias y scripts
frontend/          # Aplicación React + Vite
  src/
    components/    # Componentes reutilizables (Nav, TaskItem)
    pages/         # Vistas principales (Home, TaskList, TaskForm)
    services/      # Lógica para consumir la API
    types/         # Tipos TypeScript
    styles/        # Archivos CSS
  public/          # Archivos estáticos
  package.json     # Dependencias y scripts
```

---

## Instalación y ejecución

### Backend

1. Ir a la carpeta `backend`:
   ```bash
   cd backend
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor:
   ```bash
   npm start
   ```
   El backend corre en `http://localhost:3000`.

### Frontend

1. Ir a la carpeta `frontend`:
   ```bash
   cd frontend
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar la app:
   ```bash
   npm run dev
   ```
   El frontend corre en `http://localhost:5173` (por defecto).

---

## Uso

- Desde la web puedes crear nuevas tareas, editarlas, marcarlas como completadas o eliminarlas.
- El estado de las tareas se mantiene mientras el backend esté corriendo (no hay persistencia en base de datos).

---

## Tecnologías utilizadas

- **Frontend:** React, TypeScript, Vite, React Router, React Bootstrap, SweetAlert2
- **Backend:** Node.js, Express, CORS

---

## Notas

- Este proyecto es solo para fines demostrativos y de práctica.
- Puedes modificar y mejorar el código según tus necesidades.

---

## Autor

- Challenge realizado por Micaela
