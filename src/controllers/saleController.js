const db = require('../models');
const clothesController = require('./clothesController');

const createSale = async (req, res) => {
    try {
      const { totalAmount, userId, saleDetails } = req.body;
      const sale = await db.Sale.create({ totalAmount, userId, });

      for (const detail of saleDetails) {
        const { clothesId, quantity, price } = detail;

        // Crea cada SaleDetail asociado a la venta
        await db.SaleDetail.create({
            saleId: sale.id,
            clothesId,
            quantity,
            price
        });

        // Reduce el stock
        await clothesController.reduceStock(clothesId, quantity);
      }

      res.status(201).json(sale);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creando la venta' });
    }
};

const getSales = async (req, res) => {
    try {
      const userId = req.user.id; 
      const userRole = req.user.role; 
  
      let sales;
  
      if (userRole === 'admin') {
        sales = await db.Sale.findAll({
          include: { model: db.User, attributes: ['name', 'email'] },
        });
      } else if (userRole === 'user') {
        sales = await db.Sale.findAll({
          where: { userId }, 
          include: { model: db.User, attributes: ['name', 'email'] },
        });
      } else {
        return res.status(403).json({ error: 'No tienes permisos para ver esta información' });
      }
  
      res.status(200).json(sales);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error obteniendo las ventas' });
    }
};
  

const getSaleById = async (req, res) => {
    try {
      const { id } = req.params;
  
      const sale = await db.Sale.findByPk(id, {
        include: { model: db.User, attributes: ['name', 'email'] }
      });
  
      if (!sale) {
        return res.status(404).json({ error: 'Venta no encontrada' });
      }
  
      res.status(200).json(sale);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error obteniendo la venta' });
    }
};
  
const deleteSale = async (req, res) => {
    try {
      const { id } = req.params;
  
      const sale = await db.Sale.findByPk(id);
  
      if (!sale) {
        return res.status(404).json({ error: 'Venta no encontrada' });
      }
  
      await sale.destroy();
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error eliminando la venta' });
    }
};
  
module.exports = { createSale, getSales, getSaleById, deleteSale };
