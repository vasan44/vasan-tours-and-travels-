const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  pricePerKm: { type: Number, required: true },
  seatingCapacity: { type: Number, required: true },
  ac: { type: Boolean, default: true },
  fuelType: { type: String, required: true },
  transmission: { type: String, required: true },
  image: { type: String, required: true },
  city: { type: String, required: true },
  available: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Car', carSchema);
