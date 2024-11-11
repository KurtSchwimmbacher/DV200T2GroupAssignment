import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserContext from '../components/UserContext';
import '../styles/ListingForm.css';

const ListingForm = () => {
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [productImg, setProductImg] = useState(null);
    const [productDesc,setProductDesc] = useState("");
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!user) {
            alert("You must be logged in to create a product.");
            navigate('/login'); // Redirect to login page
            return;
        }

        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('category', category);
        formData.append('description', productDesc);
        formData.append('price', price);
        formData.append('imagesURL', productImg);
        formData.append('username', user.name); // Add username to form data
        
        try {
            console.log(formData);

            const response = await axios.post('http://localhost:5000/api/products/addproduct', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data)
            alert('Product added successfully');
        } catch (error) {
            alert('Error adding product', error.data);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="productName" className='form-group'>
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" name="productName" onChange={e => setProductName(e.target.value)} required />
            </Form.Group>

            <Form.Group controlId="category" className='form-group'>
                <Form.Label>Product Category</Form.Label>
                <Form.Control as="select" name="category" onChange={e => setCategory(e.target.value)} required>
                    <option value="">Select category</option>
                    <option value="Headphones">Headphones</option>
                    <option value="Speakers">Speakers</option>
                    <option value="Microphones">Microphones</option>
                    <option value="Accessories">Accessories</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="productDesc" className='form-group'>
                <Form.Label>Product Description</Form.Label>
                <Form.Control type="text" name="productName" onChange={e => setProductDesc(e.target.value)} required />
            </Form.Group>

            <Form.Group controlId="price" className='form-group'>
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" name="price" onChange={e => setPrice(e.target.value)} required />
            </Form.Group>

            <Form.Group controlId="imagesURL" className='form-group'>
                <Form.Label>Product Images</Form.Label>
                <Form.Control type="file" name="imagesURL" onChange={e => setProductImg(e.target.files[0])} required />
            </Form.Group>

            <Button variant="primary" className='listing-form-btn' type="submit">
                Add Listing
            </Button>
        </Form>
    );
};

export default ListingForm;
