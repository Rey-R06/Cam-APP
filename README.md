# 💬 Chat Privado – Spring Boot + React

Proyecto en desarrollo de un **chat privado en tiempo real**, con backend en **Spring Boot** y frontend en **React**. El sistema está pensado para crecer por fases y terminar siendo una aplicación tipo WhatsApp / Messenger.

---

## 🚧 Estado del proyecto

**FASE ACTUAL:** 🟩 Fase 1 – Backend base (en progreso)

Hasta el momento se ha trabajado en:

* Creación del proyecto con **Spring Initializr**
* Configuración inicial del backend
* Modelado de las entidades principales (Models)

---

## 🧠 Objetivo del proyecto

Desarrollar un chat privado que permita:

* Comunicación en tiempo real
* Mostrar estado en línea / offline
* Enviar y recibir mensajes
* Implementar notificaciones
* Escalar a chats grupales y multimedia

El proyecto se desarrolla **por fases** para mantener orden y buenas prácticas.

---

## 🛠 Tecnologías utilizadas (hasta ahora)

### Backend

* **Java 17**
* **Spring Boot 3**
* **Spring Web**
* **Spring Security** (preparado, aún no implementado)
* **Spring Data JPA**
* **Validation (Jakarta Validation)**
* **H2 Database** (entorno de desarrollo)
* **Lombok**

### Frontend (planificado)

* React + Vite
* Tailwind CSS
* WebSockets

---

## 📁 Estructura actual del backend

```
src/main/java/com/chatapp/backend
└── models
    ├── User.java
    ├── Chat.java
    └── Message.java
```

---

## 🧩 Models implementados

### 👤 User

Representa a un usuario del sistema.

**Campos principales:**

* `id`
* `username`
* `email`
* `password`
* `profileImage`
* `online`
* `status`

Se utiliza **Validation** para garantizar datos válidos.

---

### 💬 Chat

Representa una conversación.

**Características:**

* Puede ser privada o grupal
* Relación ManyToMany con usuarios

**Campos:**

* `id`
* `isGroup`
* `participants`

---

### ✉️ Message

Representa un mensaje dentro de un chat.

**Campos:**

* `id`
* `content`
* `timestamp`
* `seen`
* `sender`
* `chat`

Relaciones:

* ManyToOne con User
* ManyToOne con Chat

---

## 🔐 Validaciones implementadas

Se usa **Jakarta Validation** para:

* Evitar campos vacíos (`@NotBlank`)
* Validar correos (`@Email`)
* Garantizar integridad de datos desde el request

---

## 🗺 Roadmap del proyecto

### 🟩 Fase 1 – Backend base (ACTUAL)

* [x] Crear proyecto con Spring Initializr
* [x] Definir entidades (User, Chat, Message)
* [ ] Crear repositorios (JPA)
* [ ] Configurar seguridad JWT

### 🟨 Fase 2 – Autenticación

* Login y registro
* JWT
* Protección de endpoints

### 🟦 Fase 3 – Tiempo real

* WebSockets (STOMP)
* Mensajes en tiempo real
* Estado en línea / offline
* Indicador "escribiendo…"

### 🟥 Fase 4 – Funciones avanzadas

* Mensajes leídos
* Notificaciones
* Envío de imágenes
* Chats grupales

### ⬛ Fase 5 – Despliegue

* Backend en Render / Fly.io
* Frontend en Vercel / Netlify

---

## ▶️ Próximo paso

👉 **Crear los Repositories (UserRepository, ChatRepository, MessageRepository)**

---

## ✨ Autor

Proyecto desarrollado como práctica profesional para reforzar:

* Spring Boot
* Arquitectura por capas
* Comunicación en tiempo real
* Integración Backend + Frontend

---

🚀 *Proyecto en construcción, mejoras continuas por fases.*
