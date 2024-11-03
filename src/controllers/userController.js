const db = require('../models');
const { compare } = require('bcryptjs');

const createUser = async (req, res) => {
  try {
    // Extraemos los datos del cuerpo de la solicitud (name, email, password, role)
    const { name, email, password, role } = req.body;

    // Creamos un nuevo usuario en la base de datos utilizando Sequelize
    const user = await db.User.create({ name, email, password, role });

    // Devolvemos una respuesta con el usuario recién creado
    res.status(201).json(user);
  } catch (error) {
    console.error(error); // Imprime cualquier error en la consola
    res.status(500).json({ error: 'Error creando el usuario' }); // Enviamos un mensaje de error si algo falla
  }
};

const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await db.User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Verificar la contraseña
    const isMatch = await compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: 'Contraseña incorrecta' });
    }

    // Generar el token JWT
    const token = jwt.sign(
      { id: user.id, role: user.role }, // Información a incluir en el token
      process.env.JWT_SECRET,          // Clave secreta desde el archivo .env
      { expiresIn: '1h' }              // Duración del token
    );

    // Devolver el token al cliente
    res.status(200).json({ message: 'Login exitoso', token, role: user.role });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el login' });
  }
};


const getUsers = async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error); // Imprime el error en la consola
    res.status(500).json({ error: 'Error obteniendo los usuarios' });
  }
};


const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await db.User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error obteniendo el usuario' });
  }
};
module.exports = { createUser, getUsers, getUserById, loginUser };