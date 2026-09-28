const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// --- MongoDB Connection ---
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error('❌ ERROR: MONGO_URI is not defined in .env file');
    process.exit(1);
}

console.log('🔄 Connecting to MongoDB...');

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('✅ Holidays Database Connected Successfully');
        console.log('📊 Database:', mongoose.connection.name);
        console.log('📊 Host:', mongoose.connection.host);
        console.log('📊 Ready State:', mongoose.connection.readyState);
    })
    .catch((err) => {
        console.error('❌ MongoDB Connection Error:', err.message);
        process.exit(1);
    });

// --- Import Routes ---
const adminRoutes = require('./routes/adminRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const carRoutes = require('./routes/carRoutes');
const carBookingRoutes = require('./routes/carBookingRoutes');
const adminCarRentalRoutes = require('./routes/adminCarRentalRoutes');
const tourRoutes = require('./routes/tourRoutes');
const contactRoutes = require('./routes/contactRoutes');

// --- API Routes ---
app.use('/api/admin', adminRoutes);
app.use('/api/admin', adminCarRentalRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/tour-bookings', bookingRoutes);
app.use('/api/cars', carRoutes);
app.use('/api', carBookingRoutes);
app.use('/api/tours', tourRoutes);
app.use('/api/contact', contactRoutes);

// Debug endpoint
app.get('/api/_debug/db', async (req, res) => {
    try {
        const CarRentalBooking = require('./models/CarRentalBooking');
        const count = await CarRentalBooking.countDocuments();
        res.json({
            connected: mongoose.connection.readyState === 1,
            database: mongoose.connection.name,
            host: mongoose.connection.host,
            collection: CarRentalBooking.collection.name,
            bookingsCount: count
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Legacy routes for backward compatibility
app.post('/api/book', async (req, res) => {
    try {
        console.log('✅ /api/book HIT');
        console.log('REQ BODY:', req.body);
        
        const Booking = require('./models/Booking');
        
        // Map frontend fields to schema fields
        const bookingData = {
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            whatsapp: req.body.whatsapp || req.body.mobile,
            destination: req.body.tourType || req.body.destination || 'General Tour',
            date: req.body.date,
            guests: req.body.guests,
            city: req.body.city || 'Not specified'
        };
        
        console.log('📦 Mapped data:', bookingData);
        
        const savedBooking = await Booking.create(bookingData);
        console.log('✅ SAVED BOOKING _id:', savedBooking._id);
        
        res.status(201).json({ 
            success: true, 
            message: "Tour Booking Saved Successfully! ✅",
            booking: savedBooking
        });
    } catch (error) {
        console.error('❌ /api/book ERROR:', error.message);
        console.error('Stack:', error.stack);
        res.status(500).json({ 
            success: false, 
            error: "Failed to save booking", 
            message: error.message,
            stack: error.stack 
        });
    }
});

// --- SERVER START ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
