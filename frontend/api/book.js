const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

if (mongoose.connection.readyState === 0) {
  mongoose.connect(MONGO_URI);
}

const TourBookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  whatsapp: { type: String },
  city: { type: String },
  destination: { type: String, required: true },
  date: { type: Date, required: true },
  guests: { type: Number, required: true },
  status: { type: String, enum: ['Pending', 'Confirmed', 'Cancelled'], default: 'Pending' }
}, { timestamps: true });

const Booking = mongoose.models.TourBooking || mongoose.model('TourBooking', TourBookingSchema, 'tourbookings');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { name, email, mobile, whatsapp, city, tourType, destination, date, guests } = req.body;
    const booking = await Booking.create({
      name,
      email,
      mobile,
      whatsapp: whatsapp || mobile,
      city: city || 'Not specified',
      destination: tourType || destination || 'General Tour',
      date,
      guests,
    });
    res.status(201).json({ success: true, message: 'Tour Booking Saved Successfully! ✅', booking });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to save booking', message: error.message });
  }
};
