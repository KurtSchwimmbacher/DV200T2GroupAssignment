import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from 'react-router-dom'; 

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavigationBar from "../components/NavigationBar";
import HeaderComp from "../components/HeaderComp";
import MarqComp from "../components/MarqComp";

import schematic from "../assets/images/schematic-img.png";

import { ArrowRight } from 'react-bootstrap-icons';
import axios from "axios";

import UserContext from '../components/UserContext';
import React, { useState, useContext, useEffect } from 'react';

import '../styles/SinglePage.css';
import FooterComp from "../components/FooterComp";
import StarRating from "../components/StarRating";

function SingleProduct() {

    const { user } = useContext(UserContext);
    const { id } = useParams(); // Get the id from the URL params
    const [productID, setProductID] = useState(id);
    const [productObj, setProductObj] = useState({});
    const [productImg,setProductImg] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [cartItem, setCartItem] = useState({})
   



    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/products/${productID}`);
                setProductObj(response.data)
                setProductImg(`http://localhost:5000/${response.data.imagesURL}`)
            } catch (error) {
                console.log("Error fetching plant list", error);
            }
        };

        fetchProduct();
    }, [productID]);




    const addToCart = async () =>{
        if(user){
            try {
                const cartResponse = await axios.post('http://localhost:5000/api/cart/cart-items', {
                        name: productObj.productName,
                        imagesURL: productObj.imagesURL,
                        price: productObj.price,
                        quantity: quantity,
                        user: user.name
                    });
                    alert("added to cart")
            } catch (error) {
                console.log(error)
                alert("error adding to cart");
            }
        }
        else{
            alert("You must be logged in to add to your cart")
        }
    }
   
    return(
        <>
        <NavigationBar />
        <HeaderComp where={"SingleProduct"} singleImg={productImg} />
        <MarqComp />

        <Container className="content">
            <Row>
                <Col className="col-6">
                    <h1>{productObj.productName}</h1>
                    <StarRating />
                    <div className="bottom-text-con">
                        <h5 className="price-tag">From ${productObj.price}</h5>
                        <div className="add-to-cart" onClick={addToCart}>
                            <p>Add to Cart</p>
                            <ArrowRight className="add-to-cart-arrow" />
                        </div>
                    </div>
                </Col>
                <Col className="col-6">
                    <h4>
                    Product Description
                    </h4>
                    <p>
                    {productObj.description}
                    </p>
                </Col>
            </Row>

            <Row className="schematic-title">
                <Col>
                    <h3>Product Schematics</h3>
                </Col>
                <Col className="download-pdf">
                    <p className="download-txt">Download Full PDF</p>
                    <ArrowRight className="pdf-arrow" />
                </Col>
            </Row>
        </Container>

        <div className="schematic-con">
            <img className="schematic-img" src={schematic} alt="schematic img"></img>
        </div>
     
        <FooterComp />
     </>
    );
}

export default SingleProduct; 