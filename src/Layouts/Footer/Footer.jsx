import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
const Footer = () => {
  return (
  <>
  
      <div className="MADDD">
        <Container>
          <div>
            <Row className="my-0">
              <Col className="" sm={6} lg={3}>
                <h1 className="AII "> CLIENTS</h1>
                <span className="OL">Login </span>
                <Col className="my-2" sm={6} lg={3}>
                  <span className="OL">Sign Up </span>
                </Col>
              </Col>
              <Col className="" sm={6} lg={3}>
                <h1 className="AII"> SOCIAL MEDIA </h1>
                <span className="OL ">Twitter </span>
              </Col>

              <Col className="" sm={6} lg={3}>
                <h1 className="AII mt-2"> LEGAL INFO</h1>
                <span className="OL ">Legal information </span>
                <Col className="my-2" sm={6} lg={8}>
                  <span className="OL">Terms & Conditions </span>
                </Col>
                <Col className="my-2" sm={6} lg={8}>
                  <span className="OL">Privacy Policy </span>
                </Col>
              </Col>

              <Col className="" sm={6} lg={3}>
                <h1 className="AII"> SUPPORT</h1>
                <span className="OL">Helpdesk </span>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="mid4">
        <Container>
          <Col sm={6} lg={3}>
            <h1 className="OL my-3 "> T22 All right reserved</h1>
          </Col>
        </Container>
      </div>

    

  </>
  )
}

export default Footer
