import Container from "react-bootstrap/esm/Container";
import NavigationBar from "../components/NavigationBar";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useParams } from 'react-router-dom';
import FormEdit from '../components/FormEdit';
import { useState } from "react";

import tempAsset from "../assets/images/headphone-img.png";
import FooterComp from "../components/FooterComp";


function EditProductPage() {
    const { id } = useParams(); // Get the id from the URL params
    const [productID, setProductID] = useState(id);

    return(
        <>
        <NavigationBar />

        <Container>
            <Row>
                <Col className="col form-con">
                    {/* form */}
                    <h1 className="form-title">
                       Edit A Product
                    </h1>
                    <FormEdit id={productID} />
                </Col>
            </Row>
        </Container>

        <FooterComp />
        </>
    );
}

export default EditProductPage; 