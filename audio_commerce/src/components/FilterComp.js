import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-icons";

import "../styles/FilterComp.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion'; 
import ListGroup from 'react-bootstrap/ListGroup';

function FilterComp(){
    const alertClicked = () => {
        alert('You clicked Audio Equipment category');
      };

    return(
        <>
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Categories</Accordion.Header>
                <Accordion.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        Headphones
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Keyboards
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Attachments
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={alertClicked}>
                        Audio Equipment
                    </ListGroup.Item>
                </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Price</Accordion.Header>
                <Accordion.Body>
                    <label for="customRange3" className="form-label">$0 - $12000</label>
                    <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3"/>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Extra Filter</Accordion.Header>
                <Accordion.Body>
                    Additional Filter Items 
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </>
    );
}

export default FilterComp; 