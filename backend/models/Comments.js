const mongoose = require('mongoose'); 

const commentsSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product', 
        require: true,
    }, 
    userName: {
        type: String, 
        required: true, 
    }, 
    rating: {
        type: Number, 
        required: true, 
    }, 
    comment: {
        type: String, 
        required: true
    },
}, {
        timestamps: true, 
});

module.exports = mongoose.model('Comments', commentsSchema); 