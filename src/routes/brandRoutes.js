const express = require('express');
const { createBrand, getBrands, getBrandById, deleteBrand } = require('../controllers/brandController');
const router = express.Router();

router.post('/brands', createBrand);
router.get('/brands', getBrands); 
router.get('/brands/:id', getBrandById); 
router.delete('/brands/:id', deleteBrand); 

module.exports = router;
