const Booking = require('../models/Booking');
const Car = require('../models/Car');

exports.createBooking = async (req, res) => {
  try {
    console.log('🎫 TOUR BOOKING HIT');
    console.log('📥 REQ BODY:', req.body);
    
    const { cars, ...bookingData } = req.body;
    
    if (cars && cars.length > 0) {
      const carDocs = await Car.find({ _id: { $in: cars }, available: true });
      if (carDocs.length !== cars.length) {
        return res.status(400).json({ message: 'Some cars are not available' });
      }
      
      const totalAmount = carDocs.reduce((sum, car) => sum + car.pricePerDay, 0);
      bookingData.totalAmount = totalAmount;
      bookingData.cars = cars;
    }

    const booking = await Booking.create(bookingData);
    console.log('✅ Tour booking saved:', booking._id);
    res.status(201).json({ success: true, message: 'Tour booking created successfully', booking });
  } catch (error) {
    console.error('❌ Tour booking error:', error);
    res.status(500).json({ message: error.message });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    console.log('✅ GET /api/tour-bookings HIT');
    const { page = 1, limit = 100, status, search } = req.query;
    const query = {};
    
    if (status && status !== 'All') query.status = status;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { mobile: { $regex: search, $options: 'i' } },
        { destination: { $regex: search, $options: 'i' } }
      ];
    }

    console.log('📊 Query:', query);
    const bookings = await Booking.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    console.log('✅ Found bookings:', bookings.length);
    const total = await Booking.countDocuments(query);
    res.json(bookings);
  } catch (error) {
    console.error('❌ GET bookings error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateBookingStatus = async (req, res) => {
  try {
    console.log('🔄 UPDATE status for:', req.params.id, 'to:', req.body.status);
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    console.log('✅ Status updated');
    res.json(booking);
  } catch (error) {
    console.error('❌ Update error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    console.log('🗑️ DELETE booking:', req.params.id);
    await Booking.findByIdAndDelete(req.params.id);
    console.log('✅ Booking deleted');
    res.json({ success: true, message: 'Booking deleted' });
  } catch (error) {
    console.error('❌ Delete error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};
