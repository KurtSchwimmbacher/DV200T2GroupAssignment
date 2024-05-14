import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                </Col>
                <Col className="col-1 line-border"></Col>
                <Col className="col-4">
                    <h4 className="cart-details">
                        Shipping
                    </h4>
                </Col>
            </Row>
        </Container>
     
     </>
    );
}

export default Cart; 