import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../../../Asserts/Style/Middle.css"
import IMAGES from "../../../Asserts/Images";   

const Middle = () => {
  return (
    <>
      <Container className="px-2 ">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <h2 className="T-2 my-5 d-flex justify-content-start mx-2 ">
              Quality Content <br />
              in just One click
            </h2>
          </Col>
          <Col sm={12} md={6} lg={5}>
            <div className="d-flex justify-content-end ">
              <span className="T-3 ">
                Whether you need it urgently or just don't like to wait, our AI
                takes just seconds to deliver a complete work, no more waiting
                in commission queue.
              </span>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="pt-md-4">
        <Row className="">
          <Col md={4} className="mb-4 ">
            <Card className="cad  border-0 hover-effect">
              <Card.Body>
                <div className="box">
                  <img src={IMAGES.OPENBOOK1} className="open1  " alt="..." />
                </div>
                <Card.Subtitle className="mb-2">
                  {" "}
                  <b>Full Stories </b>
                </Card.Subtitle>
                <Card.Text className="text-muted CT">
                  Interesting and complex, with good development and ending
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="cad  border-0 hover-effect">
              <Card.Body>
                <div className="box">
                  <img src={IMAGES.OPENBOOK2} className="open1" alt="..." />
                </div>
                <Card.Subtitle className="mb-2">
                  <b>Posting</b>
                </Card.Subtitle>
                <Card.Text className="text-muted CT">
                  For Reddit or Quora, continue your conversation or post in
                  your blog
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4 ">
            <Card className="cad  border-0 hover-effect">
              <Card.Body>
                <div className="box">
                  <img src={IMAGES.OPENBOOK3} className="open1" alt="..." />
                </div>
                <Card.Subtitle className="mb-2">
                  <b>Feedback </b>
                </Card.Subtitle>
                <Card.Text className="text-muted CT">
                  In addition to writing, the AI can review texts and give tips
                  to improve them.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="pt-md-4 my-4">
        <Card className="cadd  border-0">
          <Row>
            <Col md={12} lg={6} sm={12}>
              <div className="">
                <img
                  src={IMAGES.ANIME}
                  className="Anime  img-fluid mx-0 px-1"
                  alt="..."
                />
              </div>
            </Col>
            <Col md={12} lg={6} sm={12}>
              <Card.Body>
                <Card.Subtitle className="mb-2 d-flex justify-content-start ">
                  <h1 className="Blink">
                    {" "}
                    Anime Text in a blink Automatic and Immediate
                  </h1>
                </Card.Subtitle>
                <Card.Text className="d-flex justify-content-start text-muted ">
                  <p className="great ">
                    The technology of our AI assures great writing, without
                    waiting, without creative block, instant content only
                  </p>
                </Card.Text>
                <div className="my-4">
                  <div className="form-check d-flex px-1 align-items-start py-2"> 
                    <img src={IMAGES.CHECK} className="mx-0" alt="..." />
                    <label
                      className="form-check-label px-2"
                      htmlFor="flexRadioDefault2"
                    >
                      <h6> Powered by GPT-3 from OpenAI </h6>
                    </label>
                  </div>
                  <div className="form-check d-flex px-1 align-items-start py-2">
                    <img src={IMAGES.CHECK} className="" alt="..." />
                    <label
                      className="form-check-label px-2"
                      htmlFor="flexRadioDefault2"
                    >
                      <h6> Different genres and tones </h6>
                    </label>
                  </div>
                  <div className="form-check d-flex px-1 align-items-start py-2">
                    <img src={IMAGES.CHECK} className="" alt="..." />
                    <label
                      className="form-check-label px-2"
                      htmlFor="flexRadioDefault2"
                    >
                      <h6>
                        {" "}
                        To publish on networks or use them in your campaigns{" "}
                      </h6>
                    </label>
                  </div>
                </div>
                <div>
                  <Button className="btn6 my-3" variant="link">
                    Read More
                  </Button>
                  <img src={IMAGES.ARROW} className="" alt="..." />
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>

      {/* The Best Tools */}

      <Container className="pt-md-4 ">
        <Row>
          <Col sm={12} md={12} lg={12}>
            <div className="text-center d-flex align-items-center justify-content-center mb-0">
              <span className="left-line"></span>
              <p className="my-1 best"> The best tool for</p>
              <span className="right-line"></span>
            </div>
          </Col>

          <Col sm={12} md={12} lg={12}>
            <div className="text-center d-flex align-items-center justify-content-between flex-wrap mb-0">
            <img src={IMAGES.REDDIT} style={{ maxWidth: '100px', maxHeight: '100px' }} className="mx-1 " alt="..." />   
            <img src={IMAGES.WRITEAS} style={{ maxWidth: '100px', maxHeight: '100px' }} className="mx-1 " alt="..." /> 
            <img src={IMAGES.QUORA}  style={{ maxWidth: '100px', maxHeight: '100px' }} className="mx-1" alt="..." /> 
            <img src={IMAGES.GHOST} style={{ maxWidth: '100px', maxHeight: '100px' }} className="mx-1 " alt="..." /> 
            <img src={IMAGES.ASKFM} style={{ maxWidth: '100px', maxHeight: '100px' }} className="mx-1" alt="..." /> 
            <img src={IMAGES.PLANET} style={{ maxWidth: '100px', maxHeight: '100px' }} className="mx-1 " alt="..." /> 
            <img src={IMAGES.WIKI} style={{ maxWidth: '100px', maxHeight: '100px' }} className="mx-1 " alt="..." /> 
            
            <Col className=" text-center d-flex align-items-center justify-content-between flex-wrap " sm={12} md={12} lg={12}>
            <img src={IMAGES.STACKEXCHANGE} style={{ maxWidth: '100px', maxHeight: '100px' }} className="mx-1 " alt="..." /> 
            <img src={IMAGES.ANSWERS} style={{ maxWidth: '100px', maxHeight: '100px' }} className="mx-1 " alt="..." /> 
            <img src={IMAGES.MYANIME} style={{ maxWidth: '100px', maxHeight: '100px' }} className="mx-1 " alt="..." /> 
            <img src={IMAGES.STACKOVEFLOW} style={{ maxWidth: '100px', maxHeight: '100px' }} className="mx-1 " alt="..." /> 
            <img src={IMAGES.MEDIUM} style={{ maxWidth: '100px', maxHeight: '100px' }} className="mx-1 " alt="..." /> 
            <img src={IMAGES.ASK} style={{ maxWidth: '100px', maxHeight: '100px' }} className="mx-1" alt="..." /> 
        </Col>
            </div> 
          </Col>  
          <Col sm={12} md={12} lg={12}>
            <div className="text-center d-flex align-items-center justify-content-center mb-0">
              <span className="my-3 More"> And many more</span>
             
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="pt-md-4 ">
        <Row>
          <Col md={6} lg={6}>
            <Card className="cadd  border-0">
              <Card.Body>
                <Card.Subtitle className=" my-5 d-flex justify-content-start Blink ">
                  <h1 className="Blink">
                    {" "}
                    Anime Text in a blink Automatic and Immediate
                  </h1>
                </Card.Subtitle>
                <Card.Text className="d-flex justify-content-start my-5text-muted">
                <p className="great">
                    The technology of our AI assures great writing, without
                    waiting, without creative block, instant content only
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={6}>
            <Card className="cadd p-4 Vec">
              <div className=" my-3 RevolvingEffect">
                <img
                  src={IMAGES.FRONT}
                  className=" d-flex justify-content-start img-fluid  "
                  alt="..."
                />
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Middle;
