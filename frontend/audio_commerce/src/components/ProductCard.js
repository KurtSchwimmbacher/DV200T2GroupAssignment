import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ArrowRight} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'

import tmpImg from "../assets/images/headphone-img.png";

import '../styles/ProductCard.css';

function ProductCard(props) {
  return (
    <Card className='product-card'>
        <Card.Title>
            <p className='card-category'>New</p>
            <h3 className='card-title'>{props.name}</h3>
            <h5 className='card-subtitle'> {props.category}</h5>
        </Card.Title>
            <Card.Img className='card-img' variant="top" src={props.image} />
        <Card.Body>
        <Card.Text className='card-subtxt'>
            From R{props.price}.00
            <Link to={`/single/${props.productID}`}>
              <ArrowRight className='view-product-btn' />
            </Link>
        </Card.Text>
        
        </Card.Body>
    </Card>
  );
}

export default ProductCard;