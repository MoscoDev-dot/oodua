import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import google_img from "../assets/toppng 2.png";
import app_img from "../assets/PngItem_1144050 3.png";
import image_2 from "../assets/Group 1000002231.png";
import IfaButton from "../components/IfaButton";
import AboutIfa from "./AboutIfa";
import ExploreVerses from "./ExploreVerses";
import Features from "./Features";
import Preserve from "../components/Preserve";
import Appusage from "../components/Appusage";
import Download from "../components/Download";
import Workingprocess from "../components/Workingprocess";
import Footer from "../components/Footer";
import Nav from "react-bootstrap/Nav";

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={6} className="mb-4 mt-5 mt-md-0 mb-md-0">
            <div className="both-borders">
              <div className="p-2 p-md-3 border-first mt-0 mt-md-4"></div>
              <div className="border-2nd bg-white p-2 p-md-4">
                <p className="ifa-text fw-bolder fs-5 fs-md-3 text-center pt-0 pt-lg-5 text-md-start">
                  JOIN THOUSANDS LEARNING <br /> IFA THROUGH ANCENSTRAL VOICE
                </p>
                <p className="text-secondary text-center text-md-start">
                  Available on iOS and Android Free to join, pay-per-verse
                  model. Built for the spiritually curious, the committed
                  learner, and the global Yoruba community
                </p>
                <p className="ifa-text fw-bolder text-center text-md-start">
                  DOWNLOAD APP NOW
                </p>
                <div className="d-flex justify-content-center justify-content-md-start gap-3">
                  <Nav.Link href="#">
                    <img
                      src={google_img}
                      alt=""
                      className="img-fluid img-small"
                      style={{ maxWidth: 140 }}
                    />
                  </Nav.Link>
                  <Nav.Link href="#">
                    <img
                      src={app_img}
                      alt=""
                      className="img-fluid img-small"
                      style={{ maxWidth: 140 }}
                    />
                  </Nav.Link>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={12} lg={6} className="text-center text-md-end">
            <img
              src={image_2}
              alt="image_2"
              className=" ms-0 ms-md-3 ms-lg-5 image_2"
              
            />
          </Col>
        </Row>
      </Container>
      <IfaButton />
      <AboutIfa />
      <ExploreVerses />
      <Features />
      <Preserve />
      <Appusage />
      <Download />
      <Workingprocess />
      <Footer />
    </div>
  );
};

export default Home;
