const mongoose = require('mongoose');

const TourSchema = new mongoose.Schema({
    title: { type: String, required: true },       // Ex: Maldives Trip
    city: { type: String, required: true },        // Ex: Male
    category: { 
        type: String, 
        enum: ['domestic', 'international'],       // two
        required: true 
    }, 
    image: { type: String, required: true },       // Image URL
    price: { type: Number, required: true },       // Price
    description: { type: String },                 // Details
    duration: { type: String }                     // Ex: 3 Days / 2 Nights
}, { timestamps: true });

module.exports = mongoose.model('Tour', TourSchema);