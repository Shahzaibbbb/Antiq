import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
export default function ResetPassword(props)

{
console.log("This is a props of newpassword:", props);

  return (
    <>
      <Container>
        <Row className='d-flex justify-content-center align-items-center Height'>
          <Col lg={4}>
            <Card>
              <Card.Img variant="" src="" />
              <Card.Body>
                <Card.Title>Reset Your Password</Card.Title>
                <Form.Group className='mb-2 mt-3' controlId="formBasicEmail">
                  <Form.Control type="email" className="signin-control-parent" placeholder="Email Address" />
                </Form.Group>
                <Button variant="primary w-100 fs-6 mt-2 txt" onClick= { ()=> props.setForms ('enterCode')} >Get Code</Button>  
              </Card.Body>
            </Card>     
          </Col>
        </Row>  
      </Container>
    </>
  );
}
