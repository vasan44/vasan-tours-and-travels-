const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST - Create new contact
router.post('/', async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;
    
    const contact = new Contact({
      name,
      phone,
      email,
      message
    });

    await contact.save();
    res.status(201).json({ success: true, message: 'Contact saved successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

// GET - Fetch all contacts (sorted by newest first)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

// DELETE - Delete contact by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Contact.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

module.exports = router;
