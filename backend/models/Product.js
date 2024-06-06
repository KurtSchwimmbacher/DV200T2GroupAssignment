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
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number, 
        required: true,
        min: 0 //ensuring that users cannot add a listing with a price of 0
    },
    imagesURL:{
        type: String, 
        required: true
    },
    username:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        min:0,
        max:5,
        default:0
    },
    liked:[{
        type: String
    }]
    // schematicsURL:{
    //     type: String,
    // },
    // chartURL:{
    //     type: String,
    // }
    
}, { timestamps: true });// Add timestamps to the schema

module.exports = mongoose.model('Product', productSchema);