💬 Cam-APP – Chat Privado

Cam-APP es una aplicación de mensajería privada desarrollada con Spring Boot en el backend y React en el frontend.
El proyecto está orientado a la práctica de desarrollo full stack, aplicando buenas prácticas y una arquitectura escalable.

🎯 Objetivo del proyecto

Desarrollar un sistema de chat que permita:

Registro e inicio de sesión de usuarios

Envío y recepción de mensajes privados

Comunicación segura entre usuarios

Base sólida para implementar mensajería en tiempo real

🛠️ Tecnologías utilizadas
Backend

Java 17+

Spring Boot

Spring Web

Spring Data JPA

Spring Validation

Maven

Base de datos relacional (MySQL / PostgreSQL)

Frontend

React

Vite

JavaScript (ES6+)

CSS

Fetch API

🏗️ Arquitectura Backend

El backend está organizado en una arquitectura por capas:

Controller → Service → Repository → Model

Capas

Controller: Manejo de peticiones HTTP (REST)

Service: Lógica de negocio

Repository: Acceso a datos mediante JPA

Model (Entities): Representación de las tablas

Validation: Validación de datos de entrada

📦 Estado actual del proyecto
Backend

Proyecto inicializado con Spring Initializr

Dependencias configuradas

Estructura base del proyecto creada

Validaciones activas

Modelos en desarrollo

Frontend

Pendiente de implementación

🚀 Ejecución del backend
mvn spring-boot:run


Antes de ejecutar, configurar:

Base de datos

Credenciales en application.properties

Variables de entorno necesarias

🔜 Próximos pasos

Crear modelos: User, Chat y Message

Implementar endpoints REST

Agregar autenticación (JWT)

Implementar mensajería en tiempo real (WebSockets)

Desarrollo del frontend con React

📚 Nota

Este proyecto tiene fines educativos y prácticos, enfocado en reforzar conceptos de desarrollo backend y frontend moderno.
