import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-icons";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavigationBar from "../components/NavigationBar";
import MarqComp from "../components/MarqComp";
import HeaderComp from "../components/HeaderComp";
import ProductCard from "../components/ProductCard";
import SortingComp from "../components/SortingComp";
import FilterComp from "../components/FilterComp";

import "../styles/ProductsPage.css";

function Products() {

   
    return(
        <>
        <NavigationBar />

        <HeaderComp className="hero-prod-pg" where={"Products"} />

        <MarqComp className="marquee-prod-pg"/>

        <Container className="productsMainCont">
            <Row className="row hero">
                <Col className="col-12 pageHead">
                    <h1>Products</h1>
                </Col>
            </Row>
            <Row>
                <Col className="col-md-auto filterPanel">
                    {/*Panel for filters*/}
                    <FilterComp />
                </Col>

                <Col className="col productsPanel">
                    <Row className="prod-panel-whole">
                        <Col className="col-12 prPan-filterSort align-items-start">
                            {/*cont for displaying applied filters and sort*/}
                            <div className="by-applied-container p-3 mb-2">
                                <ul className="by-applied">
                                    <li className="sortedBy">
                                        <i className="bi bi-dot"></i> Sorted By:
                                    </li>
                                    <li className="filtApplied">
                                        <i className="bi bi-dot"></i> Filters Applied: 
                                    </li>
                                </ul>
                            </div>
                            <div className="sorting-drop p-3">
                                <SortingComp />
                            </div>
                        </Col>
                        <Col className="prPan-items ">
                            {/*cont for displaying products*/}
                            <Row className="justify-content-md-center">
                                {/*Products go below*/}
                                <h1>Hold Tight! Products are launching soon :{')'} </h1>
                                <Col className="col"> 
                                    <ProductCard />
                                </Col>
                            </Row>  
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
     
     </>
    );
}

export default Products; 