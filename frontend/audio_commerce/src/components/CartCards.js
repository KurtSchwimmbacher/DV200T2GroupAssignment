import Card from 'react-bootstrap/Card';

import productImg from "../assets/images/headphone-img.png";

import "../styles/CartCard.css"
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import {PlusCircle, DashCircle,Trash } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';

function CartCards(props) {

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(()=>{
        const calculateTotalPrice= () =>{
            setTotalPrice(props.price*props.quantity)
        }

        calculateTotalPrice();
    },[props.quanity])

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
                        <DashCircle className='btn-quantity' />
                        <p className='unit-no'> {props.quantity}x </p>
                        <PlusCircle className='btn-quantity' />
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
                    <Trash />
                </Col>
            </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default CartCards;