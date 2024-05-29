const express = require('express');
const router = express.Router();
const multer = require('multer'); 
const path = require('path');
const Product = require('../models/Product');

//the following code handles file uploads of all types 
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'productImages/'); //here the destination file is specified
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));  //unique file name created 
    }
}); 

const upload = multer({ storage: storage }); 

//add a new product 
router.post('/addproduct', upload.fields([{ name: 'imagesURL' }, { name: 'schematicsURL' }, { name: 'chartURL' }]), async (req, res) => {

    const { productName, category, price, imagesURL, schematicsURL, chartURL} = req.body; 

    try {
        const product = new Product({productName, category, price, imagesURL, schematicsURL, chartURL}); 
        const savedProduct = await product.save(); //this saves new products to the database 

        res.status(201).json(savedProduct); 

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//Get Products + 
router.get('/products', async (req, res) => {
    try{
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
        res.status(400).json({ error: err.message });
    }
}); 

module.exports = router; //Export the product router 