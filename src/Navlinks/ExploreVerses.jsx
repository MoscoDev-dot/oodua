import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CheckBox from "../assets/checkbox-circle-fill.png";

const ExploreVerses = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5 pb-5 mx-2">
          <Col md={6} sm={12} className="mb-3">
            <div className="border-0 rounded-3 p-2 shadow m-1 d-flex">
              <div>
                <img src={CheckBox} alt="checkbox" />
              </div>
              <div className="ms-3 respect">
                <p className=" fw-semibold">
                  🧙🏾‍♂️ RESPECT FOR LINEAGE <br />
                  <span className="respect-1 text-secondary">
                    IFA Kiko was co-created with input from traditional priests,
                    lineage heads, and spiritual leaders—not just tech experts.
                    Every verse, feature, and function is spiritually validated
                    before implementation.
                  </span>
                  
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} sm={12}></Col>
          <Col md={6} sm={12}></Col>
          <Col md={6} sm={12} className="mb-3">
            <div className="border-0 rounded-3 p-2 shadow m-1 d-flex">
              <div>
                <img src={CheckBox} alt="checkbox" />
              </div>
              <div className="ms-3 respect">
                <p className=" fw-semibold">
                  🧠 A LIVING, EVOLVING LIBRARY <br />
                  <span className="respect-1 text-secondary">
                    IFA Kiko is not a static archive or data bank—it’s a sacred
                    living space that grows through spiritual contribution. New
                    verses are added by recognized priests as part of an
                    expanding oral tradition.
                  </span>
                 
                </p>
              </div>
            </div>
          </Col>
          <Col md={3} sm={12}></Col>
          <Col md={6} sm={12} className="mb-3">
            <div className="border-0 rounded-3 p-2 shadow m-1 d-flex">
              <div>
                <img src={CheckBox} alt="checkbox" />
              </div>
              <div className="ms-3 respect">
                <p className=" fw-semibold">
                  🌿 LINEAGE IS IDENTITY <br />
                  <span className="respect-1 text-secondary">
                    In Ifa tradition, the source of a verse is just as important
                    as the verse itself. Our platform preserves this identity by
                    linking each piece of content to the priest, their teacher,
                    and their ancestral root.
                  </span>
                  
                </p>
              </div>
            </div>
          </Col>
          <Col md={3} sm={12}></Col>
        </Row>
      </Container>
    </div>
  )
}

export default ExploreVerses
