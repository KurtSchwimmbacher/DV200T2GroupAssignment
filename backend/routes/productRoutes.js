const express = require('express');
const router = express.Router();
const multer = require('multer'); 
const Product = require('../models/Product');

//the following code handles file uploads of all types 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+ '-' + file.originalname); 
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

//Get Products 
router.get('/products', async (req, res) => {
    try{
        const products = await Product.find(); 
        res.status(200).json(products); 
    } catch (err) {
        res.status(400).json({ error: err.message }); 
    }
}); 

module.exports = router; //Export the product router 