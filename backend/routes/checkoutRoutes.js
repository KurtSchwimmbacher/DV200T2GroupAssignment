const express = require('express');
const router = express.Router();
const CheckoutItem = require('../models/Checkouts');

// CREATE a new checkout item
router.post('/create', async (req, res) => {
    try {
        const { username, products } = req.body;
        const checkoutItem = await CheckoutItem.create({ username, products });
        res.status(201).json(checkoutItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route to get all checked out items
router.get('/all', async (req, res) => {
    try {
        const checkoutItems = await CheckoutItem.find();
        res.json(checkoutItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
