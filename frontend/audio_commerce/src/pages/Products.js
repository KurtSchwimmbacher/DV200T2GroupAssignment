import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';

import NavigationBar from "../components/NavigationBar";
import MarqComp from "../components/MarqComp";
import HeaderComp from "../components/HeaderComp";
import ProductCard from "../components/ProductCard";
import SortingComp from "../components/SortingComp";
import FilterComp from "../components/FilterComp";
import UserContext from '../components/UserContext';
import "../styles/ProductsPage.css";
import FooterComp from "../components/FooterComp";

function Products() {
    const { user } = useContext(UserContext);
    const [view, setView] = useState('allProducts');
    const [products, setProducts] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        fetchProducts();
        fetchWishlist();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/products/');
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const fetchWishlist = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/products/liked/${user._id}`);
            setWishlist(response.data);
        } catch (error) {
            console.error("Error fetching wishlist:", error);
        }
    };

    const handleSortSelected = (sortKey) => {
        let sortedProducts = [...products];
        switch (sortKey) {
            case 'priceHighLow':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            case 'priceLowHigh':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'alphaAsc':
                sortedProducts.sort((a, b) => a.productName.localeCompare(b.productName));
                break;
            case 'alphaDesc':
                sortedProducts.sort((a, b) => b.productName.localeCompare(a.productName));
                break;
            case 'popularity':
                // Implement popularity sort if applicable
                break;
        }
        setProducts(sortedProducts);
    };

    return (
        <>
            <NavigationBar />
            <HeaderComp className="hero-prod-pg" where={"Products"} />
            <MarqComp className="marquee-prod-pg" />
            <Container className="productsMainCont">
                <Row className="top-title">
                    <Col className="pageHead">
                        <h1>Products</h1>
                    </Col>
                    <Col className="toggle-wish align-items-end pageHead-page-toggle" md="auto">
                        <ButtonGroup aria-label="Basic example" className="show-page-filt">
                            <Button variant={view === 'allProducts' ? 'primary' : 'secondary'} onClick={() => setView('allProducts')}>All Products</Button>
                            <Button variant={view === 'wishlist' ? 'primary' : 'secondary'} onClick={() => setView('wishlist')}>My Wishlist</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row className="filt-prod-cont">
                    <Col className="col-md-auto filterPanel">
                        <FilterComp onApplyFilters={fetchProducts} />
                    </Col>
                    <Col className="col productsPanel">
                        <Row className="prod-panel-whole">
                            <Col className="col-12 prod-filter">
                                <Row className="prPan-filterSort">
                                    <Col className="col-12">
                                        <h1 className="category-header">Showing All</h1>
                                    </Col>
                                    <Col>
                                        <div className="sorting-drop">
                                            <SortingComp onSortSelected={handleSortSelected} />
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="prPan-items">
                                {view === 'allProducts' && (
                                    <Row className="justify-content-md-center">
                                        {products.map((product, index) => (
                                            <Col className="col-6 product-container" key={index}>
                                                <ProductCard
                                                    productID={product._id}
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
                                        {wishlist.map((product, index) => (
                                            <Col className="col-6 product-container" key={index}>
                                                <ProductCard
                                                    productID={product._id}
                                                    name={product.productName}
                                                    category={product.category}
                                                    image={`http://localhost:5000/${product.imagesURL}`}
                                                    price={product.price}
                                                />
                                            </Col>
                                        ))}
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
