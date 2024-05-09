import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavigationBar from "../components/NavigationBar";
import MarqComp from "../components/MarqComp";
import HeaderComp from "../components/HeaderComp";
import ProductCard from "../components/ProductCard";

import "../styles/ProductsPage.css"

function Products() {

   
    return(
        <>
        <NavigationBar />

        <HeaderComp className="hero-prod-pg"/>

        <MarqComp className="marquee-prod-pg"/>

        <Container className="productsMainCont">
            <Row className="row hero">
                <Col className="col-12 pageHead">
                    <h1>Products</h1>
                </Col>
            </Row>
        </Container>
     
     </>
    );
}

export default Products; 