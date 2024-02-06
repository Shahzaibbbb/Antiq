import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
export default function NewPassword(props) {
  return (
    <>
      <Container>
        <Row className='d-flex justify-content-center align-items-center Height'>
          <Col lg={4}>
            <Card>
              <Card.Img variant="" src="" />
              <Card.Body>
                <Card.Title>Get a new password</Card.Title>
                <Form.Group className='mb-2 mt-3' controlId="formBasiccode">
                  <Form.Control type="password" className="signin-control-parent" placeholder="IOuewihwqlksd" />
                </Form.Group>
                <Form.Group className='mb-2 mt-3' controlId="formBasiccode">
                  <Form.Control type="password" className="signin-control-parent" placeholder="IOuewihwqlksd" />
                </Form.Group>
                <Button variant="primary w-100 fs-6 mt-2 txt" onClick= { ()=> props.setForms ('login')} >Verify</Button>
              </Card.Body>
            </Card>     
          </Col>
        </Row>  
      </Container>
    </>
  );
}
