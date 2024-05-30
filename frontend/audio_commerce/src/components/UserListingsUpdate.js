import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { PencilFill, Trash3Fill } from 'react-bootstrap-icons';
import "../styles/ListingEditCard.css";

function UserListingsUpdate({ listing, onEdit, onDelete }) {
  return (
    <Row>
      <Col>
        <Card className='cart-card-con'>
          <Card.Img className='cart-card-img' variant="bottom" src={`productImages/${listing.imagesURL}`} />
          <Card.Body className='cart-card-body'>
            <Container>
              <Row>
                <Col className="single-product-row">
                  <Row>
                    <Col className='col-4'>
                      <Card.Title className='cart-card-title'>{listing.productName}</Card.Title>
                      <Card.Text className='product-specs'>
                        {listing.category}
                      </Card.Text>
                    </Col>
                    <Col className='col-6'>
                      <Card.Text className='change-unit'>
                        <Button size="sm" className="edit-listing-button" onClick={() => onEdit(listing)}>
                          <PencilFill /> Edit
                        </Button>
                        <p className='divider'> | </p>
                        <Button size="sm" className="delete-listing-button" onClick={() => onDelete(listing._id)}>
                          <Trash3Fill /> Delete
                        </Button>
                      </Card.Text>
                    </Col>
                    <Col className='col-2'>
                      <Card.Text className='individual-price'>
                        ${listing.price}
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
  );
}

export default UserListingsUpdate;
