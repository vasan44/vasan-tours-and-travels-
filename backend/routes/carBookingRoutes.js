const express = require('express');
const router = express.Router();
const { createCarRentalBooking, getAllCarRentalBookings } = require('../controllers/carRentalBookingController');

router.post('/book-car', createCarRentalBooking);
router.get('/book-car', getAllCarRentalBookings);

module.exports = router;
