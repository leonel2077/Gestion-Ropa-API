const express = require('express');
const { createSale, getSales, getSaleById, deleteSale } = require('../controllers/saleController');
const authenticate = require('../middlewares/authenticate');
const router = express.Router();

router.post('/sales/', authenticate, createSale);
router.get('/sales/', authenticate, getSales);
router.get('/sales/:id', authenticate, getSaleById);
router.delete('/sales/:id', authenticate, deleteSale);

module.exports = router;
