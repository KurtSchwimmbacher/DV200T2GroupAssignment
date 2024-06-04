import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from './ProductCard';

function GetLatestProducts() {
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        const fetchLatestProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products/latest');
                setLatestProducts(response.data);
                console.log(response.data);
            } catch (error) {
                console.log("Error fetching latest products", error);
            }
        };

        fetchLatestProducts();
    }, []);

    return (
        <Container>
            <Row>
                {latestProducts.map((product, index) => (
                    <Col className="col-4" key={index}>
                        <ProductCard 
                            productID={product._id}
                            image={`http://localhost:5000/${product.imagesURL}`} 
                            name={product.productName} 
                            category={product.category} 
                            price={product.price} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default GetLatestProducts;
