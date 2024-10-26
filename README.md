# Gestión de Ropa - API

API para gestionar el inventario y las ventas de una tienda de ropa. 
Permite la administración de usuarios, prendas, marcas, tipos de prendas, ventas, detalles de venta y pagos.

## Requisitos Previos
- Node.js (versión 18 o superior)
- MySQL
- Sequelize CLI (para ejecutar las migraciones y definir modelos)
- Un administrador de dependencias (npm o yarn)

## Instalación y Ejecución

1. Clonar el repositorio:
   ```bash
    git clone git@github.com:leonel2077/Gestion-Ropa-API.git
    cd Gestion-Ropa-API
   ```
2. Instalar dependencias:
   ```bash
    npm install
   ```
3. Configurar base de datos:
Crear un archivo `.env` en la raíz del proyecto y configurar las variables de entorno necesarias.
    ```plaintext
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=tu_password
     DB_NAME=nombre_base_de_datos
     JWT_SECRET=clave_secreta
     PORT=4001
    ```
4. Crear base de datos y ejecutar migraciones:
    ```bash
    node createDatabase.js
    npx sequelize-cli db:migrate
    ```
5. Iniciar la API:
   ```bash
   npm start
   ```
La API estará disponible en `http://localhost:4001`.
