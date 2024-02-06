import React, { useState } from "react";
import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import SignUp from "./SignUp";
import ResetPassword from "./ResetPassword";
import EnterCode from "./EnterCode";
import NewPassword from "./NewPassword";
import "../../Asserts/Style/styles.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Auth/AuthContext"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


export default function SignIn() {
  const [forms, setForms] = useState("login");
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignInButtonClick = () => {
    const storedCredentials = JSON.parse(localStorage.getItem("credentials")) || [];

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const match = storedCredentials.find(
      (cred) => cred.email === email && cred.password === password
    );

    if (match) { 
      setEmail("");
      setPassword("");
      login();
      navigate("/landing");
    } else {
      // Show error message in your UI instead of using alert
      alert("Invalid email or password");
    }
  };


  return (
    <>
      {forms === "login" && (
        <Container>
          <Row className="d-flex justify-content-center align-items-center Height">
            <Col lg={4}>
              <Card>
                <Card.Img variant="" src="" />
                <Card.Body>
                  <Card.Title className="Signin">Sign In</Card.Title>
                  <Form.Group className="mb-2 mt-2" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    className="signin-control-parent"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <InputGroup className="mb-3">
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        className="signin-control-parent"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <InputGroup.Text
                        className="password-toggle-btn"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                <Button
                  variant="primary w-100 fs-6 mt-2 txt "
                  onClick={handleSignInButtonClick}
                >
                  Sign In
                </Button>
                  <p className=" mt-2 ">
                    <small>
                      Don't have an account?{" "}
                      <Button
                        onClick={() => setForms("signUp")}
                        className="btn2"
                        variant="link"
                      >
                        {" "}
                        Sign up
                      </Button>{" "}
                      or{" "}
                      <Button
                        onClick={() => setForms("resetPassword")}
                        className="btn2"
                        variant="link"
                      >
                        Forget Password
                      </Button>
                    </small>
                  </p>
                  <div className="text-center d-flex align-items-center justify-content-center mb-0">
                    <span className="left-line"></span>
                    <Button className="btn2 " variant="link">
                      or Sign Up with
                    </Button>
                    <span className="right-line"></span>
                  </div>
                  <div className="hmm mt-3">
                    <div className="row">
                      <div className="col">
                        <div className="d-flex justify-content-center boxx  ">
                          <FaTwitter />
                          <Button className="btn3" variant="link">
                            Sign up with Twitter
                          </Button>
                        </div>
                      </div>
                      <div className="col">
                        <div className="d-flex justify-content-center boxx">
                          <FaInstagram />
                          <Button className="btn3" variant="link">
                            Sign up with Instagram
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col">
                        <div className="d-flex justify-content-center boxx ">
                          <FcGoogle />
                          <Button className="btn3 " variant="link">
                            Sign up with Google
                          </Button>
                        </div>
                      </div>
                      <div className="col">
                        <div className="d-flex justify-content-center boxx">
                          <FaFacebook />
                          <Button className="btn3" variant="link">
                            Sign up with facebook
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
      
      {forms === "signUp" && <SignUp forms={forms} setForms={setForms} />}

      {forms === "resetPassword" && (
        <ResetPassword forms={forms} setForms={setForms} />
      )}

      {forms === "enterCode" && <EnterCode forms={forms} setForms={setForms} />}

      {forms === "newPassword" && (
        <NewPassword forms={forms} setForms={setForms} />
      )}
    </>
  );
}
