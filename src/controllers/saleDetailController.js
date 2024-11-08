const db = require('../models');

const createSaleDetail = async (req, res) => {
    const { saleId, clothesId, price, quantity} = req.body;
    try {
        const saleDetail = await db.SaleDetail.create({ saleId, clothesId, quantity, price});
        res.status(201).json(saleDetail);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creando el detalle de la venta'})
    }
};

// Obtener todos los detalles de una venta en particular
const getSaleDetailsBySaleId = async (req, res) => {
    const { saleId } = req.params;
    try {
        const saleDetails = await db.SaleDetail.findAll({ 
            where: { saleId },
            include: {
                model: db.Clothes,
                attributes: ['name'],
            },
        });
        
        const totalAmount = saleDetails.reduce((total, detail) => total + (detail.price * detail.quantity), 0);

        res.status(200).json({ totalAmount, SaleDetails: saleDetails });
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error obteniendo los detalles de la venta' });
    }
}


// Obtener todos los detalles
const getAllSaleDetails = async (req, res) => {
    try {
      const saleDetails = await db.SaleDetail.findAll();
      res.status(200).json(saleDetails);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error obteniendo todos los detalles de venta' });
    }
  };
  
  module.exports = { createSaleDetail, getSaleDetailsBySaleId, getAllSaleDetails };