import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import axios from "axios";
import ProductCard from "../components/ProductCard";
import EditListingsModal from "../components/EditListingsModal";
import "../styles/Community.css";
import ListingForm from "../components/ListingForm"; 
import ToggleButton from "../components/ToggleButton";
import NavigationBar from "../components/NavigationBar";
import HeaderComp from "../components/HeaderComp";
import MarqComp from "../components/MarqComp";
import { useContext } from "react";
import UserContext from "../components/UserContext";
import FooterComp from '../components/FooterComp';

function Community() {
  const { user } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [allProducts,setAllProducts] = useState([]);

  const addComment = (text) => {
    const newComment = {
      id: Date.now(),
      text,
      approved: false,
      user: user,
    };
    setComments([...comments, newComment]);
  };

  const approveComment = (id) => {
    setComments(
      comments.map((comment) =>
        comment.id === id? {...comment, approved: true } : comment
      )
    );
  };

  const deleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id!== id));
  };



  return (
    <>
    <NavigationBar />
    <HeaderComp className="hero-prod-pg" where={"Community"} />
    <MarqComp className="marquee-prod-pg"/>

      <Container className="homeMainCont">
        <Row className="row hero">
          <Col className="col-12 pageHead">
            <h1>Add your own Listing</h1>
          </Col>
        </Row>
        <Row>
          <Col className="col-6 form">
            <ListingForm />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addComment(e.target.elements.comment.value);
                e.target.elements.comment.value = "";
              }}
            >
              <input className="input" type="text" name="comment"placeholder="Add a comment..." />
              <Button className="add" type="submit">Add</Button>
            </form>
          </Col>
          <Col className="col-6">
            <div className="image"></div>
          </Col>
        </Row>
        <Row className="row hero">
          <Col className="col-12 pageHead">
            <h1>Your Past Listings</h1>
          </Col>
        </Row>
        <Row>
          <Col className="col-6">
            <ToggleButton />
          </Col>
          <Col className="col-6 edit justify-content-end">
            <EditListingsModal />
          </Col>
        </Row>
        <Row>
          <Col className="col-12">
            <h1>Comments</h1>
            <ul className="comment-box">
  {comments.map((comment) => (
    <li key={comment.id}>
      <div className="comment-bubble">
        {comment.approved? (
          <p>{comment.text}</p>
        ) : (
          <p style={{ color: "gray" }}>
            {comment.text} (Pending approval)
          </p>
        )}
        <div className="comment-actions">
          <a
            className={`${comment.approved? "approved" : ""}`}
            onClick={() => approveComment(comment.id)}
          >
            {comment.approved? "Approved" : "Approve"}
          </a>
          <a className="delete" onClick={() => deleteComment(comment.id)}>
            Delete
          </a>
        </div>
      </div>
    </li>
  ))}
</ul>

          </Col>
        </Row>
      </Container>

      <FooterComp />
    </>
  );
};

export default Community; 