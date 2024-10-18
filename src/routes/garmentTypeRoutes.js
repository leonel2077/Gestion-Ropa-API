const express = require('express');
const {
  createGarmentType,
  getGarmentTypes,
  getGarmentTypeById,
  deleteGarmentType
} = require('../controllers/garmentTypeController');

const router = express.Router();

router.post('/garment-types', createGarmentType);
router.get('/garment-types', getGarmentTypes);
router.get('/garment-types/:id', getGarmentTypeById);
router.delete('/garment-types/:id', deleteGarmentType);

module.exports = router;
