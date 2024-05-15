import Container from "react-bootstrap/esm/Container";
import NavigationBar from "../components/NavigationBar";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";



import tempAsset from "../assets/images/headphone-2.png";
import "../styles/Login.css";
import FormLogin from "../components/FormLogin";

function Login() {

   
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
                        Login
                    </h1>
                    <FormLogin />
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Login; 