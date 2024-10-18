const db = require('../models');

const createGarmentType = async (req, res) => {
  try {
    const { name, description } = req.body;
    const garmentType = await db.GarmentType.create({ name, description });
    res.status(201).json(garmentType);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creando el tipo de prenda' });
  }
};

const getGarmentTypes = async (req, res) => {
  try {
    const garmentTypes = await db.GarmentType.findAll();
    res.status(200).json(garmentTypes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error obteniendo los tipos de prenda' });
  }
};

const getGarmentTypeById = async (req, res) => {
  try {
    const { id } = req.params;
    const garmentType = await db.GarmentType.findByPk(id);
    if (!garmentType) {
      return res.status(404).json({ error: 'Tipo de prenda no encontrado' });
    }
    res.status(200).json(garmentType);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error obteniendo el tipo de prenda' });
  }
};

const deleteGarmentType = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await db.GarmentType.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: 'Tipo de prenda no encontrado' });
    }
    res.status(200).json({ message: 'Tipo de prenda eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error eliminando el tipo de prenda' });
  }
};

module.exports = {
  createGarmentType,
  getGarmentTypes,
  getGarmentTypeById,
  deleteGarmentType
};
