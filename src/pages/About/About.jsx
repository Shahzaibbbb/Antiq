import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import IMAGES from "../../Asserts/Images";
import "../../Asserts/Style/About.css"
import "./queries.css";
import { Card, Col, Container, Row } from "react-bootstrap";

const About = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const [activeLink, setActiveLink] = useState("solutions");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const homeSection = document.getElementById("solutions-section");
      const aboutSection = document.getElementById("about-section");
      const logoutSection = document.getElementById("logout-section");
      const priceSection = document.getElementById("price-section");
      const blogSection = document.getElementById("blog-section");

      if (homeSection && scrollPosition < homeSection.offsetTop) {
        setActiveLink("solutions");
      } else if (aboutSection && scrollPosition >= aboutSection.offsetTop) {
        setActiveLink("about");
      }
      else if (aboutSection && scrollPosition >= logoutSection.offsetTop) {
        setActiveLink("logout");
      } 
      else if (priceSection && scrollPosition >= priceSection.offsetTop) {
        setActiveLink("price");
      } 
      else if (blogSection && scrollPosition >= blogSection.offsetTop) {
        setActiveLink("blog");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeLink]);

  return (
    <> 
      <div className="bg">
        <nav className="navbar navbar-expand-lg">
          <div className="container px-3">
            <a className="navbar-brand btn-light" href="/">
              <img src={IMAGES.ANI} className="anii" alt="..." />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleNavToggle}
            >
              <span className="navbar-toggler-icon btn btn-light"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${
                isNavCollapsed ? "" : "show"
              }`}
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li
                  className={`nav-item ${
                    activeLink === "solutions" ? "active" : ""
                  }`}
                  onClick={() => setActiveLink("solutions")}
                >
                  <NavLink
                    className="nav-link"
                    to="/landing"
                    id="solutions-section"
                    activeClassName="active"
                  >
                    Solution
                  </NavLink>
                </li>

                <li
                  className={`nav-item ${
                    activeLink === "price" ? "active" : ""
                  }`}
                  onClick={() => setActiveLink("price")}
                >
                  <NavLink className="nav-link" to="/price" id="price-section">
                    Price
                  </NavLink>
                </li>

                <li
                  className={`nav-item ${
                    activeLink === "blog" ? "active" : ""
                  }`}
                  onClick={() => setActiveLink("blog")}
                >
                  <NavLink className="nav-link" to="/blog" id="blog-section">
                    Blog
                  </NavLink>
                </li>

                <li
                  className={`nav-item ${
                    activeLink === "about" ? "active" : ""
                  }`}
                  onClick={() => setActiveLink("about")}
                >
                  <NavLink className="nav-link" to="/about" id="about-section">
                    About
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className={`nav-but ${
                    activeLink === "logout" ? "active" : ""
                  }`}
                  onClick={() => setActiveLink("logout")}
                >
                  <NavLink className="nav-link" to="/logout" id="logout-section">
                    Logout
                  </NavLink>
                </li>
                <li className="nav-but px-4 mx-4">
                  <button type="button" className="btn btn-primary btn8 ">
                    Upgrade
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Container className="">
          <div className="d-flex justify-content-center  ">
            <span className="Aboutus"> About Us</span>
          </div>
          <div className="Mission">
            <h1>
              Our mission at Aniquest is to help users create their own anime
              stories
            </h1>
          </div>
          {/* <div className="story">
            <h1>
              Our mission at Aniquest is to help users create their own anime
              stories
            </h1>
          </div> */}
          <div> 
            <h6 className="Aniquest">
              Aniquest is a user-friendly tool that helps users create their own
              anime stories. It provides various templates and resources that
              users can use to create their own unique stories. Whether you’re a
              fan of anime or just looking for a new creative outlet, Aniquest
              is the perfect place for you!
            </h6>
          </div>

          <div className="container px-4">
            <div className="d-flex justify-content-center align-items-center">
              <div className="card people text-center">
                <img src={IMAGES.PEOPLE} className="img-fluid ppl" alt="..." />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container className="">
        <Card className="Wind">
          <Row>
            <Col lg={8} sm={12} md={12}>
              <div>
                <h1 className="d-flex justify-content-start Starts">
                  A great story starts with a great team
                </h1>
              </div>
              <div>
                <p className="d-flex justify-content-start Putting">
                  If you want to create a great story, you need to start with a
                  great team. By putting together a group of talented and
                  passionate people, you can set the foundation for an
                  incredible journey. As with any team, there will be challenges
                  and bumps along the way, but if everyone is committed to the
                  story, the end result will be worth it. So if you want to
                  write a masterpiece, assemble the dream team and let the
                  adventure begin
                </p>
              </div>
              <div>
                <p className="d-flex justify-content-start Putting Sarah">
                  Sarah Kraft, CEO & Co-Founder
                </p>
              </div>
            </Col>
            <Col lg={4} sm={6} md={12} className="d-flex justify-content-end">
            <div> 
            <img
                src={IMAGES.SHORT}
                className="img-fluid d-md-none d-lg-none short "
                alt=" short" 
                
              /> 
              </div> 
              <img
                src={IMAGES.TECHLOGY}
                className="img-fluid Techlogy"
                alt="Technology" 

              /> 
           
            </Col>
          </Row>
        </Card>
      </Container>

      <Container className=" px-4 bhola2">
        <div className="d-flex justify-content-center  ">
          <span className="Values">Our Values</span>
        </div>
        <div>
          <span className="Company">
            A company is only <br /> as strong as its values
          </span>
        </div>

        <div className="d-flex justify-content-center">
          <Card className="C-Bring">
            <Card.Body>
              <Card.Text className="Pride">
                At our software company, we pride ourselves on having a set of
                strong values that bring great people together. Our values
                include excellence, teamwork, innovation, and respect. By
                adhering to these values, we create a positive and supportive
                environment where our team can thrive.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <Row className="mt-3 bhola">
          <Col lg={6} className="mb-4 ">
            <Card className="cold border-0 hover-effect">
              <Card.Body>
                <div className="box3">
                  <img src={IMAGES.BOLB} className="Open6" alt="..." />
                </div>
                <Card.Subtitle className="mb-2 nameOverlaa">
                  {" "}
                  <b className="bhoom">Team work </b>
                </Card.Subtitle>
                <Card.Text className="text-muted CTT nameOverlaaa col-md-9">
                  Our team is only as good as our ability to work together. We
                  know that when we work together we can achieve things that
                  none of us could do on our own.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} className="mb-4">
            <Card className="cold border-0 hover-effect">
              <Card.Body>
                <div className="box3">
                  <img src={IMAGES.FLOG} className="Open6" alt="..." />
                </div>
                <Card.Subtitle className="mb-2 nameOverlaa">
                  <b className="bhoom">Take ownership</b>
                </Card.Subtitle>
                <Card.Text className="text-muted CTT nameOverlaaa col-md-9">
                  Our company takes ownership of our products and is proud to
                  provide industry-leading software that our customers can rely
                  on.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} className="mb-4 ">
            <Card className="cold  border-0 hover-effect">
              <Card.Body>
                <div className="box3">
                  <img src={IMAGES.MAN} className="Open6 ahan" alt="..." />
                </div>
                <Card.Subtitle className="mb-1 nameOverlaa">
                  <b className="bhoom">Move fast </b>
                </Card.Subtitle>
                <Card.Text className="text-muted CTT  col-md-9">
                  Our company takes ownership of our products and is proud to
                  provide industry-leading software that our customers can rely
                  on.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} className="mb-4 ">
            <Card className="cold  border-0 hover-effect">
              <Card.Body>
                <div className="box3">
                  <img src={IMAGES.CURRENT} className="Open6" alt="..." />
                </div>
                <Card.Subtitle className="mb-1 nameOverlaa">
                  <b className="bhoom">Be innovative </b>
                </Card.Subtitle>
                <Card.Text className="text-muted CTT  col-md-9">
                  "Innovate, improve, start again." This is our moto and we mean
                  it !
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className=" px-4">
        <div className="d-flex justify-content-center  ">
          <h1 className="WE-Do">
            <span>What</span> <span>We</span> <span>Do</span>
          </h1>
        </div>

        <div className="d-flex justify-content-center">
          <Card className="C-Bringg">
            <Card.Body>
              <p className="Content">
                Aniquest is a tool for creating content and stories within the
                anime for all fans who need help with the development of their
                texts, perfect for when you're on Reddit or Quora and have no
                ideas to post or get hit by the hated art block, in just seconds
                you will have at your disposal a story, post or blog of great
                quality and with interesting content that will give you a great
                visualization of your work
              </p>

              <p className="Content">
                In our company we are aware of how complicated it is to get
                quality content focused on anime and that is why we develop our
                AI with a large amount of information to help enhance the
                quality of publications, Aniquest has the ability to make
                original and interesting stories, develop fanfics without
                continuity errors, make summaries of interviews with Mangakas
                and in addition to creating, it also revises and corrects
                existing texts or continues half stories to give them a closure,
                the possibilities are incredibly big!
              </p>

              <p className="Content">
                Our artificial intelligence has been trained in the last four
                years with information from more than 200 million texts related
                to the world of anime, dialogues between characters,
                storytelling, interviews with mangaka and reviewing summaries
                and works related to all the most important anime our AI has
                almost a century of content in its database, with this
                information library, Aniquest can generate complete and quality
                texts, from stories, fanfics or publications for blogs or
                forums.
              </p>

              <p className="Content">
                Our artificial intelligence has been trained in the last four
                years with information from more than 200 million texts related
                to the world of anime, dialogues between characters,
                storytelling, interviews with mangaka and reviewing summaries
                and works related to all the most important anime our AI has
                almost a century of content in its database, with this
                information library, Aniquest can generate complete and quality
                texts, from stories, fanfics or publications for blogs or
                forums.
              </p>

              <p className="Content">
                Our artificial intelligence has been trained in the last four
                years with information from more than 200 million texts related
                to the world of anime, dialogues between characters,
                storytelling, interviews with mangaka and reviewing summaries
                and works related to all the most important anime our AI has
                almost a century of content in its database, with this
                information library, Aniquest can generate complete and quality
                texts, from stories, fanfics or publications for blogs or
                forums.
              </p>
            </Card.Body>
          </Card>
        </div>
      </Container>

      <Container className="px-4">
        <div className="d-flex flex-column align-items-center">
          <button type="button" className="btn btn-primary Free-Trail">
            Free Trial
          </button>
          <p className="text-center Valuess">Our Values</p>

          <span className="Companyy">
            Or company is all around the <br /> world, come and visit us
          </span>

          <span className="text-muted dolor">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Diam
            ut nisl tellus rhoncus, imperdiet cons.
          </span>
        </div>
        <Row className="mt-4">
          <Col lg={4}  className="mb-1 ">
            <Card className="cold2 border-0 hover-effect">
              <Card.Body>
              <div className="bx">
                  <img src={IMAGES.SHORT2} className="open5 d-lg-none d-md-none " alt="..." />
                </div>
                <Card.Subtitle className="mb-2 ">
                  {" "}
                  <b>Philadelphie </b> 

                </Card.Subtitle>
                <div>
                  <Card.Text className="text-muted CTTT">
                    <img src={IMAGES.LOCATION} className="" alt="..." />
                    <p className="nameOverlayyy">
                      {" "}
                      1800 JFK Blvd .Suite 300 19103
                    </p>
                  </Card.Text>
                  <Card.Text className="text-muted CTTT">
                  <img src={IMAGES.MESSAGE} className="melo d-md-none d-lg-none" alt="..." />
                    <p className="nameOverlayyyy"> sanfrancisco@tech.com</p>
                  </Card.Text> 
                  
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="mb-1">
            <Card className=" cold2 border-0 hover-effect">
              <Card.Body>
                <div className="bx">
                  <img src={IMAGES.MIAMI} className="open5" alt="..." />
                </div>
                <Card.Subtitle className="mb-2">
                  <b>Miami Floride</b>
                </Card.Subtitle>
                <div>
                  <Card.Text className="text-muted CTTT">
                    <img src={IMAGES.LOCATION} className=" " alt="..." />
                    <p className="nameOverlayyy">
                      {" "}
                      1800 JFK Blvd .Suite 300 19103
                    </p>
                  </Card.Text>
                  <Card.Text className="text-muted CTTT">
                    <img src={IMAGES.MESSAGE} className="melo" alt="..." />
                    <p className="nameOverlayyyy"> newyork@tech.com</p>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="mb-1 ">
            <Card className=" cold2 border-0 hover-effect">
              <Card.Body>
                <div className="bx">
                  <img src={IMAGES.LIVERPOOL} className="open5" alt="..." />
                </div>
                <Card.Subtitle className="mb-2">
                  <b>Liverpool </b>
                </Card.Subtitle>
                <div>
                  <Card.Text className="text-muted CTTT">
                    <img src={IMAGES.LOCATION} className="" alt="..." />
                    <p className="nameOverlayyy">
                      {" "}
                      1800 JFK Blvd .Suite 300 19103
                    </p>
                  </Card.Text>
                  <Card.Text className="text-muted CTTT">
                    <img src={IMAGES.MESSAGE} className=" melo" alt="..." />
                    <p className="nameOverlayyyy"> london@tech.com</p>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div class="">
          <img src={IMAGES.MAPS} class="bordered-image" alt="..." />
        </div>
      </Container>

  
    </>
  );
};

export default About;
