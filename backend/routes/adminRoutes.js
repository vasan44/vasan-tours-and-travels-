const express = require('express');
const router = express.Router();
const { login, getDashboardStats, getAllBookings, getAllCars, confirmBooking, cancelBooking, deleteBooking } = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');

router.post('/login', login);
router.get('/dashboard', protect, getDashboardStats);
router.get('/bookings', getAllBookings);
router.get('/cars', getAllCars);
router.put('/bookings/:id/confirm', confirmBooking);
router.put('/bookings/:id/cancel', cancelBooking);
router.delete('/bookings/:id', deleteBooking);

module.exports = router;
