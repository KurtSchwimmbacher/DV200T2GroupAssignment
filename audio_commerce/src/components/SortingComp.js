import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-icons";
import "../styles/SortingComp.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown'; 

function SortingComp(){

    return(
        <>
        <Container flex>
            <Row>
                <Col>
                    <Dropdown className="d-inline mx-2 sorting_dropdown" autoClose="outside">
                        {/*Dropdown Name*/}
                        <Dropdown.Toggle id="dropdown-autoclose-outside">
                        Sort Products By: 
                        </Dropdown.Toggle>

                        {/*Dropdown Items*/}
                        <Dropdown.Menu>
                            <Dropdown.Item href="#" className="sortCat">Editors Pick</Dropdown.Item>
                            <Dropdown.Item href="#" className="sortCat">Popularity</Dropdown.Item>
                            <Dropdown.Item href="#" className="sortCat">Price: High - Low</Dropdown.Item>
                            <Dropdown.Item href="#" className="sortCat">Price: Low - High</Dropdown.Item>
                            <Dropdown.Item href="#" className="sortCat">A-Z</Dropdown.Item>
                            <Dropdown.Item href="#" className="sortCat">Z-A</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col>
                    <div>
                        <span><i className="bi bi-grid-fill"></i></span>
                        <span><i className="bi bi-list"></i></span>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default SortingComp; 