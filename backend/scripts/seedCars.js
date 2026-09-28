// backend/scripts/seedCars.js
const mongoose = require('mongoose');
const Car = require('../models/Car'); 
require('dotenv').config();

const allCars = [
  // 📍 MADURAI - 10 CARS
  { id: 1, name: "Maruti Swift", pricePerKm: "₹12/km", seats: "5", city: "madurai", image: "/images/cars/swift.png", features: ["AC", "Music System", "Safety Airbags"] },
  { id: 2, name: "Toyota Etios", pricePerKm: "₹14/km", seats: "5", city: "madurai", image: "/images/cars/etios.png", features: ["AC", "Large Boot Space", "Safety"] },
  { id: 3, name: "Mahindra XUV700", pricePerKm: "₹25/km", seats: "7", city: "madurai", image: "/images/cars/xuv700.png", features: ["Sunroof", "Luxury SUV", "ADAS"] },
  { id: 4, name: "Maruti Ertiga", pricePerKm: "₹16/km", seats: "7", city: "madurai", image: "/images/cars/ertiga.png", features: ["Dual AC", "Music System", "Comfortable"] },
  { id: 5, name: "Hyundai Creta", pricePerKm: "₹18/km", seats: "5", city: "madurai", image: "/images/cars/creta.png", features: ["Ventilated Seats", "GPS", "Music System"] },
  { id: 6, name: "Tata Nexon", pricePerKm: "₹15/km", seats: "5", city: "madurai", image: "/images/cars/nexon.png", features: ["5-Star Safety", "AC", "Harman Sound"] },
  { id: 7, name: "Honda Amaze", pricePerKm: "₹14/km", seats: "5", city: "madurai", image: "/images/cars/amaze.png", features: ["Comfort Ride", "AC", "Music System"] },
  { id: 8, name: "Kia Seltos", pricePerKm: "₹20/km", seats: "5", city: "madurai", image: "/images/cars/seltos.png", features: ["Ambient Lighting", "Bose Audio", "AC"] },
  { id: 9, name: "Mahindra Scorpio-N", pricePerKm: "₹22/km", seats: "7", city: "madurai", image: "/images/cars/scorpio.png", features: ["4x4 Power", "AC", "Music System"] },
  { id: 10, name: "Toyota Fortuner", pricePerKm: "₹35/km", seats: "7", city: "madurai", image: "/images/cars/fortuner.png", features: ["Premium Luxury", "AC", "Top Safety"] },

  // 📍 CHENNAI - 10 CARS
  { id: 11, name: "Honda City", pricePerKm: "₹15/km", seats: "5", city: "chennai", image: "/images/cars/honda-city.png", features: ["Automatic", "AC", "Sunroof"] },
  { id: 12, name: "Toyota Innova Crysta", pricePerKm: "₹22/km", seats: "8", city: "chennai", image: "/images/cars/innova.png", features: ["Business Class", "AC", "Spacious"] },
  { id: 13, name: "Hyundai i20", pricePerKm: "₹13/km", seats: "5", city: "chennai", image: "/images/cars/i20.png", features: ["Premium Hatch", "Music System", "AC"] },
  { id: 14, name: "Skoda Kushaq", pricePerKm: "₹19/km", seats: "5", city: "chennai", image: "/images/cars/kushaq.png", features: ["European Build", "Safety", "AC"] },
  { id: 15, name: "Volkswagen Virtus", pricePerKm: "₹20/km", seats: "5", city: "chennai", image: "/images/cars/virtus.png", features: ["Turbo Engine", "Performance", "AC"] },
  { id: 16, name: "MG Hector", pricePerKm: "₹24/km", seats: "5", city: "chennai", image: "/images/cars/hector.png", features: ["Internet Inside", "Panoramic Sunroof", "AC"] },
  { id: 17, name: "Kia Sonet", pricePerKm: "₹15/km", seats: "5", city: "chennai", image: "/images/cars/sonet.png", features: ["Compact SUV", "GPS", "AC"] },
  { id: 18, name: "Tata Harrier", pricePerKm: "₹23/km", seats: "5", city: "chennai", image: "/images/cars/harrier.png", features: ["Stylish Design", "Panoramic Roof", "AC"] },
  { id: 19, name: "Maruti Brezza", pricePerKm: "₹16/km", seats: "5", city: "chennai", image: "/images/cars/brezza.png", features: ["Reliable", "Smart Play", "AC"] },
  { id: 20, name: "Toyota Camry", pricePerKm: "₹45/km", seats: "5", city: "chennai", image: "/images/cars/camry.png", features: ["Hybrid Luxury", "Quiet Ride", "AC"] }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Car.deleteMany({}); // 
    await Car.insertMany(allCars);
    console.log("✅ 20 Cars (10 Madurai + 10 Chennai) Added Successfully!");
    process.exit();
  } catch (err) { console.error(err); process.exit(1); }
};
seedDB();