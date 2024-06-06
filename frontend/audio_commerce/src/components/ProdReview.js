import React, { useContext, useEffect, useState } from 'react'; 
import "bootstrap/dist/css/bootstrap.min.css";
 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button"; 
import ListGroup from "react-bootstrap/ListGroup";

import axios from "axios"; 

// import UserContext from '../components/UserContext.js';

function ProdReview({ productId, username }) {
    const [rating, setRating] = useState("");
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [editingCommentId, setEditingCommentId] = useState("");
    

    useEffect(() => {
        const fetchComments = async () => {
          console.log(username)
        try {
            const response = await axios.get(`http://localhost:5000/api/comments/${productId}`);
            setComments(response.data);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
        };

        fetchComments();
    }, [productId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (rating && comment) {

        const newComment = { productId, userName: username, rating, comment };
        
        console.log(newComment);
        try {
            if (editingCommentId) {
            const response = await axios.patch(`http://localhost:5000/api/comments/update/${editingCommentId}`, newComment);

            setComments(comments.map(c => c._id === editingCommentId ? response.data : c));
            setEditingCommentId(null);
            
            } else {
            const response = await axios.post('http://localhost:5000/api/comments', newComment);
            setComments([...comments, response.data]);
            }
            setRating("");
            setComment("");
        } catch (error) {
            console.error('Error posting comment:', error);
        }
        }
    };

    const handleEdit = (comment) => {
        setRating(comment.rating);
        setComment(comment.comment);
        setEditingCommentId(comment._id);
    };

    const handleDelete = async (id) => {
        try {
        await axios.delete(`http://localhost:5000/api/comments/delete/${id}`);
        setComments(comments.filter(c => c._id !== id));
        } catch (error) {
        console.error('Error deleting comment:', error);
        }
    };

    return (
        <>
            <Row className="my-4">
        <Col>
          <h2>Leave a Review</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formRating" className="mb-3">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                as="select"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="">Select Rating</option>
                <option value="5">5 - Excellent</option>
                <option value="4">4 - Good</option>
                <option value="3">3 - Average</option>
                <option value="2">2 - Poor</option>
                <option value="1">1 - Terrible</option>
                
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formComment" className="mb-3">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              {editingCommentId ? "Update Review" : "Submit Review"}
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <h2>Reviews</h2>
          <ListGroup>
            {comments.map((review) => (
              <ListGroup.Item key={review._id}>
                <strong>Rating: </strong> {review.rating}
                <br />
                <strong>Comment: </strong> {review.comment}
                <br />
                <span className="user-handle">@{review.userName}</span>
                {review.userName === username && (
                  <>
                    <Button variant="secondary" onClick={() => handleEdit(review)}>Edit</Button>
                    <Button variant="danger" onClick={() => handleDelete(review._id)}>Delete</Button>
                  </>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
        </>
    ); 

}

export default ProdReview; 