const mongoose = require('mongoose'); 

const productSchema = new mongoose.Schema({

    productName:{
        type: String, 
        required: true
    },
    category:{
        type: String, 
        enum: ['Headphones', 'Speakers', 'Microphones', 'Accessories'],
        required: true
    },
    price:{
        type: Number, 
        required: true,
        min: 0 //ensuring that users cannot add a listing with a price of 0
    },
    imagesURL:{
        type: [String], 
        required: true
    },
    schematicsURL:{
        type: String,
    },
    chartURL:{
        type: String,
    }
    
})

module.exports = mongoose.model('Product', productSchema);