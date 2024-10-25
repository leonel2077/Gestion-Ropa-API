// Dependencias
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
// Modelos
const { sequelize } = require('./src/models');
// Rutas
const brandRoutes = require('./src/routes/brandRoutes');
const countryRoutes = require('./src/routes/countryRoutes');
const userRoutes = require('./src/routes/userRoutes');
const garmentTypeRoutes = require('./src/routes/garmentTypeRoutes');
const clothesRoutes = require('./src/routes/clothesRoutes');
const saleRoutes = require('./src/routes/saleRoutes');


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', countryRoutes);
app.use('/api', brandRoutes);
app.use('/api', garmentTypeRoutes);
app.use('/api', clothesRoutes);
app.use('/api', saleRoutes);

const PORT = process.env.PORT || 4000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});