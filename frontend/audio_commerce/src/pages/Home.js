import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { ArrowRight } from 'react-bootstrap-icons';

import headphoneImg from "../assets/images/headphone-2.png";

import "../styles/HomePage.css";

import NavigationBar from "../components/NavigationBar";
import MarqComp from "../components/MarqComp";
import HeaderComp from "../components/HeaderComp";
import ProductHighlight from "../components/ProductHighlight";
import GetLatestProducts from "../components/GetLatestProducts";
import { Link } from "react-router-dom";
import FooterComp from "../components/FooterComp";

function Home() {


   
    return(
        <>
        <NavigationBar />
        
        <HeaderComp className="video-home-pg" where={"Home"} />


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
                <GetLatestProducts />
            </Row>
        </Container>
     
        <ProductHighlight />

        <Container className="specific-headphone-con">
            <Row>
                <Col className="col-6">
                    <div className="headphone-highlight-con">
                        <img src={headphoneImg} alt="" className="headphone-img"></img>
                    </div>
                </Col>
                <Col>
                    <h1 className="headphone-title">True Wired Stereo Headphones</h1>
                    <h2 className="headphone-desc">
                    Experience superior sound quality with the True Wired Stereo Headphones, meticulously engineered for audiophiles and casual listeners alike. These headphones deliver crystal-clear audio with deep bass, balanced mids, and crisp highs, ensuring an immersive listening experience for music, podcasts, and calls.
                    </h2>
                    <Link to={"/single/665ee32d732a748269f663ae"}>
                    <Button className="headphone-btn" variant="dark">View Product</Button>
                    </Link>
                </Col>
            </Row>
        </Container>


        <FooterComp />
     </>
    );
}

export default Home; 