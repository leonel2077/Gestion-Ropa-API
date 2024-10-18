const db = require('../models');

const createClothes = async (req, res) => {
  try {
    const { name, color, price, stock, size, brandId, garmentTypeId } = req.body;
    const clothes = await db.Clothes.create({ name, color, price, stock, size, brandId, garmentTypeId });
    res.status(201).json(clothes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creando la prenda' });
  }
};

const getClothes = async (req, res) => {
  try {
    const clothes = await db.Clothes.findAll();
    res.status(200).json(clothes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error obteniendo las prendas' });
  }
};

const getClothesById = async (req, res) => {
  try {
    const { id } = req.params;
    const clothes = await db.Clothes.findByPk(id);
    if (!clothes) {
      return res.status(404).json({ error: 'Prenda no encontrada' });
    }
    res.status(200).json(clothes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error obteniendo la prenda' });
  }
};

const updateClothes = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, color, price, stock, size, brandId, garmentTypeId } = req.body;
    const clothes = await db.Clothes.findByPk(id);
    if (!clothes) {
      return res.status(404).json({ error: 'Prenda no encontrada' });
    }
    await clothes.update({ name, color, price, stock, size, brandId, garmentTypeId });
    res.status(200).json(clothes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error actualizando la prenda' });
  }
};

const deleteClothes = async (req, res) => {
  try {
    const { id } = req.params;
    const clothes = await db.Clothes.findByPk(id);
    if (!clothes) {
      return res.status(404).json({ error: 'Prenda no encontrada' });
    }
    await clothes.destroy();
    res.status(200).json({ message: 'Prenda eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error eliminando la prenda' });
  }
};

const filterClothesByColor = async (req, res) => {
    try {
      const { color } = req.query; 
      const clothes = await db.Clothes.findAll({
        where: { color } 
      });
      if (clothes.length === 0) {
        return res.status(404).json({ message: 'No se encontraron prendas con el color especificado' });
      }
      res.status(200).json(clothes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al filtrar por color' });
    }
};

const filterClothesByBrand = async (req, res) => {
    try {
      const { brandId } = req.query; 
      const clothes = await db.Clothes.findAll({
        where: { brandId } 
      });
      if (clothes.length === 0) {
        return res.status(404).json({ message: 'No se encontraron prendas para la marca especificada' });
      }
      res.status(200).json(clothes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al filtrar por marca' });
    }
};

const filterClothesByGarmentType = async (req, res) => {
    try {
        const { garmentTypeId } = req.query;
        const clothes = await db.Clothes.findAll({
            where: { garmentTypeId }
        });
        if (clothes.length === 0) {
            return res.status(404).json({ message: 'No se encontraron prendas para el tipo de prenda especificado' });
        }
        res.status(200).json(clothes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al filtrar por tipo de prenda' })
    }
};
  
  

module.exports = { createClothes, getClothes, getClothesById, updateClothes, deleteClothes, filterClothesByColor, filterClothesByBrand, filterClothesByGarmentType};
