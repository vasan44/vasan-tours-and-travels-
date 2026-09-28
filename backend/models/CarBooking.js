const mongoose = require('mongoose');

const carBookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  selectedCar: { type: String, required: true },
  pickupDate: { type: String, required: true },
  location: { type: String, default: 'Chennai' },
  message: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('CarBooking', carBookingSchema);
