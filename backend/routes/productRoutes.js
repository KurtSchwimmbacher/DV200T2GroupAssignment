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
        const { productName, category, price, username, description } = req.body;
        const imagesURL = req.file.filename; // Get the uploaded file's filename

        const product = new Product({ productName, description, category, price, imagesURL, username });

        if (!productName || !category || !description || !price || !username) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        
        const savedProduct = await product.save(); // Save the new product to the database

        res.status(201).json(savedProduct);

    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(400).json({ error: err.message });
    }
});


// Endpoint to get the latest 3 products
router.get('/latest', async (req, res) => {
    try {
        const latestProducts = await Product.find().sort({ createdAt: -1 }).limit(3);
        res.json(latestProducts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get Products route
router.get('/', async (req, res) => {
    try {
        const match = {};
        if (req.query.category) {
            match.category = req.query.category;
        }
        if (req.query.minPrice || req.query.maxPrice) {
            match.price = {};
            if (req.query.minPrice) {
                match.price.$gte = +req.query.minPrice;
            }
            if (req.query.maxPrice) {
                match.price.$lte = +req.query.maxPrice;
            }
        }
        const products = await Product.find(match);
        res.status(200).json(products);
    } catch (err) {
        console.error(err);
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


// update product based on id
router.patch('/update/:id', upload.single('imagesURL'), async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['productName', 'category', 'description', 'price'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send();
        }

        updates.forEach(update => {
            product[update] = req.body[update];
        });

        if (req.file) {
            product.imagesURL = req.file.filename; // Ensure this key matches the front-end
        }

        await product.save();
        res.send(product);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(400).send(error);
    }
});



// Delete a product by ID
router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        console.error('Error deleting product:', err); // Log the error for debugging
        res.status(400).json({ error: 'Failed to delete product' });
    }
});


// Like a product
router.patch('/like/:id', async (req, res) => {
    const { userID } = req.body;


    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Convert userID to string
        const stringUserID = String(userID);

        // Add userID to the liked array if not already present
        if (!product.liked.includes(stringUserID)) {
            product.liked.push(stringUserID);
            await product.save();
        }

        res.status(200).json(product);
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(400).json({ error: err.message });
    }
});

// Remove a liked product
router.patch('/unlike/:id', async (req, res) => {
    const { userID } = req.body;

    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Remove userID from the liked array if present
        const index = product.liked.indexOf(userID);
        if (index !== -1) {
            product.liked.splice(index, 1);
            await product.save();
        }

        res.status(200).json(product);
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err.message });
    }
});

// Fetch all products liked by a specific user
router.get('/liked/:userID', async (req, res) => {
    const { userID } = req.params;

    try {
        // Find all products where the liked array includes the userID
        const likedProducts = await Product.find({ liked: userID });

        res.status(200).json(likedProducts);
    } catch (err) {
        console.error('Error fetching liked products:', err); // Log the error for debugging
        res.status(400).json({ error: err.message });
    }
});


module.exports = router; // Export the product router
