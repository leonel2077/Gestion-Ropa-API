const express = require('express');
const router = express.Router();
const clothesController = require('../controllers/clothesController');

router.post('/clothes', clothesController.createClothes);
router.get('/clothes', clothesController.getClothes);
router.get('/clothes/:id', clothesController.getClothesById);
router.put('/clothes/:id', clothesController.updateClothes);
router.delete('/clothes/:id', clothesController.deleteClothes);

router.get('/clothes/filter/color', clothesController.filterClothesByColor);
router.get('/clothes/filter/brand', clothesController.filterClothesByBrand);
router.get('/clothes/filter/garmentType', clothesController.filterClothesByGarmentType);

module.exports = router;
