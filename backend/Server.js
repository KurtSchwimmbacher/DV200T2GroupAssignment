const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/',(req,res) =>{
    res.send('Hello World');
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

// connect to mongoDB
// lktqWFsPh5LmXuxF => password
// mongodb+srv://231115:<password>@eq-e-commerce.dckc7kl.mongodb.net/?retryWrites=true&w=majority&appName=EQ-e-commerce
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log('MongoDB connected'))
.catch(err => console.log(err));

// user Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users',userRoutes);

// start the server
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})