const mongoose = require('mongoose');

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

module.exports = mongoose.model('TourBooking', TourBookingSchema, 'tourbookings');
