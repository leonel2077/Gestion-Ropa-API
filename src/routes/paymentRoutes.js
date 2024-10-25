const express = require('express');
const { createPayment, getPayments, getPaymentById, deletePayment } = require('../controllers/paymentController');
const authenticate = require('../middlewares/authenticate');
const router = express.Router();

router.post('/payments/', authenticate, createPayment);
router.get('/payments/', authenticate, getPayments);
router.get('/payments/:id', authenticate, getPaymentById);
router.delete('/payments/:id', authenticate, deletePayment);

module.exports = router;
