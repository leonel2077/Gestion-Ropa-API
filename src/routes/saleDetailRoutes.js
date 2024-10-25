const express = require('express');
const saleDetailController = require('../controllers/saleDetailController');
const router = express.Router();

router.post('/sale-detail/', saleDetailController.createSaleDetail);
router.get('/sale-detail/', saleDetailController.getAllSaleDetails);
router.get('/sale-detail/filter/sale', saleDetailController.getSaleDetailsBySaleId);

module.exports = router;
