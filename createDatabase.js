const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('', 'root', 'kidsSeeGh0sts', {
    host: 'localhost',
    dialect: 'mysql'
});

async function createDatabase() {
    try {
        await sequelize.query('CREATE DATABASE IF NOT EXISTS DB_GESTION_ROPA_EFI;');
        console.log('Base de datos creado de manera exitosa.')
    } catch (error) {
        console.error('Error al crear la base de datos: ', error);
    } finally {
        await sequelize.close();
    }
}

createDatabase();