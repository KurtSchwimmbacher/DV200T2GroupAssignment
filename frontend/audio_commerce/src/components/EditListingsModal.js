import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import ListingEditCard from "./ListingEditCard.js";

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

        <Modal show={show} onHide={handleClose} animation={true} fullscreen={fullscreen} className="modal-fullscreen">
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListingEditCard />
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