import React, { useState } from "react";
import "../../Asserts/Style/Mian.css";
import { Button, Card, CardHeader, Container, Form } from "react-bootstrap";
import IMAGES from "../../Asserts/Images";
import "./que.css";

function Mian() {
  const cardData = [
    { title: "Growth", amount: "123", currency: "$", frequency: "/month" },
    { title: "Growth", amount: "123", currency: "$", frequency: "/month" },
    { title: "Growth", amount: "123", currency: "$", frequency: "/month" },
    { title: "Growth", amount: "123", currency: "$", frequency: "/month" },
  ];
  const [rangeValue, setRangeValue] = useState(0);

  return (
    <>
      <Container>
        <hr />
        <div>
          <h1 className="Startwriting ">
            Start writing 10x faster <br /> with AI
          </h1>
        </div>
        <div className=" d-flex justify-content-center">
          <p className="Typesettingindustry ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br /> Lorem Ipsum has been the industry's standard
          </p>
        </div>
        <div>
          <div className="row my-5 ">
            {cardData.map((data, index) => (
              <div key={index} className="col-lg-3 col-md-6 brother ">
                <Card
                  className={`border-none card-shadow2 my-3 ${
                    index === 0 ? "card-shadow" : ""
                  }`}
                  style={index === 1 ? { position: "relative" } : {}}
                >
                  <CardHeader className=" Card-Header justify-content-center adjust ">
                    <Card.Title className="Growth d-flex justify-content-center">
                      {data.title}
                    </Card.Title>
                    <Card.Text>
                      <div className="d-flex">
                        <p className="Dollar">{data.currency}</p>
                        <p className="Numbers">{data.amount}</p>
                        <p className="Month">{data.frequency}</p>
                      </div>
                    </Card.Text>
                  </CardHeader>
                  <Card.Body className="Mid-sec ">
                    {index === 3 && (
                      <div>
                        <Form.Group>
                          <div className="d-flex justify-content-between">
                            <Form.Label className="Cash1">50K</Form.Label>
                            <Form.Label className="Cash2">700K</Form.Label>
                          </div>
                          <Form.Range
                            value={rangeValue}
                            onChange={(e) => setRangeValue(e.target.value)}
                            className="custom-range"
                          />
                          <style>
                            {`
                             .custom-range::-webkit-slider-runnable-track {
                             background: linear-gradient(to right, blue ${rangeValue}%, white ${rangeValue}%);
                          }

                               .custom-range::-webkit-slider-thumb {
                                background-color: blue;
                              }
                          `}
                          </style>
                        </Form.Group>
                      </div>
                    )}
                    <div>
                      <p className="money-back ">
                        5 - day 100% money back guarantee
                      </p>
                    </div>
                    <div className="my-2">
                      <div className="form-check d-flex px-1 align-items-start py-1">
                          
                        <label
                          className="form-check-label px-2"
                          htmlFor="flexRadioDefault2"
                        >
                          <p className="Quia">
                            {" "}
                            Quia rem est sed impedit magnam{" "}
                          </p>
                        </label>
                      </div>
                      <div className="form-check d-flex px-1 align-items-start py-1">
                        <img src={IMAGES.TICTAC} className="mx-0 Tictac" alt="..." />
                        <label
                          className="form-check-label px-2"
                          htmlFor="flexRadioDefault2"
                        >
                          <p className="Quia">
                            Dolorem vero ratione voluptates{" "}
                          </p>
                        </label>
                      </div>
                      <div className="form-check d-flex px-1 align-items-start py-1">
                        <img src={IMAGES.TICTAC} className="mx-0 Tictac" alt="..." />
                        <label
                          className="form-check-label px-2"
                          htmlFor="flexRadioDefault2"
                        >
                          <p className="Quia">
                            {" "}
                            Qui sed ab doloribus voluptatem dolore{" "}
                          </p>
                        </label>
                      </div>

                      <div className="form-check d-flex px-1 align-items-start py-1">
                        <img src={IMAGES.TICTAC} className="mx-0 Tictac" alt="..." />
                        <label
                          className="form-check-label px-2"
                          htmlFor="flexRadioDefault2"
                        >
                          <p className="Quia">
                            {" "}
                            Laborum commodi molestiae id et fugiat{" "}
                          </p>
                        </label>
                      </div>
                      <div className="form-check d-flex px-1 align-items-start py-1">
                        <img src={IMAGES.TICTAC} className="mx-0 Tictac" alt="..." />
                        <label
                          className="form-check-label px-2"
                          htmlFor="flexRadioDefault2"
                        >
                          <p className="Quia">
                            {" "}
                            Nam ut ipsa nesciunt culpa modi dolor{" "}
                          </p>
                        </label>
                      </div>
                      {index === 1 && (
                        <div className="absolute-button">
                          <Button className="BestSeller" variant="">
                            Best Saller
                          </Button>
                        </div>
                      )}
                      <div className=" UpdateNow my-3">
                        <Button variant="">Update Now</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Mian;
