import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'; 

import '../styles/ListingForm.css';

const ListingForm = () => {

    // const [formData, setFormData] = useState({
    //     productName: '',
    //     category: '',
    //     price: '',
    //     imagesURL: [],
    //     schematicsURL: null,
    //     chartURL: null
    // });

    const [productName, setProductName] = useState(""); 
    const [category, setCategory] = useState(""); 
    const [price, setPrice] = useState(0); 
    const [productImg, setProductImg] = useState(null); 
    const [schematicImg, setSchematicImg] = useState(null);
    const [chartImg, setChartImg] = useState(null);

    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });
    // };

    // const handleFileChange = (event) => {
    //     const { name, files } = event.target;
    //     setFormData({
    //         ...formData,
    //         [name]: files.length === 1 ? files[0] : Array.from(files)
    //     });
    // };

    const handleSubmit = async (event) => {
        event.preventDefault(); 

        const data = new FormData(); 

        Object.entries(formData).forEach(([key, value]) => {
            if (key === 'imagesURL' && Array.isArray(value)) {
                value.forEach((file, index) => {
                    data.append(`imagesURL[${index}]`, file);
                });
            } else {
                data.append(key, value);
            }
        });
        console.log(data)
        try {
            const response = await axios.post('http://localhost:5000/api/products/addproduct', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }); 
            console.log('Product added: ', response.data);
            alert('Item Successfully Added');
        } catch(error) {
            console.error('There was an error adding the item: ', error);
            alert('There was an issue when adding your item');
        }
    }

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

            <Form.Group controlId="price" className='form-group'>
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" name="price" onChange={e => setPrice(e.target.value)} required />
            </Form.Group>

            <Form.Group controlId="imagesURL" className='form-group'>
                <Form.Label>Product Images</Form.Label>
                <Form.Control type="file" name="imagesURL" onChange={e => setProductImg(e.target.value)} required />
            </Form.Group>

            <h5 className="optional-title">Optional</h5>
            
            <Form.Group controlId="schematicsURL" className='form-group'>
                <Form.Label>Product Schematics</Form.Label>
                <Form.Control type="file" name="schematicsURL" onChange={e => setSchematicImg(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="chartURL" className='form-group' >
                <Form.Label>Sound Chart</Form.Label>
                <Form.Control type="file" name="chartURL" onChange={e => setChartImg(e.target.value)} />
            </Form.Group>

            <Button variant="primary" className='listing-form-btn' type="submit">
                Add Listing
            </Button>
        </Form>
    );
};

export default ListingForm;
