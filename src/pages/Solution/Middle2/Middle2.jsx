import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../../../Asserts/Style/Middle2.css"
import IMAGES from "../../../Asserts/Images";
import Slider from "react-slick";

const Middle2 = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  const [count, setCount] = useState({ counter1: 20, counter2: 76 , counter3: 96,  counter4: 67});

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => ({
        counter1: prevCount.counter1 < 75 ? prevCount.counter1 + 1 : 20,
        counter2: prevCount.counter2 < 95? prevCount.counter2 + 1 : 76,
        counter3: prevCount.counter3 < 100? prevCount.counter3 + 1 : 96,
        counter4: prevCount.counter4 < 100? prevCount.counter4 + 1 : 67
        
      }));
    }, 300); 
    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []); // The empty dependency array ensures the effect runs only once after the initial render

  return (
    <>
      {/* -----------------------------------------  2nd-Middle ---------------------------------------------- */}
      <div className=" px-2 mid">
        <Container>
          <Row>
            <Col xs={5} md={8} lg={7}>
              <h2 className=" Stories d-flex justify-content-start ">
                Fantasy Stories and Anime Post Specialized Al
              </h2>
            </Col>
            <Col xs={10} md={4} lg={5}>
              <div className="d-flex justify-content-end">
                <span className=" intelligence">
                  Our artificial intelligence can complete, start, continue or
                  make from scratch a good anime and fantasy story, a reddit
                  post or an answer to conversations.
                </span>
              </div>
            </Col>

            <Col className=" Learning" sm={6} lg={3}>
              <h1 className="AI"> {count.counter1}+</h1>
              <span className="OL">AI and Machine Learning Patterns</span>
            </Col>
            <Col className="Learning " sm={6} lg={3}>
              <h1 className="AI"> {count.counter2}+</h1>
              <span className="OL">
                Users approve and use regularly AI writing
              </span>
            </Col>
            <Col className="Learning" sm={6} lg={3}>
              <h1 className="AI">{count.counter3}% </h1>
              <span className="OL">Proven accuracy</span>
            </Col>
            <Col className="Learning" sm={6} lg={3}>
              <h1 className="AI">{count.counter4}</h1>
              <span className="OL">Industry leading eNPS score</span>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="mid2">
        <Container>
          <Row className="home border-0">
            <Col sm={12} md={6} lg={6}>
              <h2 className="my-5 d-flex justify-content-start mx-2 effective ">
                Within the reach of any anime fan Easy to use and effective
              </h2>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className="d-flex justify-content-end ">
                <span className=" Fan">
                  Our AI will enhance the quality of your fan fiction or your
                  post, it can create an interesting backstory or it can even
                  advise you on how to continue with your text or conversation
                </span>
              </div>
            </Col>
          </Row>

          <Row className="parentSlick">
            <Col sm={12} md={12} lg={12}>
              <h2 className=" Storiess d-flex justify-content-center align-items-center  ">
                What they say about us
              </h2>
            </Col>
            <Slider {...settings}>
              <Col sm={6} md={8} lg={4} className="mb-4">
                <Card className="my-3 ">
                  <Card.Body>
                    <div className="box2">
                      <img src={IMAGES.ECLIPSE} className="open2" alt="..." />
                      <div className="nameOverlay mx-5 px-1 my-2 ">
                        John Doe
                      </div>
                      <div className="nameOverlayy mx-5 px-1 ">
                        {" "}
                        Unicorn Exchange{" "}
                      </div>
                    </div>
                    <Card.Subtitle className="mb-2 week">
                      A 2 week copy project finished in 2 days with jasper
                    </Card.Subtitle>
                    <Card.Text className="text-muted CT">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen bo
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} md={8} lg={4} className="mb-4">
                <Card className=" my-3  border-0">
                  <Card.Body>
                    <div className="box2">
                      <img src={IMAGES.ECLIPSE} className="open2" alt="..." />
                      <div className="nameOverlay mx-5 px-1 my-2 ">
                        John Doe
                      </div>
                      <div className="nameOverlayy mx-5 px-1 ">
                        {" "}
                        Unicorn Exchange{" "}
                      </div>
                    </div>
                    <Card.Subtitle className="mb-2 week">
                      A 2 week copy project finished in 2 days with jasper
                    </Card.Subtitle>
                    <Card.Text className="text-muted CT">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen bo
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} md={8} lg={4} className="mb-4 ">
                <Card className=" my-3   border-0">
                  <Card.Body>
                    <div className="box2">
                      <img src={IMAGES.ECLIPSE} className="open2" alt="..." />
                      <div className="nameOverlay mx-5 px-1  my-2 ">
                        John Doe
                      </div>
                      <div className="nameOverlayy mx-5 px-1 ">
                        {" "}
                        Unicorn Exchange{" "}
                      </div>
                    </div>
                    <Card.Subtitle className="mb-2 week">
                      A 2 week copy project finished in 2 days with jasper
                    </Card.Subtitle>
                    <Card.Text className="text-muted CT">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen bo.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={6} md={8} lg={4} className="mb-4 ">
                <Card className=" my-3   border-0">
                  <Card.Body>
                    <div className="box2 ">
                      <img src={IMAGES.ECLIPSE} className="open2" alt="..." />
                      <div className="nameOverlay mx-5 px-1  my-2 ">
                        John Doe
                      </div>
                      <div className="nameOverlayy mx-5 px-1 ">
                        {" "}
                        Unicorn Exchange{" "}
                      </div>
                    </div>
                    <Card.Subtitle className="mb-2 week">
                      A 2 week copy project finished in 2 days with jasper
                    </Card.Subtitle>
                    <Card.Text className="text-muted CT">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen bo.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Slider>
          </Row>
        </Container>
      </div>

      {/* -----------------------------------------  Footer1---------------------------------------------- */}

      {/* <div className="midd">
        <Container>
          <div className="home2">
            <h2 className="Free mb-5">Try it for free right now!</h2>
            <p className="Program">
              Test the quality of our progrom and let yourself be convinced by
              the effectiveness of our Al, start right now to generate quality
              content!
            </p>
            <div className="d-flex align-items-center justify-content-start gap-3 mt-4">
              <button type="button" className="btn btn3">
                SIGN UP WITH EMAIL
              </button>
              <button type="button" className="btn btn-primary btn12">
                SIGN UP WITH GOOGLE
              </button>
            </div>
          </div>
        </Container>
      </div>
      <div className="midd">
        <Container>
          <div>
            <Row className="my-0">
              <Col className="" sm={6} lg={3}>
                <h1 className="AII"> CLIENTS</h1>
                <span className="OL">Login </span>
                <Col className="my-2" sm={6} lg={3}>
                  <span className="OL">Sign Up </span>
                </Col>
              </Col>
              <Col className="" sm={6} lg={3}>
                <h1 className="AII"> SOCIAL MEDIA </h1>
                <span className="OL">Twitter </span>
              </Col>

              <Col className="" sm={6} lg={3}>
                <h1 className="AII"> LEGAL INFO</h1>
                <span className="OL">Legal information </span>
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
      </div> */}
    </>
  );
};
export default Middle2;
