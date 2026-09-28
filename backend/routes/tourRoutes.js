const express = require('express');
const router = express.Router();
const Tour = require('../models/Tour');

// 1. new place add (POST)
router.post('/add', async (req, res) => {
    try {
        const newTour = new Tour(req.body);
        await newTour.save();
        res.status(201).json({ message: "Tour Added Successfully! 🌴" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 2. all place see (GET)
router.get('/all', async (req, res) => {
    try {
        const tours = await Tour.find();
        res.json(tours);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 3. Category  (GET - Ex: /api/tours/domestic)
router.get('/:category', async (req, res) => {
    try {
        const tours = await Tour.find({ category: req.params.category });
        res.json(tours);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;