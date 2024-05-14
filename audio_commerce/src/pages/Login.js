import Container from "react-bootstrap/esm/Container";
import NavigationBar from "../components/NavigationBar";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import tempAsset from "../assets/images/headphone-2.png";
import "../styles/Login.css";

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
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" />
                            <Form.Text className="text-muted">
                            
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>  

                        <Button variant="dark" type="submit" className="login-btn">
                            Login
                        </Button>

                        <p className="create-account-title">
                            don’t have an account?
                        </p>
                        <Button variant="link" type="submit" className="create-link-btn">
                            Create an account   
                        </Button>


                    </Form>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Login; 