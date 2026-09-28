const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const Booking = require('../models/Booking');
const CarRentalBooking = require('../models/CarRentalBooking');
const Car = require('../models/Car');

exports.login = async (req, res) => {
  try {
    console.log('🔐 Login attempt:', req.body.email);
    
    const { email, password } = req.body;

    if (!email || !password) {
      console.log('❌ Missing email or password');
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const admin = await Admin.findOne({ email });
    
    if (!admin) {
      console.log('❌ Admin not found:', email);
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    console.log('✅ Admin found:', admin.email);

    const isPasswordValid = await admin.comparePassword(password);
    
    if (!isPasswordValid) {
      console.log('❌ Invalid password for:', email);
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    console.log('✅ Password valid for:', email);

    const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
    const token = jwt.sign(
      { id: admin._id, email: admin.email, role: admin.role }, 
      JWT_SECRET, 
      { expiresIn: '7d' }
    );

    console.log('✅ Token generated for:', email);

    res.json({ 
      success: true,
      token, 
      admin: { 
        id: admin._id, 
        email: admin.email, 
        role: admin.role 
      } 
    });

  } catch (error) {
    console.error('❌ Login error:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getDashboardStats = async (req, res) => {
  try {
    const totalBookings = await CarRentalBooking.countDocuments();
    const totalCars = await Car.countDocuments();
    const recentBookings = await CarRentalBooking.find()
      .sort({ createdAt: -1 })
      .limit(10);
    
    res.json({ totalBookings, totalCars, recentBookings });
  } catch (error) {
    console.error('❌ Dashboard error:', error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const { recent, search, status } = req.query;
    let query = {};
    
    // Search filter
    if (search) {
      query.$or = [
        { customerName: { $regex: search, $options: 'i' } },
        { mobileNumber: { $regex: search, $options: 'i' } },
        { city: { $regex: search, $options: 'i' } }
      ];
    }
    
    // Status filter
    if (status && status !== 'All') {
      query.status = status;
    }
    
    let bookingsQuery = CarRentalBooking.find(query);
    
    if (recent === 'true') {
      bookingsQuery = bookingsQuery.sort({ createdAt: -1 }).limit(10);
    } else {
      bookingsQuery = bookingsQuery.sort({ createdAt: -1 });
    }
    
    const bookings = await bookingsQuery;
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.confirmBooking = async (req, res) => {
  try {
    console.log('✅ Confirming booking ID:', req.params.id);
    const booking = await CarRentalBooking.findByIdAndUpdate(
      req.params.id,
      { status: 'Confirmed' },
      { new: true }
    );
    if (!booking) {
      console.log('❌ Booking not found:', req.params.id);
      return res.status(404).json({ message: 'Booking not found' });
    }
    console.log('✅ Booking confirmed successfully:', booking._id);
    res.json({ message: 'Booking confirmed', booking });
  } catch (error) {
    console.error('❌ Confirm error:', error);
    res.status(500).json({ message: error.message });
  }
};

exports.cancelBooking = async (req, res) => {
  try {
    console.log('❌ Cancelling booking ID:', req.params.id);
    const booking = await CarRentalBooking.findByIdAndUpdate(
      req.params.id,
      { status: 'Cancelled' },
      { new: true }
    );
    if (!booking) {
      console.log('❌ Booking not found:', req.params.id);
      return res.status(404).json({ message: 'Booking not found' });
    }
    console.log('✅ Booking cancelled successfully:', booking._id);
    res.json({ message: 'Booking cancelled', booking });
  } catch (error) {
    console.error('❌ Cancel error:', error);
    res.status(500).json({ message: error.message });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    console.log('🗑️ Deleting booking ID:', req.params.id);
    const booking = await CarRentalBooking.findByIdAndDelete(req.params.id);
    if (!booking) {
      console.log('❌ Booking not found:', req.params.id);
      return res.status(404).json({ message: 'Booking not found' });
    }
    console.log('✅ Booking deleted successfully:', req.params.id);
    res.json({ message: 'Booking deleted' });
  } catch (error) {
    console.error('❌ Delete error:', error);
    res.status(500).json({ message: error.message });
  }
};

exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find().sort({ city: 1, name: 1 });
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
