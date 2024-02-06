import React, { useEffect, useState } from "react";
import {
  Container, Dropdown, Row, Form, Button, Card, Accordion} from "react-bootstrap";
import "../../Asserts/Style/BlogMain.css";
import "../../Asserts/Style/Header.css";
import "../../Asserts/Style/Middle2.css";
import "../../Asserts/Style/Middle.css";
import "../../Asserts/Style/Blogquee.css";
import "../../Asserts/Style/About.css";
import IMAGES from "../../Asserts/Images";

const BlogMain = () => {
  const minValue = 200;
  const maxValue = 1500;
   const middleValue = Math.floor((minValue + maxValue) / 2);
   const [rangeValue, setRangeValue] = useState(middleValue);
 
   const [inputValue, setInputValue] = useState("");
   const [submittedValues, setSubmittedValues] = useState([]);

   useEffect(() => {
     const storedSubmittedValues = localStorage.getItem("submittedValues");
     if (storedSubmittedValues) {
       setSubmittedValues(JSON.parse(storedSubmittedValues));
     }
   }, []);
 
   const handleInputChange = (e) => {
     setInputValue(e.target.value);
   };
 
   const handleSubmit = () => {
     if (inputValue.trim() !== "") {
       const uniqueKey = Math.random().toString(36).substring(7);
       setSubmittedValues((prevValues) => [...prevValues, { key: uniqueKey, value: inputValue }]);
       setInputValue("");
       localStorage.setItem("submittedValues", JSON.stringify([...submittedValues, { key: uniqueKey, value: inputValue }]));
     }
   };
 
   const handleAccordionToggle = (eventKey) => {
     localStorage.setItem("activeAccordion", eventKey);
   };
  

  return (
    <>
      <hr />
      <Container>
        <Row>
          <Dropdown className="col-lg-1 mj ">
            <Dropdown.Toggle className="All-Button" variant="white">
              <span className="dropdown-text">All</span>
            </Dropdown.Toggle>
          </Dropdown>
          <Form className="col-lg-5 col-md-6 mjj">
          <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                type="Name"
                placeholder="Enter What You Need"
                className="custom-form-control"
                value={inputValue}
                onChange={handleInputChange}
              />
              <div className="absolutee-button d-flex justify-content-center">
                <Button className="Submit" variant="" onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </Form.Group>
            <Card className="col-lg-4 Max ">
              <Card.Body>
                <Card.Title className="Maxlenght">
                  Max. length: ({rangeValue})
                </Card.Title>
                <div>
                  <Form.Range
                    value={rangeValue}
                    min={minValue} // Set the minimum value
                    max={maxValue} // Set the maximum value
                    onChange={(e) => setRangeValue(parseInt(e.target.value))}
                    className="custom-range"
                  />
                  <style>
                    {`
      .custom-range::-webkit-slider-runnable-track {
        background: linear-gradient(to right, white ${
          ((rangeValue - minValue) / (maxValue - minValue)) * 100
        }%, white ${((rangeValue - minValue) / (maxValue - minValue)) * 100}%);
        height: 8px; /* Adjust the height of the track */
        border-radius: 4px; /* Adjust the border-radius of the track */
      }

      .custom-range::-webkit-slider-thumb {
        background-color: #9638C5;;
        width: 15px; /* Adjust the width of the thumb */
        height: 15px; /* Adjust the height of the thumb */
        margin-top: -3px; /* Adjust the margin-top to center the thumb vertically */
      }
    `}
                  </style>
                  <hr className="Blue" />
                  <img src={IMAGES.SMALLDOT} className="smalldot2" alt="..." />
                  <img src={IMAGES.SMALLDOT} className="smalldot" alt="..." />
                </div>
                <Card.Text>
                  <div className="d-flex justify-content-between">
                    <p className="Num">256</p>
                    <p className="Num">812</p>
                    <p className="Num">1500</p>
                  </div>
                  <div className="d-flex justify-content-between ">
                    <p className="Stand">Standard</p>
                    <p className="Stand">medium</p>
                    <p className="Stand">Large</p>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Form>

          <Card className="Blogcard d-flex">
          <Accordion defaultActiveKey="0" className="custom-accordion ">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Subject</Accordion.Header>
        <Accordion.Body>
        <Accordion defaultActiveKey="0" className="nested-accordion ">
            <Accordion.Item eventKey="1">
              <Accordion.Header><p className="Nella ">Question</p>
              <div> <img src={IMAGES.SPELLCHECK} className="Spellcheck" alt="..." /> </div>
              <div> <img src={IMAGES.KEYBOARDARROW} className="Keyboard" alt="..." /> </div>
              </Accordion.Header>
              <Accordion.Body>
                <p className="Nella2">Question</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header><p className="Nella">You'll Be Surprised By The Depth Of These Leo Characters</p></Accordion.Header>
              <Accordion.Body>
                <p className="Nella2">You'll Be Surprised By The Depth Of These Leo Characters</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header><p className="Nella">10 best anime characters that you should know</p></Accordion.Header>
              <Accordion.Body>
                <p className="Nella2">10 best anime characters that you should know</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header><p className="Nella">Bulgarian</p></Accordion.Header>
              <Accordion.Body>
                <p className="Nella2">Bulgarian</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Chinese</Accordion.Header>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Czech</Accordion.Header>
              </Accordion.Item>
            </Accordion>  
              {/* Dymanic Accordion  */} 
              <Accordion 
            defaultActiveKey="0"
            className="Dymainic-Accordion"
            onSelect={handleAccordionToggle}
          > 
       
            {submittedValues.map(({ key, value }, index) => (
              <Accordion.Item key={key} className="accordion-item-wrapper" eventKey={key}>
                <Accordion.Header>{value}</Accordion.Header>
        <Accordion.Body>
          <Accordion defaultActiveKey="0" className="nested-accordion">
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <p className="Nella">Question</p>
                <div>
                  <img src={IMAGES.SPELLCHECK} className="Spellcheck" alt="..." />
                </div>
                <div>
                  <img src={IMAGES.KEYBOARDARROW} className="Keyboard" alt="..." />
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <p className="Nella2">Question</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <p className="Nella">You'll Be Surprised By The Depth Of These Leo Characters</p>
              </Accordion.Header>
              <Accordion.Body>
                <p className="Nella2">You'll Be Surprised By The Depth Of These Leo Characters</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <p className="Nella">10 best anime characters that you should know</p>
              </Accordion.Header>
              <Accordion.Body>
                <p className="Nella2">10 best anime characters that you should know</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <p className="Nella">Bulgarian</p>
              </Accordion.Header>
              <Accordion.Body>
                <p className="Nella2">Bulgarian</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion> 
          <Accordion.Item eventKey="1">
      <Accordion.Header>Chinese</Accordion.Header>
    </Accordion.Item>
    <Accordion.Item eventKey="2">
      <Accordion.Header>Czech</Accordion.Header>
    </Accordion.Item>
        </Accordion.Body> 
      </Accordion.Item>
    ))} 
  </Accordion>  
            <div className="mb-3" >
              <div className="box10">
                <img src={IMAGES.SHARE} className="Share" alt="..." />
              </div>
              <div className="box20">
                <img src={IMAGES.COPY} className="Copy" alt="..." />
              </div>
            </div>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default BlogMain;
