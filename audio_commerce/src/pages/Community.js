import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "../styles/Community.css"

import NavigationBar from "../components/NavigationBar";
import MarqComp from "../components/MarqComp";
import HeaderComp from "../components/HeaderComp";



function Community() {

   
    return(
        <>
        <NavigationBar />

        <HeaderComp className="hero-prod-pg" where={"Community"} />

        <MarqComp className="marquee-prod-pg"/>

        <Container className="homeMainCont">
            <Row className="row hero">
                <Col className="col-12 pageHead">  
                    <h1>Add your own Listing</h1>

                </Col>
            </Row>
            <Row>
                <Col className="col-6 form">
                    
                </Col>
            </Row>
        </Container>
     
     </>
    );
}

export default Community; 