import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ArrowRight } from 'react-bootstrap-icons';

import "../styles/HomePage.css";

import NavigationBar from "../components/NavigationBar";
import MarqComp from "../components/MarqComp";
import HeaderComp from "../components/HeaderComp";
import ProductCard from "../components/ProductCard";
import ProductHighlight from "../components/ProductHighlight";

function Home() {


   
    return(
        <>
        <NavigationBar />
        
        <HeaderComp className="video-home-pg" />


        <MarqComp className="marquee-comp" />

        <Container className="main-content">
            {/* product cards title */}
            <Row>
                <Col>
                    <h1>Top Products</h1>
                    <div className="see-more-products">
                        <p className="more-products-text">See More</p>
                        <ArrowRight />
                    </div>
                </Col>
            </Row>
            {/* product cards */}
            <Row>
                <Col className="col-4">
                    <ProductCard />
                </Col>
                <Col className="col-4">
                    <ProductCard />
                </Col>
                <Col className="col-4">
                    <ProductCard />
                </Col>
            </Row>
        </Container>
     
        <ProductHighlight />

     </>
    );
}

export default Home; 