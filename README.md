# Phone Shop - Frontend Technical Test

Aplicación SPA de e-commerce para dispositivos móviles desarrollada con React. Implementa un sistema completo de catálogo de productos con búsqueda en tiempo real, detalles de producto, selección de opciones y gestión de carrito.

**React**: 19.2 | **Vite**: 7.3

Desarrollado por **Daniel Fuentes ([JDany94](https://github.com/JDany94))** como parte de una prueba tecnica para **Nunegal Consulting**.

---

## Características:

- Listado de productos con búsqueda en tiempo real
- Detalle de producto con selección de opciones
- Sistema de caché cliente (1h expiración)
- Responsive design
- Gestión de carrito

---

## Deploy

Se utiliza GitHub Pages para desplegar la aplicación en la URL [https://jdany94.github.io/FrontendDevTechnicalTest-NunegalConsulting/](https://jdany94.github.io/FrontendDevTechnicalTest-NunegalConsulting/)

---

## Scripts disponibles

```bash
npm start     # Modo desarrollo
npm run build # Build producción
npm test      # Ejecutar tests
npm run lint  # Verificar código
```

---

## Ejecución local

### 1. Clonar e instalar dependencias

```bash
git clone git@github.com:JDany94/FrontendDevTechnicalTest-NunegalConsulting.git
cd FrontendDevTechnicalTest-NunegalConsulting
npm install
```

### 2. Inicar servidor de desarrollo

```bash
npm start
```

### 3. Acceder a la aplicación

```bash
http://localhost:5173
```

### 4. Tests automatizados

```bash
npm test
```

### 5. Verificar código

```bash
npm run lint
```

---

## Sistema de caché

La aplicación implementa un sistema de caché en cliente usando localStorage:

Características

- Duración: 1 hora (3600000ms)

- Datos cacheados:
  - Listado de productos
  - Detalles individuales de cada producto

- Validación: Automática por timestamp
