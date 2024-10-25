const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const authHeader = req.headers['authorization']; // Obtiene el token 

  if (!authHeader) {
    return res.status(401).json({ error: 'Acceso denegado. Token no proporcionado' });
  }

  const token = authHeader.split(' ')[1]; // El formato esperado es 'Bearer <token>'

  if (!token) {
    return res.status(401).json({ error: 'Acceso denegado. Token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    req.user = decoded;  // Guarda los datos decodificados
    next();
  } catch (error) {
    res.status(400).json({ error: 'Token no válido' });
  }
};

module.exports = authenticate;
