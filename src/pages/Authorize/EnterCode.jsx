import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
export default function EnterCode(props) {
  return (
    <>
      <Container>
        <Row className='d-flex justify-content-center align-items-center Height'>
          <Col lg={4}>
            <Card>
              <Card.Img variant="" src="" />
              <Card.Body>
                <Card.Title>Enter The Code</Card.Title>
                <Form.Group className='mb-2 mt-3' controlId="formBasiccode">
                  <Form.Control type="password" className="signin-control-parent" placeholder="1234235" />
                </Form.Group>
                <Button variant="primary w-100 fs-6 mt-2 txt" onClick= { ()=> props.setForms ('newPassword')}> Verify </Button>
              </Card.Body>
            </Card>     
          </Col>
        </Row>  
      </Container>
    </>
  );
}
