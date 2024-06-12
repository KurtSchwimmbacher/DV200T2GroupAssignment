import Container from "react-bootstrap/Container";
import NavigationBar from "../components/NavigationBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

import "../styles/Cart.css";
import FooterComp from "../components/FooterComp";
import { useEffect, useState } from "react";

function Checkouts() {
    const [allCheckouts, setAllCheckouts] = useState([]);

    useEffect(() => {
        const fetchAllCheckedOutItems = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/checkout/all');
                console.log(response)
                setAllCheckouts(response.data); // Store the fetched items in state
                console.log(allCheckouts)
            } catch (error) {
                console.error('Error fetching checkout items:', error);
            }
        };

        fetchAllCheckedOutItems();
    }, []); 

    return (
        <>
            <NavigationBar />
            <Container>
                <Row>
                    <Col>
                        <h1>Checkouts</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {allCheckouts.length === 0 ? (
                            <h4>There are no orders</h4>
                        ) : (
                            <ul>
                                {allCheckouts.map((checkout, index) => (
                                    <li key={index}>
                                        <h4>Order {index + 1}</h4>
                                        <p>Username: {checkout.username}</p>
                                        <p>Status : unshipped</p>
                                        <ul>
                                            {checkout.products.map((product, productIndex) => (
                                                <li key={productIndex}>
                                                    <div>
                                                        <img src={`http://localhost:5000/${product.imagesURL}`} alt={product.productName} width="100" />
                                                        <p>Product Name: {product.name}</p>
                                                        <p>Price: R{product.price}</p>
                                                        <p>Quantity: {product.quantity}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </Col>
                </Row>
            </Container>
            <FooterComp />
        </>
    );
}

export default Checkouts;
