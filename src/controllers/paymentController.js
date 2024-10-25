const db = require('../models');

const createPayment = async (req, res) => {
  try {
    const { SaleId, PaymentMethod, Amount } = req.body;
    const payment = await db.Payment.create({ SaleId, PaymentMethod, Amount });
    res.status(201).json(payment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creando el pago' });
  }
};

const getPayments = async (req, res) => {
  try {
    const payments = await db.Payment.findAll({
      include: {
        model: db.Sale,
        attributes: ['totalAmount', 'saleDate'],
        include: { model: db.User, attributes: ['name', 'email'] }
      }
    });
    res.status(200).json(payments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error obteniendo los pagos' });
  }
};

const getPaymentById = async (req, res) => {
  try {
    const { id } = req.params;

    const payment = await db.Payment.findByPk(id, {
      include: {
        model: db.Sale,
        attributes: ['totalAmount', 'saleDate'],
        include: { model: db.User, attributes: ['name', 'email'] }
      }
    });

    if (!payment) {
      return res.status(404).json({ error: 'Pago no encontrado' });
    }

    res.status(200).json(payment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error obteniendo el pago' });
  }
};

const deletePayment = async (req, res) => {
  try {
    const { id } = req.params;

    const payment = await db.Payment.findByPk(id);

    if (!payment) {
      return res.status(404).json({ error: 'Pago no encontrado' });
    }

    await payment.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error eliminando el pago' });
  }
};

module.exports = { createPayment, getPayments, getPaymentById, deletePayment };
