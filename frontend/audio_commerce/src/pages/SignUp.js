import Container from "react-bootstrap/esm/Container";
import NavigationBar from "../components/NavigationBar";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";



import tempAsset from "../assets/images/headphone-img.png";
import "../styles/Login.css";
import FormSignUP from "../components/FormSignUP";
import FooterComp from "../components/FooterComp";

function SignUp() {

   
    return(
        <>
        <NavigationBar />

        <Container>
            <Row>
                <Col className="col-6">
                    <img src={tempAsset} alt="headphone img" className="img-login"></img>
                </Col>
                <Col className="col-6 form-con">
                    {/* form */}
                    <h1 className="form-title">
                        Create an Account
                    </h1>
                    <FormSignUP />
                </Col>
            </Row>
        </Container>

        <FooterComp />
        </>
    );
}

export default SignUp; 