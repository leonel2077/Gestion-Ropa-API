const db = require('../models');

const createBrand = async (req, res) => {
  const { name, countryId } = req.body;

  try {
    const brand = await db.Brand.create({ name, countryId });
    res.status(201).json(brand);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creando la marca' });
  }
};

const getBrands = async (req, res) => {
  try {
    const brands = await db.Brand.findAll({ include: db.Country });
    res.status(200).json(brands);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error obteniendo las marcas' });
  }
};

const getBrandById = async (req, res) => {
  const { id } = req.params;

  try {
    const brand = await db.Brand.findByPk(id, { include: db.Country });
    if (!brand) {
      return res.status(404).json({ error: 'Marca no encontrada' });
    }
    res.status(200).json(brand);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error obteniendo la marca' });
  }
};

const deleteBrand = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.Brand.destroy({ where: { id } });
    if (!result) {
      return res.status(404).json({ error: 'Marca no encontrada' });
    }
    res.status(200).json({ message: 'Marca eliminada' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error eliminando la marca' });
  }
};

module.exports = { createBrand, getBrands, getBrandById, deleteBrand };
