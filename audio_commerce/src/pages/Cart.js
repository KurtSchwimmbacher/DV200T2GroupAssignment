import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { ChevronLeft } from 'react-bootstrap-icons';

import NavigationBar from "../components/NavigationBar";
import CartCards from "../components/CartCards";

import "../styles/Cart.css";

function Cart() {

   
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
                <Col className="col-7 coupon-code">
                    {/* add input field for coupons */}
                    <CartCards />
                    <CartCards />
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
                            $14
                        </h5>
                    </div>
                    <div className="cart-details-con subtotal">
                        <h4 className="cart-details">
                            Subtotal
                        </h4>
                        <h5 className="details-pricing">
                            $960
                        </h5>
                    </div>

                    <div className="total-con">
                        <h4 className="cart-total">
                            Total
                        </h4>
                        <h5 className="total-pricing">
                            $960
                        </h5>
                    </div>

                    <Button variant="dark" className="checkout-btn">Proceed to Checkout</Button>
                    <Button variant="link" className="cont-shopping-btn">Continue Shopping</Button>

                </Col>
            </Row>
        </Container>
     
     </>
    );
}

export default Cart; 