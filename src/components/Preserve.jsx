import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import illustration from "../assets/Illustration.png";

const Preserve = () => {
  return (
    <div>
      <Container>
        <Row className="my-5 mx-2">
          <Col sm={12} md={6} className="mt-5">
            <p className="fw-bold fs-4">Preserve, Learn and Honour the <br /> Legacy of Ifa</p>
            <p className="respect-1">
              IFA Kiko is more than an app — it's a spiritual movement for
              digital preservation. Contact us today to learn more about what we
              do .
            </p>
            <Button className="button-more px-3 mb-4 border-0">
              Join as Priest Contributor
            </Button>
          </Col>
          <Col sm={12} md={6} className="">
            <img src={illustration} alt="" className="ifa-oo ms-0 ms-md-5" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Preserve;
