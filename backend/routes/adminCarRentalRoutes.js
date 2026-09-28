const express = require('express');
const router = express.Router();
const CarRentalBooking = require('../models/CarRentalBooking');

router.get('/bookings', async (req, res) => {
  try {
    const bookings = await CarRentalBooking.find()
      .select('customerName mobileNumber journeyDate city carName pricePerKm pickupLocation dropLocation message status createdAt')
      .sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch('/bookings/:id/confirm', async (req, res) => {
  try {
    const booking = await CarRentalBooking.findByIdAndUpdate(
      req.params.id,
      { status: 'Confirmed' },
      { new: true }
    );
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch('/bookings/:id/cancel', async (req, res) => {
  try {
    const booking = await CarRentalBooking.findByIdAndUpdate(
      req.params.id,
      { status: 'Cancelled' },
      { new: true }
    );
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/bookings/:id', async (req, res) => {
  try {
    await CarRentalBooking.findByIdAndDelete(req.params.id);
    res.json({ message: 'Booking deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
