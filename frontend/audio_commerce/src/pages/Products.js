import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-icons";
import { useState, useEffect } from "react";
import axios from "axios";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup'; 
import Button from 'react-bootstrap/Button';

import NavigationBar from "../components/NavigationBar";
import MarqComp from "../components/MarqComp";
import HeaderComp from "../components/HeaderComp";
import ProductCard from "../components/ProductCard";
import SortingComp from "../components/SortingComp";
import FilterComp from "../components/FilterComp";



import "../styles/ProductsPage.css";
import FooterComp from "../components/FooterComp";

function Products() {

    //below is the useState that controls the page content 
    const [view, setView] = useState('allProducts'); 
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        fetchProducts();
        console.log(allProducts)
    },[]);


    const fetchProducts = async () =>{
        try {
            const productsResponse = await axios.get('http://localhost:5000/api/products/');
            setAllProducts(productsResponse.data)
        } catch (error) {
            console.log("error fetching products")
        }
    }

    const fetchFilteredProducts = (filters) => {
        const url = new URL('http://localhost:3000/products');
        if (filters.category) url.searchParams.append('category', filters.category);
        if (filters.priceRange.min) url.searchParams.append('minPrice', filters.priceRange.min);
        if (filters.priceRange.max) url.searchParams.append('maxPrice', filters.priceRange.max);

        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error:', error));
    };

   
    return(
        <>
        <NavigationBar />

        <HeaderComp className="hero-prod-pg" where={"Products"} />

        <MarqComp className="marquee-prod-pg"/>

        <Container className="productsMainCont">
            <Row className="top-title">
                <Col className="pageHead">
                    <h1>Products</h1>
                </Col>
                <Col className="toggle-wish align-items-end pageHead-page-toggle" md="auto">
                <ButtonGroup aria-label="Basic example" className="show-page-filt">
                    <Button variant="secondary" className="show-all-prod" onClick={() => setView('allProducts')}>All Products</Button>
                    <Button variant="secondary" className="show-wishlist" onClick={() => setView('wishlist')}>My Wishlist</Button>
                </ButtonGroup>
                </Col>
            </Row>
            <Row className="filt-prod-cont">
                <Col className="col-md-auto filterPanel">
                    {/*Panel for filters*/}
                    <FilterComp onApplyFilters={fetchFilteredProducts} />
                </Col>

                <Col className="col productsPanel">
                    <Row className="prod-panel-whole">
                        <Col className="col-12 prod-filter">
                            {/*cont for displaying applied filters and sort*/}
                            <Row className="prPan-filterSort">
                                <Col className="col-12">
                                    <h1 className="category-header">Showing All</h1>
                                </Col>
                                <Col>
                                    <div className="by-applied-container">
                                        <ul className="by-applied">
                                            <li className="sortedBy">
                                                {/* <i className="bi bi-dot"></i>*/} Sorted By: 
                                            </li>
                                            <li className="filtApplied">
                                                 {/*<i className="bi bi-dot"></i> */} Filters Applied: 
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md="auto">
                                    <div className="sorting-drop">
                                        <SortingComp />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="prPan-items">
                            {/*cont for displaying products*/}

                            {/*Displaying unfiltered or default products*/}
                            {view === 'allProducts' && (
                                <Row className="justify-content-md-center">
                                    {/*Products go below*/}
                                    {allProducts.map((product,index) => (
                                        <Col className="col-6 product-container" key={index}>
                                            <ProductCard 
                                                productID ={product._id}
                                                name={product.productName}
                                                category={product.category}
                                                image={`http://localhost:5000/${product.imagesURL}`}
                                                price={product.price}
                                            />
                                        </Col>
                                    ))}
                                </Row>  
                            )}

                            {view === 'wishlist' && (
                                <Row>
                                    <Col>
                                        <h4>please log in to view your wishlist</h4>
                                    </Col>
                                </Row>
                            )}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
     

     <FooterComp />
     </>
    );
}

export default Products; 