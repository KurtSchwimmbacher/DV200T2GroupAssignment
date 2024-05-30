const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Product = require('../models/Product');
const fs = require('fs');

// Ensure the directory exists
const uploadDir = 'productImages/';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, uploadDir); // Ensure directory exists or create it
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // Create a unique filename
    }
});

const upload = multer({ storage: storage });

// Add a new product route
router.post('/addproduct', upload.single('imagesURL'), async (req, res) => {
    console.log(req.file); // Log file information

    try {
        const { productName, category, price, username } = req.body;
        const imagesURL = req.file.filename; // Get the uploaded file's filename

        const product = new Product({ productName, category, price, imagesURL, username });

        const savedProduct = await product.save(); // Save the new product to the database

        res.status(201).json(savedProduct);

    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(400).json({ error: err.message });
    }
});

// Get Products route
router.get('/', async (req, res) => {
    try {
        const match = {};
        if (req.query.category) {
            match.category = req.query.category;
        }
        if (req.query.minPrice && req.query.maxPrice) {
            match.price = { $gte: req.query.minPrice, $lte: req.query.maxPrice };
        }
        const products = await Product.find(match);
        res.status(200).json(products);
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(400).json({ error: err.message });
    }
});

// Get a product by ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send();
        }
        res.json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


//Fetch products by user ID 
router.get('/user/:username', async (req, res) => {
    try{
        const products = await Product.find({ username: req.params.username }); 
        res.status(200).json(products); 
    }catch(err) {
        console.error(err); //error logging for debugging 
        res.status(400).json({error: err.message}); 
    }
}); 

module.exports = router; // Export the product router
