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

function FilterComp({ onApplyFilters, onClearFilters }) {
    const [category, setCategory] = useState('');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 12000 });

    const handleApplyFilters = () => {
        onApplyFilters({
            category,
            minPrice: priceRange.min,
            maxPrice: priceRange.max
        });
    };

    const handleClearFilters = () => {
        setCategory(''); 
        setPriceRange({ min: 0, max: 12000 }); 
        onClearFilters(); // Notify parent component to clear filters
    };

    return (
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Categories</Accordion.Header>
                <Accordion.Body>
                <ListGroup variant="flush">
                    {['Headphones', 'Speakers', 'Microphones', 'Accessories'].map(cat => (
                        <ListGroup.Item 
                            key={cat} 
                            onClick={() => setCategory(cat)}
                            className={category === cat ? "active" : ""}
                        >
                            {cat}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Price</Accordion.Header>
                <Accordion.Body>
                    <p>Max price</p>
                    <input type="range" className="form-range" min="0" max="12000" value={priceRange.max} onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}/>
                    <p>Min price</p>
                    <input type="range" className="form-range" min="0" max="12000" value={priceRange.min} onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}/>
                </Accordion.Body>
            </Accordion.Item>
            <Button className="filter-btn-prim" onClick={handleApplyFilters}>Apply Filters</Button>
            <Button className="filter-btn-sec" variant="outline-secondary" onClick={handleClearFilters}>Clear Filters</Button>
        </Accordion>
    );
}


export default FilterComp; 