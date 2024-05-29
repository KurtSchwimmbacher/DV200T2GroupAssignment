import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-icons";

import "../styles/FilterComp.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion'; 
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from "react";

function FilterComp({ onApplyFilters }) {
    const [category, setCategory] = useState('');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 12000 });

    return (
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Categories</Accordion.Header>
                <Accordion.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item onClick={() => setCategory('Headphones')}>
                        Headphones
                    </ListGroup.Item>
                    <ListGroup.Item onClick={() => setCategory('Keyboards')}>
                        Keyboards
                    </ListGroup.Item>
                    <ListGroup.Item onClick={() => setCategory('Attachments')}>
                        Attachments
                    </ListGroup.Item>
                    <ListGroup.Item onClick={() => setCategory('Audio Equipment')}>
                        Audio Equipment
                    </ListGroup.Item>
                </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Price</Accordion.Header>
                <Accordion.Body>
                    <input type="range" className="form-range" min="0" max="12000" value={priceRange.max} onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}/>
                </Accordion.Body>
            </Accordion.Item>
            <Button onClick={() => onApplyFilters({ category, priceRange })}>Apply Filters</Button>
        </Accordion>
    );
}


export default FilterComp; 