import React, { useState, useContext, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserContext from '../components/UserContext';
import '../styles/ListingForm.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FormEdit = (props) => {
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [productImg, setProductImg] = useState(null);
    const [productDesc, setProductDesc] = useState("");
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [productID, setProductID] = useState(props.id);
    const [productImgPreview, setProductImgPreview] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!user) {
            alert("You must be logged in to edit a product.");
            navigate('/login'); // Redirect to login page
            return;
        }
    
        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('category', category);
        formData.append('description', productDesc);
        formData.append('price', price);
        if (productImg) {
            formData.append('imagesURL', productImg);
        }
    
        try {
            const response = await axios.patch(`http://localhost:5000/api/products/update/${productID}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Product updated successfully');
        } catch (error) {
            console.error('Error updating product:', error);
            alert('Error updating product');
        }

        navigate('/products')
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/products/${productID}`);
                const product = response.data;
                setProductName(product.productName);
                setCategory(product.category);
                setProductDesc(product.description || "");
                setPrice(product.price);
                setProductImgPreview(`http://localhost:5000/${product.imagesURL}`);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [productID]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setProductImg(file);
        setProductImgPreview(URL.createObjectURL(file));
    };

    return (
        <Container>
            <Row>
                <Col className="col-6">
                    <img src={productImgPreview} alt="product img" className="img-login" />
                </Col>
                <Col className="col-6">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="productName" className='form-group'>
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={productName} 
                                name="productName" 
                                onChange={e => setProductName(e.target.value)} 
                            />
                        </Form.Group>

                        <Form.Group controlId="category" className='form-group'>
                            <Form.Label>Product Category</Form.Label>
                            <Form.Control 
                                as="select" 
                                value={category} 
                                name="category" 
                                onChange={e => setCategory(e.target.value)}>
                                <option value="">Select category</option>
                                <option value="Headphones">Headphones</option>
                                <option value="Speakers">Speakers</option>
                                <option value="Microphones">Microphones</option>
                                <option value="Accessories">Accessories</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="productDesc" className='form-group'>
                            <Form.Label>Product Description</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={productDesc} 
                                name="description" 
                                onChange={e => setProductDesc(e.target.value)} 
                            />
                        </Form.Group>

                        <Form.Group controlId="price" className='form-group'>
                            <Form.Label>Price</Form.Label>
                            <Form.Control 
                                type="number" 
                                value={price} 
                                name="price" 
                                onChange={e => setPrice(e.target.value)} 
                            />
                        </Form.Group>

                        <Form.Group controlId="imagesURL" className='form-group'>
                            <Form.Label>Product Images</Form.Label>
                            <Form.Control 
                                type="file" 
                                name="imagesURL" 
                                onChange={handleImageChange} 
                            />
                        </Form.Group>

                        <Button variant="primary" className='listing-form-btn' type="submit">
                            Edit Listing
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default FormEdit;
