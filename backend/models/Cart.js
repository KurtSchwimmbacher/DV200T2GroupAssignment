const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imagesURL:{
        type: String, 
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 1, // Default quantity is 1
    },
    user: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('CartItem', CartItemSchema);
