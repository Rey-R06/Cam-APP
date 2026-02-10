# Cam-APP – Chat Privado

Cam-APP es una aplicación de mensajería privada desarrollada con Spring Boot en el backend y React en el frontend.  
El proyecto está enfocado en la práctica de desarrollo full stack y el uso de una arquitectura escalable.

---

## Objetivo

Construir una aplicación de chat que permita:
- Registro e inicio de sesión de usuarios
- Envío y recepción de mensajes privados
- Comunicación segura entre usuarios
- Base para mensajería en tiempo real

---

## Tecnologías

### Backend
- Java 17+
- Spring Boot
- Spring Web
- Spring Data JPA
- Spring Validation
- Maven
- MySQL / PostgreSQL

### Frontend
- React
- Vite
- JavaScript (ES6+)
- CSS
- Fetch API

---

## Arquitectura Backend

Arquitectura por capas:


- Controller: manejo de endpoints REST
- Service: lógica de negocio
- Repository: acceso a datos con JPA
- Model: entidades y relaciones
- Validation: validación de datos de entrada

---

## Estado del proyecto

### Backend
- Proyecto creado con Spring Initializr
- Dependencias configuradas
- Estructura base definida
- Validaciones activas
- Modelos en desarrollo

### Frontend
- Pendiente de implementación

---

## Ejecución del backend

```bash
mvn spring-boot:run
