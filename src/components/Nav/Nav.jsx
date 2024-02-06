import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import IMAGES from "../../Asserts/Images";
import AUDIO from "../../Asserts/Audio";
import "../../Asserts/Style/Header.css";
import "../../Asserts/Style/Mian.css";
import { Container } from "react-bootstrap";
// import { Col, Container, Row } from "react-bootstrap";

const Mian = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const [activeLink, setActiveLink] = useState("solutions");
   
  const [audio] = useState(new Audio(AUDIO.THANKYOU));

  const Thankyou = () => {
    audio.play();
  };


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
      } else if (aboutSection && scrollPosition >= logoutSection.offsetTop) {
        setActiveLink("logout");
      } else if (priceSection && scrollPosition >= priceSection.offsetTop) {
        setActiveLink("price");
      } 
      else if (priceSection && scrollPosition >= blogSection.offsetTop) {
        setActiveLink("blog");
    }
    }
      

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeLink]);

  return (
    <>
      <Container>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <div className="row">
    <div className="col">
      <a className="navbar-brand btn-light" href="/">
        <img src={IMAGES.ANI2} className="ano" alt="..." />
      </a>
    </div>
    <div className="col">
      <div className="nav-but d-lg-none">
        <button type="button" className="btn btn-primary upgrade ">
          Upgrade
        </button>
      </div>
    </div>
    <div className="col">
      <div className="nav-but d-lg-none d-sm-none" onClick={handleNavToggle}>
        <img src={IMAGES.RECBOX} className=" Recbox" alt="..." />
      </div>
    </div>
  </div>
         
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
                    className="nav-linkk"
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
                  <NavLink className="nav-linkk" to="/price" id="price-section">
                    Price
                  </NavLink>
                </li>
                <li
                  className={`nav-item ${
                    activeLink === "blog" ? "active" : ""
                  }`}
                  onClick={() => setActiveLink("blog")}
                >
                  <NavLink className="nav-linkk" to="/blog" id="blog-section">
                    Blog
                  </NavLink>
                </li>

                <li
                  className={`nav-item ${
                    activeLink === "about" ? "active" : ""
                  }`}
                  onClick={() => setActiveLink("about")}
                >
                  <NavLink className="nav-linkk" to="/about" id="about-section">
                    About
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-but ">
                  <button type="button" className="btn btn-primary btn8">
                    Upgrade
                  </button>
                </li>
                <li
              className={` nav-butt ${
                activeLink === "logout" ? "active" : ""
              }`}
              onClick={() => {
                setActiveLink("logout");
                Thankyou(); 
              }}
            >
              <NavLink className="nav-linkk" to="/logout" id="logout-section">
                Logout
              </NavLink>
            </li>
                <li className="nav-but px-3">
                <img src={IMAGES.RECBOX} className=" my-2" alt="..." />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </>
  );
};

export default Mian;
