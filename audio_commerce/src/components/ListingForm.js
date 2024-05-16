import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/ListingForm.css';

const ListingForm = () => {
    return (
        <Form>
            <Form.Group controlId="product" className='form-group'>
                <Form.Label>Product</Form.Label>
                <Form.Control type="text" placeholder="Name of Product" />
            </Form.Group>

            <Form.Group controlId="productCategory" className='form-group'>
                <Form.Label>Product Category</Form.Label>
                <Form.Control as="select">
                    <option>Headphones</option>
                    <option>Speakers</option>
                    <option>Microphones</option>
                    <option>Accessories</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="desiredPrice" className='form-group'>
                <Form.Label>Desired Price</Form.Label>
                <Form.Control type="text" placeholder="$480..." />
            </Form.Group>

            <h5 className='optional-title'>Optional</h5>

            <Form.Group controlId="productSchematics" className='form-group'>
                <Form.Label>Product Schematics</Form.Label>
                <Form.Control type="file" />
            </Form.Group>

            <Form.Group controlId="soundChart" className='form-group'>
                <Form.Label>Sound Chart</Form.Label>
                <Form.Control type="file" />
            </Form.Group>

            <Button variant="primary" type="submit" className='listing-form-btn'>
                Add Listing
            </Button>
        </Form>
    );
};

export default ListingForm;
