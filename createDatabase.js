const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('', 'root', 'root1234', {
    host: 'localhost',
    dialect: 'mysql',
    port: 4000,
});

async function createDatabase() {
    try {
        await sequelize.query('CREATE DATABASE IF NOT EXISTS db_gestion_ropa_efi;');
        console.log('Base de datos creado de manera exitosa.')
    } catch (error) {
        console.error('Error al crear la base de datos: ', error);
    } finally {
        await sequelize.close();
    }
}

createDatabase();