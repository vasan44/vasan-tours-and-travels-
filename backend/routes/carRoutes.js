const express = require('express');
const router = express.Router();
const { getAllCars, getCarsByCity, createCar, updateCar, deleteCar } = require('../controllers/carController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getAllCars);
router.get('/:city', getCarsByCity);
router.post('/', protect, createCar);
router.put('/:id', protect, updateCar);
router.delete('/:id', protect, deleteCar);

module.exports = router;
