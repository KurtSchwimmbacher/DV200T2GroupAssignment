const express = require('express');
const router = express.Router();
const CartItem = require('../models/Cart');

// CREATE a new cart item
router.post('/cart-items', async (req, res) => {
    try {
        const cartItem = await CartItem.create(req.body);
        res.status(201).json(cartItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// READ all cart items for a user
router.get('/cart-items/:username', async (req, res) => {
    try {
        const cartItems = await CartItem.find({ user: req.params.username });
        res.json(cartItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// UPDATE a cart item
router.patch('/cart-items/:id', async (req, res) => {
    try {
        const cartItem = await CartItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!cartItem) {
            return res.status(404).json({ message: 'Cart item not found' });
        }
        res.json(cartItem);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE a cart item
router.delete('/cart-items/:id', async (req, res) => {
    try {
        const cartItem = await CartItem.findByIdAndDelete(req.params.id);
        if (!cartItem) {
            return res.status(404).json({ message: 'Cart item not found' });
        }
        res.json({ message: 'Cart item deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
