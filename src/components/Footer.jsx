import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img_1 from "../assets/Ifá Kíkọ́ Green Logo Text_prev_ui 2.png";
import img_2 from "../assets/facebook-fill.png";
import img_3 from "../assets/instagram-fill.png";
import img_4 from "../assets/twitter-fill.png";
import img_5 from "../assets/youtube-fill.png";
import img_6 from "../assets/send-plane-2-fill.png";
import img_7 from "../assets/copyright-line.png";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <div>
      <Container className="app-bg" fluid>
        <Container>
          <Row className=" py-5">
            <Col sm={12} md={4}>
              <img src={img_1} alt="ifa kiko" />
              <p className=" respect-1 text-white text-opacity-75 fw-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                aliquid, dicta incidunt id nam blanditiis placeat fuga facere
                optio perferendis!
              </p>
              <div className="d-flex ">
                <Nav.Link href="#">
                  {" "}
                  <img src={img_2} alt="ifa kiko" className="ms-2" />
                </Nav.Link>
                <div className="vr text-white ms-2"></div>
                <Nav.Link href="#">
                  {" "}
                  <img src={img_3} alt="ifa kiko" className="ms-2" />
                </Nav.Link>
                <div className="vr text-white ms-2"></div>
                <Nav.Link href="#">
                  {" "}
                  <img src={img_4} alt="ifa kiko" className="ms-2" />
                </Nav.Link>
                <div className="vr text-white mx-2"></div>
                <Nav.Link href="#">
                  {" "}
                  <img src={img_5} alt="ifa kiko" />
                </Nav.Link>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <p className="text-white ps-4 mt-5 mt-md-0 fs-5">QUICK LINK</p>
              <ul className="">
                <Nav.Link
                  href="#"
                  className="respect-1 text-white text-opacity-75 fw-bold"
                >
                  Terms
                </Nav.Link>
                <Nav.Link
                  href="#"
                  className="respect-1 text-white mt-2 text-opacity-75 fw-bold"
                >
                  Privacy
                </Nav.Link>
                <Nav.Link
                  href="#"
                  className="respect-1 text-white mt-2 text-opacity-75 fw-bold"
                >
                  SpiritualCommitment
                </Nav.Link>
                <Nav.Link
                  href="#"
                  className="respect-1 text-white mt-2 text-opacity-75 fw-bold"
                >
                  Contact
                </Nav.Link>
              </ul>
            </Col>
            <Col sm={12} md={4}>
              <p className="text-white mt-5 mt-md-0 fs-5">NEWS LETTER</p>
              <p className="respect-1 text-white text-opacity-75 fw-bold">
                Subscribe our newsletter to get our latest update & news
              </p>
              <div class="input-group mb-3 border-0">
                <input
                  type="email"
                  class="form-control border-0"
                  placeholder="Your Email Address"
                  aria-label="Recipient’s username"
                  aria-describedby="button-addon2"
                ></input>
                <button
                  class="btn btn-outline-secondary button-more border-0"
                  type="button"
                  id="button-addon2"
                >
                  <img src={img_6} alt="send image" />
                </button>
              </div>
            </Col>
            <hr  className="text-white mx-5 fw-bolder"/>
          </Row>
          <div className="d-flex pb-4 justify-content-center">
           <div> <img src={img_7} alt="copyright"  /></div>
            <p className="respect-1 ms-3 mt-1 text-white text-opacity-75 fw-bold">Copyright 2025 IFAKIKO. All Right Reserved.</p>

          </div>
          
        </Container>
      </Container>
    </div>
  );
};

export default Footer;
