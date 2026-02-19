# ✅ Challenge ForIT — Lista de Tareas Fullstack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

</div>

---

## 🌟 Características principales

- 📋 **CRUD completo** — Crear, leer, actualizar y eliminar tareas
- ⚛️ **Frontend moderno** — React + TypeScript con estilos personalizados y feedback visual
- ⚡ **Backend simple** — API REST con Express, sin base de datos (almacenamiento en memoria)
- 🛡️ **Validaciones** — Formularios con validaciones y alertas amigables con SweetAlert2
- 📱 **Diseño adaptable** — Componentes reutilizables con React Bootstrap

---

## 📂 Estructura del proyecto

```
challenge_forit/
├── backend/                  # Servidor Express (API REST)
│   ├── index.js              # Lógica de rutas y almacenamiento de tareas
│   └── package.json
│
└── frontend/                 # Aplicación React + Vite
    ├── src/
    │   ├── components/       # Nav, TaskItem...
    │   ├── pages/            # Home, TaskList, TaskForm
    │   ├── services/         # Consumo de la API
    │   ├── types/            # Tipos TypeScript
    │   └── styles/           # Archivos CSS
    ├── public/
    └── package.json
```

---

## 🔌 Endpoints de la API

|  Método  | Endpoint         | Descripción                    |
| :------: | ---------------- | ------------------------------ |
|  `GET`   | `/api/tasks`     | Obtener todas las tareas       |
|  `POST`  | `/api/tasks`     | Crear una nueva tarea          |
|  `PUT`   | `/api/tasks/:id` | Actualizar una tarea existente |
| `DELETE` | `/api/tasks/:id` | Eliminar una tarea             |

---

## ⚙️ Instalación y ejecución

> **Requisitos:** Node.js v18+ y npm

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/TU_USUARIO/challenge_forit.git
cd challenge_forit
```

### 2️⃣ Backend

```bash
cd backend
npm install
npm start
```

🟢 Servidor corriendo en `http://localhost:3000`

### 3️⃣ Frontend

```bash
cd frontend
npm install
npm run dev
```

🟢 App disponible en `http://localhost:5173`

---

## 🖥️ Uso

Una vez que ambos servidores estén activos, podés:

- ✏️ **Crear** nuevas tareas desde el formulario
- 👁️ **Ver** todas tus tareas en el listado
- 🔄 **Editar** tareas existentes
- ✅ **Marcarlas** como completadas
- 🗑️ **Eliminarlas** cuando ya no las necesités

> ⚠️ Las tareas se almacenan en memoria: si el backend se reinicia, los datos se pierden.

---

## 🛠️ Tecnologías utilizadas

| Capa         | Tecnologías                                                         |
| ------------ | ------------------------------------------------------------------- |
| **Frontend** | React, TypeScript, Vite, React Router, React Bootstrap, SweetAlert2 |
| **Backend**  | Node.js, Express, CORS                                              |

---

## 📸 Capturas de pantalla

A continuación se muestran algunas capturas de la aplicación:

![Captura 362](<img-app/Captura%20de%20pantalla%20(362).png>)
![Captura 363](<img-app/Captura%20de%20pantalla%20(363).png>)
![Captura 364](<img-app/Captura%20de%20pantalla%20(364).png>)
![Captura 365](<img-app/Captura%20de%20pantalla%20(365).png>)
![Captura 366](<img-app/Captura%20de%20pantalla%20(366).png>)

## 👩‍💻 Autora

<div align="center">

Desarrollado con 💜 por **Micaela**  
Challenge técnico — Academia ForIT 2026

</div>
