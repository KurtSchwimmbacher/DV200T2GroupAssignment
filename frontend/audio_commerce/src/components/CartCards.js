import Card from 'react-bootstrap/Card';

import productImg from "../assets/images/headphone-img.png";

import "../styles/CartCard.css"
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import {PlusCircle, DashCircle,Trash } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

import axios from 'axios';

function CartCards(props) {

const [totalPrice, setTotalPrice] = useState(0);
const [quantity, setQuantity] = useState(props.quantity)

    const handleDelete = async () =>{
        alert("deleting from cart")
        try {
            const productsResponse = await axios.delete(`http://localhost:5000/api/cart/cart-items/${props.productID}`);
        } catch (error) {
            console.log("error fetching products")
        }
    }

    const increaseQuantity = async () => {
    let newQuantity = props.quantity + 1;
    try {
        const productsResponse = await axios.patch(`http://localhost:5000/api/cart/cart-items/${props.productID}`, { quantity: newQuantity });
        props.updateQuantity(props.productID, newQuantity); // Update the quantity in the parent component
        setQuantity(newQuantity)
    } catch (error) {
        console.log("error updating quantity", error);
    }
}

const decreaseQuantity = async () => {
    if (props.quantity > 1) {
        let newQuantity = props.quantity - 1;
        try {
            const productsResponse = await axios.patch(`http://localhost:5000/api/cart/cart-items/${props.productID}`, { quantity: newQuantity });
            props.updateQuantity(props.productID, newQuantity); // Update the quantity in the parent component
            setQuantity(newQuantity)
        } catch (error) {
            console.log("error updating quantity", error);
        }
    } else {
        alert("Quantity cannot be less than 1");
    }
}

    

    useEffect(()=>{
        const calculateTotalPrice= () =>{
            setTotalPrice(props.price*quantity)
        }

        calculateTotalPrice();
    },[quantity])

  return (
    <Card className='cart-card-con'>
      <Card.Img className='cart-card-img' variant="bottom" src={props.productImg} style={{mixBlendMode:"multiply"}}/>
      <Card.Body className='cart-card-body'>
        <Container>
            <Row style={{alignItems:"stretch"}}>
                <Col className='col-4'>
                    <Card.Title className='cart-card-title'>{props.name}</Card.Title>
                </Col>
                <Col className='col-4'>
                    <Card.Text className='change-unit'>
                        <DashCircle className='btn-quantity' onClick={decreaseQuantity} />
                        <p className='unit-no'> {quantity}x </p>
                        <PlusCircle className='btn-quantity' onClick={increaseQuantity} />
                    </Card.Text>
                </Col>
                <Col className='col-2'>
                    <Card.Text className='individual-price'>
                        R{props.price}
                    </Card.Text>
                    <Card.Text className='total-price'>
                        R{totalPrice}
                    </Card.Text>
                </Col>
                <Col className='col-1 btn-delete'>
                    <Trash onClick={handleDelete} />
                </Col>
            </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default CartCards;