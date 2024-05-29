import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import {PencilFill, Trash3Fill } from 'react-bootstrap-icons';

import "../styles/EditListingModal.css";
import productImg from "../assets/images/headphone-img.png";

function EditListingsModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [fullscreen, setFullscreen] = useState(true);
  return (
    <>
        <div className="edit">
            <Button variant="primary" onClick={handleShow} className="edit-listings">
                Edit Listings
            </Button>
        </div>

        <Modal show={show} onHide={handleClose} animation={true} fullscreen={fullscreen}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                    <Card className='cart-card-con'>
        <Card.Img className='cart-card-img' variant="bottom" src={productImg} />
        <Card.Body className='cart-card-body'>
            <Container>
                <Row>
                    <Col className="single-product-row">
                        <Row>
                        <Col className='col-4'>
                        <Card.Title className='cart-card-title'>Sony Headphones</Card.Title>
                        <Card.Text className='product-specs'>
                            Headphone Specs
                        </Card.Text>
                    </Col>
                    <Col className='col-6'>
                        <Card.Text className='change-unit'>
                        <Button size="sm" className="edit-listing-button">
                            Edit
                        </Button>
                        <p className='divider'>  |  </p>
                        <Button size="sm" className="delete-listing-button">
                            Delete
                        </Button>
                        </Card.Text>
                    </Col>
                    <Col className='col-2'>
                        <Card.Text className='individual-price'>
                            $940.00
                        </Card.Text>
                    </Col>
                        </Row>
                    </Col>
                    
                </Row>
            </Container>
        </Card.Body>
        </Card>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={handleClose} className="close-modal-btn">
                Close
            </Button>
            <Button onClick={handleClose} className="save-changes-btn">
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    </>
  );
}

export default EditListingsModal;