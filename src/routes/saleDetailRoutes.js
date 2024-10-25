const express = require('express');
const router = express.Router();
const saleDetailController = require('../controllers/saleDetailController');

router.post('/sale-detail/', saleDetailController.createSaleDetail);
router.get('/sale-detail/', saleDetailController.getAllSaleDetails);
router.get('/sale-detail/filter/sale', saleDetailController.getSaleDetailsBySaleId);
