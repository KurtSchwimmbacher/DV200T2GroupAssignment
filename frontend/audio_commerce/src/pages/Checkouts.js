import Container from "react-bootstrap/Container";
import NavigationBar from "../components/NavigationBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import "../styles/Cart.css";
import FooterComp from "../components/FooterComp";
import { useEffect, useState } from "react";
import axios from "axios";

function Checkouts() {
    const [allCheckouts, setAllCheckouts] = useState([]);

    useEffect(() => {
        const fetchAllCheckedOutItems = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/checkout/all');
                console.log(response);
                setAllCheckouts(response.data); // Store the fetched items in state
            } catch (error) {
                console.error('Error fetching checkout items:', error);
            }
        };

        fetchAllCheckedOutItems();
    }, []);

    const handleShipOrder = (checkoutId) => {
        setAllCheckouts(prevCheckouts => 
            prevCheckouts.map(checkout => 
                checkout._id === checkoutId ? { ...checkout, status: 'shipped' } : checkout
            )
        );
    };

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
                            <ul className="checkout-list">
                                {allCheckouts.map((checkout, index) => (
                                    <li key={index}>
                                        <h4>Order {index + 1}</h4>
                                        <p>Username: {checkout.username}</p>
                                        <div className="shipped-status">
                                            <p>Status: {checkout.status || 'unshipped'}</p>
                                            {checkout.status !== 'shipped' && (
                                                <Button 
                                                    variant="primary" 
                                                    className="edit-listings"
                                                    onClick={() => handleShipOrder(checkout._id)}
                                                >
                                                    Ship order
                                                </Button>
                                            )}
                                        </div>
                                        <ul className="checkout-list">
                                            {checkout.products.map((product, productIndex) => (
                                                <li className="order-item" key={productIndex}>
                                                    <div className="order-con">
                                                        <img className="order-img" style={{mixBlendMode:"multiply"}} src={`http://localhost:5000/${product.imagesURL}`} alt={product.productName} width="100" />
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
