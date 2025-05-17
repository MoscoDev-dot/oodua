import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import about_pic from '../assets/Screenshot 2025-05-15 114448.png'
import Nav from "react-bootstrap/Nav";

const AboutIfa = () => {
  return (
    <div>
      <Container fluid>
        <Row className="mx-2 mx-md-5">
          <Col md={6} sm={12}>
            <p className="text-black fs-4 mt-3 fw-bolder">ABOUT Ifá Kiko</p>
            <p className="text-dark">
              IFA Kiko is a sacred digital space created to preserve and teach
              the oral traditions of Ifa and Orisa in an ethical, secure, and
              lineage-respectful manner. Rooted in Yoruba spirituality and
              guided by revered elders, the platform is not just an app—it is a
              spiritual mission.
            </p>
           <Nav.Link href="#"> <Button className="button-s ps-3 pe-5 mb-4 border-0">Explore More</Button></Nav.Link>
          </Col>
          <Col md={6} sm={12}>
            <img src={about_pic} alt="about-pic" className="img-fluid about-pic ms-0 ms-md-5"  />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutIfa;
