import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

import "../styles/HomePage.css";

import NavigationBar from "../components/NavigationBar";
import homeVid from "../assets/videos/Home_pg_vid.mp4";

function Home() {


   
    return(
        <>
        <NavigationBar />
        <Container className="homeMainCont">
            <Row className="row hero">
                <Col className="col-12 nav">
                <video className="video-home-pg" src={homeVid} autoPlay loop muted>
                 </video>
                </Col>
            </Row>
        </Container>
     
     </>
    );
}

export default Home; 