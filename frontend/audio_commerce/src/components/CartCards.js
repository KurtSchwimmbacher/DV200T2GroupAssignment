import Card from 'react-bootstrap/Card';

import productImg from "../assets/images/headphone-img.png";

import "../styles/CartCard.css"
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import {PlusCircle, DashCircle } from 'react-bootstrap-icons';

function CartCards() {
  return (
    <Card className='cart-card-con'>
      <Card.Img className='cart-card-img' variant="bottom" src={productImg} />
      <Card.Body className='cart-card-body'>
        <Container>
            <Row>
                <Col className='col-4'>
                    <Card.Title className='cart-card-title'>Sony Headphones</Card.Title>
                    <Card.Text className='product-specs'>
                        Headphone Specs
                    </Card.Text>
                </Col>
                <Col className='col-6'>
                    <Card.Text className='change-unit'>
                        <DashCircle />
                        <p className='unit-no'> 1x </p>
                        <PlusCircle />
                    </Card.Text>
                </Col>
                <Col className='col-2'>
                    <Card.Text className='individual-price'>
                        $940.00
                    </Card.Text>
                    <Card.Text className='total-price'>
                        $940.00
                    </Card.Text>
                </Col>
            </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default CartCards;