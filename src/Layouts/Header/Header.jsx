import React, { useState, useEffect } from "react";
 import { NavLink } from "react-router-dom";
import IMAGES from "../../Asserts/Images";
import "../../Asserts/Style/Header.css"
import { Col, Container, Row } from "react-bootstrap";
// import Nav from "../../components/Nav/Nav";

const Header = () => {
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
      <div className="Amg">
      <nav className="navbar navbar-expand-lg">
          <div className="container px-3">
            <a className="navbar-brand btn-light" href="/">
              <img src={IMAGES.ANI} className="ani" alt="..." />
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
        <Container className=" px-4">
          <Row>
            <Col sm={6} md={8} lg={8}>
              <h1 className="T-1 my-3 d-flex justify-content-center ">
                Fast and Automatic Anime and Fantasy Writing
              </h1>
              <div>
                <span className="artificial">
                  Texts written by artificial intelligence lmmediate, easy and
                  with amazing results
                </span>
              </div>
              <div className="Mellow ">
                <button
                  type="button"
                  class="btn btn-primary btn1 my-5 border-0 "
                >
                  FREE TRIAL
                </button>
                <button
                  type="button"
                  class="btn btn-primary py-2 btn-5 border-0"
                >
                  SIGN UP WITH GOOGLE
                </button>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
              <div className="mx-1 px-4 ">
                <div className="form-check bol d-flex px-2 mx-2 align-items-start my-4">
                  <img src={IMAGES.CHECK} className=" my-1" alt="..." />
                  <label
                    className="form-check-label px-2 "
                    htmlFor="flexRadioDefault2"
                  >
                    <h5 className="taxt"> Develop Publications </h5>
                  </label>
                </div>
                <div className="form-check bol d-flex px-2 mx-2 align-items-start my-4">
                  <img src={IMAGES.CHECK} className=" my-1" alt="..." />
                  <label
                    className="form-check-label px-2"
                    htmlFor="flexRadioDefault2"
                  >
                    <h5 className="taxt"> Perfect for Fan fiction </h5>
                  </label>
                </div>
                <div className="form-check bol d-flex px-2  mx-2 align-items-start my-4">
                  <img src={IMAGES.CHECK} className="my-1" alt="..." />
                  <label
                    className="form-check-label px-2"
                    htmlFor="flexRadioDefault2"
                  >
                    <h5 className="taxt"> Write, Review and Fix Text </h5>
                  </label>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
