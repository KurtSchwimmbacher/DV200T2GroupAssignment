const mongoose = require('mongoose');

const CheckoutSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    products: [{
        name: {
            type: String,
            required: true,
        },
        imagesURL: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            min: 0,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
    }],
    checkedOut: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('CheckoutItem', CheckoutSchema);
