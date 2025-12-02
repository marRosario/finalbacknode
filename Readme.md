# Backend Node.js + Express + Firestore 🔥

Este proyecto implementa un **backend REST** con Node.js y Express, conectado a **Firebase Firestore** para la gestión de productos y protegido con **JWT**. Está desplegado en **Vercel** como función serverless.

---

## 🚀 Características principales
- API REST con rutas de autenticación y productos.
- CRUD completo sobre Firestore.
- Autenticación con **JSON Web Tokens**.
- Middleware de seguridad para proteger rutas sensibles.
- Configuración de **CORS** para permitir requests desde frontend.
- Despliegue en **Vercel** con configuración en `vercel.json`.

---

## 📦 Librerías utilizadas
- **express** → framework del servidor.
- **cors** → configuración de CORS.
- **dotenv** → manejo de variables de entorno.
- **firebase** → conexión con Firestore.
- **jsonwebtoken** → generación y verificación de tokens JWT.

---



## 📂 Estructura del proyecto

- **/api/index.js** → servidor Express exportado para Vercel
- **/src/routes/** → rutas de login y productos
- **/src/controllers/** → lógica de controladores
- **/src/services/** → capa de servicios
- **/src/models/** → acceso a Firestore
- **/src/middleware/** → middleware JWT
- **/src/data/** → conexión a Firestore y generación de tokens
- **vercel.json** → configuración de despliegue en Vercel
- **package.json** → dependencias y scripts
- **.env** → variables de entorno (⚠️ no subir a GitHub)



## ⚙️ Variables de entorno necesarias
En tu archivo `.env`:
FIREBASE_API_KEY=...
FIREBASE_AUTH_DOMAIN=...
FIREBASE_STORAGE_BUCKET=...
FIREBASE_APP_ID=...
JWT_SECRET_KEY=...
PORT=3000


## 🧪 Ejemplos de requests (Postman)

### Login (obtener token)
**POST** `/api/login`

{
  "id": "user123",
  "email": "user@example.com"
}


## 🧪 Endpoints principales

### Obtener todos los productos
**GET** `/api/products`

### Obtener producto por ID
**GET** `/api/products/:id`

### Crear producto
**POST** `/api/products`
{
  "nombre": "Producto de prueba",
  "categoria": "Accesorios",
  "precio": 1200
}

Eliminar producto (requiere token)
DELETE /api/products/:id

Authorization: Bearer <JWT>
