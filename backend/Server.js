const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Use CORS middleware
app.use(cors());

app.use(express.json());

app.use(express.static('productImages'))

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// User routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

//Product Routes 
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// Cart routes
const cartRoutes = require('./routes/cartRoutes');
app.use('/api/cart',cartRoutes);

// Comment Routes
const commentsRoutes = require('./routes/commentsRoutes');
app.use('/api/comments',commentsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
