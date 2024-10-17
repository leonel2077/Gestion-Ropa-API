const db = require('../models');

const createCountry = async (req, res) => {
  try {
    const { name } = req.body;
    const country = await db.Country.create({ name });
    res.status(201).json(country);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el país' });
  }
};

const getCountries = async (req, res) => {
  try {
    const countries = await db.Country.findAll();
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los países' });
  }
};

const getCountryById = async (req, res) => {
  try {
    const { id } = req.params;
    const country = await db.Country.findByPk(id);

    if (!country) {
      return res.status(404).json({ error: 'País no encontrado' });
    }

    res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el país' });
  }
};

const deleteCountry = async (req, res) => {
  try {
    const { id } = req.params;

    const country = await db.Country.findByPk(id);
    if (!country) {
      return res.status(404).json({ error: 'País no encontrado' });
    }

    await country.destroy();
    res.status(204).send(); // Sin contenido
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el país' });
  }
};

module.exports = { createCountry, getCountries, getCountryById, deleteCountry };
