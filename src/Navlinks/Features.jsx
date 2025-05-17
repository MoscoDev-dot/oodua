import React from "react";
import vector from "../assets/Vector (1).png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import broswer from "../assets/browser.png";
import ant from "../assets/ant-design_audio-filled.png";
import eye_scanner from "../assets/eye-scanner 1.png";
import tele_m from "../assets/male-telemarketer.png";
import vector_img from "../assets/vector.png";

const Features = () => {
  return (
    <div className="app-bg py-5">
      <p className="text-center text-white fw-bolder fs-3">APP FEATURES</p>
      <div className="text-center text-white">
        <img src={vector} alt="vector" />
        <p>AUDIO-VISUAL VERSE LEARNING</p>
        <p className="respect-1 text-white text-opacity-75 fw-bold">
          Engage with authentic Ifá verses through high-quality video and audio
          recordings <br /> from verified Babaláwo (priests).
        </p>
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col sm={12} md={12} lg={4} className="pt-0 pt-md-4">
            <div className=" inter-verse mt-3 mt-md-5">
              <img src={broswer} alt="" />
              <p className="text-light fw-semibold">
                INTERACTIVE VERSE LIBRARY
              </p>
              <p className="respect-1 text-white text-opacity-75 fw-bold">
                Browse a categorized verse archive, organized by Odu, theme, or
                spiritual purpose.
              </p>
            </div>
            <div className=" inter-verse-1 pt-0 pt-md-5">
              <img src={vector_img} alt="" />
              <p className="text-light fw-semibold">
                PRIEST PROFILE AND COMMUNITY HUB
              </p>
              <p className="respect-1 text-white text-opacity-75 fw-bold">
                Users can follow verified Babaláwo, view their teachings, and
                ask spiritually questions.
              </p>
            </div>
          </Col>
          <Col sm={12} md={12} lg={4} className=" rounded-5 mx-0 mx-md-3 app-blank"></Col>
          <Col sm={12} md={12} lg={4} className="pt-3 pt-md-4">
            <div className=" inter-verse-2 mt-3 mt-md-5">
              <img src={ant} alt="" />
              <p className="text-light fw-semibold">
                YORUBA PRONOUNCIATION COACH
              </p>
              <p className="respect-1 text-white text-opacity-75 fw-bold">
                Practice chanting with built-in AI that guides you in mastering
                tone and delivery—perfect for beginners.
              </p>
            </div>
            <div className=" inter-verse-3 pt-3 pt-md-5">
              <img src={eye_scanner} alt="" />
              <p className="text-light fw-semibold">
                LINEAGE TRACING & ÌBA SYSTEM
              </p>
              <p className="respect-1 text-white text-opacity-75 fw-bold">
                Each verse is spiritually anchored. Users can view the
                originating lineage of verses.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="text-center mt-3 mt-md-5 text-white">
        <img src={tele_m} alt="vector" />
        <p>SECURE VERSE MARKETPLACE</p>
        <p className="respect-1 text-white text-opacity-75 fw-bold">
          Buy access to exclusive verses, teachings, or ceremonial materials <br /> from verified content creators.
        </p>
      </div>
    </div>
  );
};

export default Features;
