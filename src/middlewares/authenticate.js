const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  console.log('Authorization Header:', authHeader); 

  if (!authHeader) {
    return res.status(401).json({ error: 'Acceso denegado. Token no proporcionado' });
  }

  const token = authHeader.split(' ')[1];

  console.log('Token Extraído:', token); 

  if (!token) {
    return res.status(401).json({ error: 'Acceso denegado. Token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log('Usuario Decodificado:', req.user); 
    next();
  } catch (error) {
    console.error('Error al verificar el token:', error); 
    res.status(400).json({ error: 'Token no válido' });
  }
};

module.exports = authenticate;
