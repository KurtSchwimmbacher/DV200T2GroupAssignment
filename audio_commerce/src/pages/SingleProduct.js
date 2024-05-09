import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavigationBar from "../components/NavigationBar";
import HeaderComp from "../components/HeaderComp";
import MarqComp from "../components/MarqComp";

import schematic from "../assets/images/schematic-img.png";

import { ArrowRight } from 'react-bootstrap-icons';

import '../styles/SinglePage.css';

function SingleProduct() {

   
    return(
        <>
        <NavigationBar />
        <HeaderComp />
        <MarqComp />

        <Container className="content">
            <Row>
                <Col className="col-4">
                    <h1>Sony Headphones</h1>
                    <h5 className="price-tag">From $480</h5>
                    <div className="add-to-cart">
                        <p>Add to Cart</p>
                        <ArrowRight className="add-to-cart-arrow" />
                    </div>
                </Col>
                <Col className="col-8">
                    <h4>
                    Product Description
                    </h4>
                    <p>
                    Lorem ipsum 
                    dolor sit amaet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Mauris finibus nec massa at porttitor.
                    </p>
                </Col>
            </Row>

            <Row className="schematic-title">
                <Col>
                    <h3>Product Schematics</h3>
                </Col>
                <Col className="download-pdf">
                    <p className="download-txt">Download Full PDF</p>
                    <ArrowRight className="pdf-arrow" />
                </Col>
            </Row>
        </Container>

        <div className="schematic-con">
            <img className="schematic-img" src={schematic} alt="schematic img"></img>
        </div>
     
     </>
    );
}

export default SingleProduct; 