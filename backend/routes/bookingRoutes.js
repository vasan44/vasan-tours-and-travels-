const express = require('express');
const router = express.Router();
const { createBooking, getAllBookings, updateBookingStatus, deleteBooking } = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', createBooking);
router.post('/create', createBooking);
router.get('/', getAllBookings);
router.put('/:id/status', updateBookingStatus);
router.delete('/:id', deleteBooking);

module.exports = router;
