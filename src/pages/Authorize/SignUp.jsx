import React, { useState } from "react";
import { Button, Card, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import "../../Asserts/Style/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleSignUp = () => {
    if (password !== repeatPassword) {
      // Passwords do not match
      // You might want to show an error message in your UI instead of using alert
      alert("Password and Repeat Password do not match.");
      return;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const existingCredentials =
      JSON.parse(localStorage.getItem("credentials")) || [];

    const existingEmail = existingCredentials.find(
      (cred) => cred.email === email
    );
    if (existingEmail) {
      // Email already exists
      alert("Email already exists.");
      return;
    }

    // Consider hashing the password for improved security
    const newCredentials = [...existingCredentials, { email, password }];

    localStorage.setItem("credentials", JSON.stringify(newCredentials));

    // Redirect or show a success message to the user
    props.setForms("login");
  };



  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center align-items-center Height">
          <Col lg={4}>
            <Card>
              <Card.Img variant="" src="" />
              <Card.Body>
                <Card.Title className="Signin">Sign Up</Card.Title>
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
                      <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                      />
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <Form.Group
                  className="mb-2"
                  controlId="formBasicRepeatPassword"
                >
                  <InputGroup className="mb-3">
                    <Form.Control
                      type={showRepeatPassword ? "text" : "password"}
                      className="signin-control-parent"
                      placeholder="Repeat Password"
                      value={repeatPassword}
                      onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                    <InputGroup.Text
                      className="password-toggle-btn"
                      onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                    >
                      <FontAwesomeIcon
                        icon={showRepeatPassword ? faEyeSlash : faEye}
                      />
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
                <Button
                  variant="primary w-100 fs-6 txt mt-2"
                  onClick={handleSignUp}
                >
                  Create Account
                </Button>
                <p className=" mt-2 ">
                  <small>
                    Already have an accont?{" "}
                    <Button
                      className="btn2"
                      variant="link"
                      onClick={() => props.setForms("login")}
                    >
                      Login in
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
                      <div className="d-flex justify-content-center boxx ">
                        <FaInstagram />
                        <Button className="btn3" variant="link">
                          Sign up with Instagram
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <div className="d-flex justify-content-center boxx">
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
    </>
  );
}
