const Car = require('../models/Car');

// Get cars by city
exports.getCarsByCity = async (req, res) => {
  try {
    const { city } = req.params;
    const cars = await Car.find({ city: city.toLowerCase() });
    res.status(200).json({ success: true, data: cars });
  } catch (error) {
    console.error('Error fetching cars:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all cars
exports.getAllCars = async (req, res) => {
  try {
    const { city } = req.query;
    const filter = city ? { city: city.toLowerCase() } : {};
    const cars = await Car.find(filter);
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createCar = async (req, res) => {
  try {
    const car = await Car.create(req.body);
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteCar = async (req, res) => {
  try {
    await Car.findByIdAndDelete(req.params.id);
    res.json({ message: 'Car deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
