import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

import NavigationBar from "../components/NavigationBar";


function Home() {

   
    return(
        <>
        <NavigationBar />
        <Container className="homeMainCont">
            <Row className="row hero">
                <Col className="col-12 nav">
                    
                    <h1>Home</h1>
                </Col>
            </Row>
        </Container>
     
     </>
    );
}

export default Home; 