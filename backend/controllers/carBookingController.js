const CarBooking = require('../models/CarBooking');

exports.createCarBooking = async (req, res) => {
  try {
    console.log('🚗 Car booking request:', req.body);
    
    const carBooking = await CarBooking.create(req.body);
    
    console.log('✅ Car booking saved:', carBooking._id);
    
    res.status(201).json({ 
      success: true,
      message: 'Car booking successful!',
      booking: carBooking 
    });
  } catch (error) {
    console.error('❌ Car booking error:', error.message);
    res.status(500).json({ 
      success: false,
      message: 'Failed to save booking',
      details: error.message 
    });
  }
};

exports.getAllCarBookings = async (req, res) => {
  try {
    const bookings = await CarBooking.find().sort({ createdAt: -1 });
    res.json({ success: true, bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
