import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { ChevronLeft } from 'react-bootstrap-icons';

import NavigationBar from "../components/NavigationBar";
import CartCards from "../components/CartCards";

import UserContext from '../components/UserContext';
import FooterComp from '../components/FooterComp';
import { Link } from "react-router-dom";
import React, { useState, useContext, useEffect } from 'react';
import axios from "axios";

import "../styles/Cart.css";

function Cart() {

    const { user } = useContext(UserContext);
    const [allProducts, setAllProducts] = useState([])
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [VAT, setVAT] = useState(0);
    const [quantity,setQuantity] = useState(1);

    useEffect(() => {
        if(user){
            fetchProducts();
        }

        const calculateTotals = () =>{
            let tempSubtotal = 0;
            let tempVAT = 0;
            let tempTotal = 0;
            allProducts.map((product)=>{
                tempSubtotal+=product.price*quantity;
            })
            tempVAT = 0.15*tempSubtotal;
            tempTotal = tempVAT+tempSubtotal;

            setSubtotal(tempSubtotal);
            setVAT(tempVAT);
            setTotal(tempTotal);
        }

        calculateTotals();

    },[user,allProducts,quantity]);


    const updateQuantity = (productId, newQuantity) => {
        setAllProducts(prevProducts => {
            return prevProducts.map(product => {
                if (product._id === productId) {
                    setQuantity(1);
                    setQuantity(newQuantity)
                    return { ...product, quantity: newQuantity };
                }
                return product;
            });
        });
    };

    const fetchProducts = async () =>{
        try {
            const productsResponse = await axios.get(`http://localhost:5000/api/cart/cart-items/${user.name}`);
            setAllProducts(productsResponse.data)
        } catch (error) {
            console.log("error fetching products")
        }
    }


   
    return(
        <>
        <NavigationBar />
        <Container className="homeMainCont">
            <Row>
                <Col className="back-nav-con">
                    <ChevronLeft  />
                    <p className="back-btn">BACK</p>
                </Col>
            </Row>
            <Row>
                <Col className="col-7 cart-items-title">
                    <h1>
                        Your Cart
                    </h1>
                </Col>
                <Col className="col-1 line-border"></Col>
                <Col className="col-4">
                    <h3 className="cart-details-title">
                        Cart Details
                    </h3>
                </Col>
            </Row>
            <Row className="cart-card">
                {/*Products go below*/}
                <Col className="col-7 product-container" >
                {allProducts.length === 0 ? (
                    <h4>Your cart is empty</h4>
                ) : (
                    allProducts.map((product, index) => (
                        
                        <CartCards 
                            key={index}
                            productID={product._id}
                            name={product.name}
                            productImg={`http://localhost:5000/${product.imagesURL}`}
                            quantity={product.quantity}
                            price={product.price}
                            updateQuantity={updateQuantity} // Pass the updateQuantity function
                        />

                    ))
                )}
                </Col>
                <Col className="col-1 line-border"></Col>
                <Col className="col-4 cart-details-col">
                    <div className="cart-details-con">
                        <h4 className="cart-details">
                            Shipping
                        </h4>
                        <h5 className="details-pricing">
                            Free
                        </h5>
                    </div>
                    <div className="cart-details-con">
                        <h4 className="cart-details">
                            VAT
                        </h4>
                        <h5 className="details-pricing">
                            R{VAT}
                        </h5>
                    </div>
                    <div className="cart-details-con subtotal">
                        <h4 className="cart-details">
                            Subtotal
                        </h4>
                        <h5 className="details-pricing">
                            R{subtotal}
                        </h5>
                    </div>

                    <div className="total-con">
                        <h4 className="cart-total">
                            Total
                        </h4>
                        <h5 className="total-pricing">
                            R{total}
                        </h5>
                    </div>

                    <Button variant="dark" className="checkout-btn">Proceed to Checkout</Button>
                    <Link to={"/products"}>
                        <Button variant="link" className="cont-shopping-btn">Continue Shopping</Button>
                    </Link>

                </Col>
            </Row>
        </Container>
     
        <FooterComp />
     </>
    );
}

export default Cart; 