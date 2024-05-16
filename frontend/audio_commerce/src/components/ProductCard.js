import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ArrowRight } from 'react-bootstrap-icons';

import tmpImg from "../assets/images/headphone-img.png";

import '../styles/ProductCard.css';

function ProductCard() {
  return (
    <Card className='product-card'>
        <Card.Title>
            <p className='card-category'>New</p>
            <h3 className='card-title'>Sony Headphones</h3>
            <h5 className='card-subtitle'> Wireless Noise Cancelling Headphones</h5>
        </Card.Title>
            <Card.Img className='card-img' variant="top" src={tmpImg} />
        <Card.Body>
        <Card.Text className='card-subtxt'>
            From $480
            <ArrowRight className='view-product-btn' />
        </Card.Text>

        </Card.Body>
    </Card>
  );
}

export default ProductCard;