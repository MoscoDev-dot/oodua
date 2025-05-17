import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import google_img from "../assets/toppng 2.png";
import app_img from "../assets/PngItem_1144050 3.png";
import download from "../assets/download-2-fill.png";
import download_1 from "../assets/thumb-up-fill.png";
import download_2 from "../assets/star-fill.png";
import download_3 from "../assets/Frame 1000002700.png";
import Nav from "react-bootstrap/Nav";

const Download = () => {
  return (
    <div>
      <Container>
        <Row className="py-5">
          <Col sm={12} md={6}>
            <div>
              <p className="text-dark fs-5 fw-bolder">DOWNLOAD APP NOW</p>
              <p className="respect-1 text-dark text-opacity-75 fw-bold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam aut possimus non itaque esse laudantium nesciunt
                delectus, asperiores consequatur est ipsa recusandae incidunt
                eligendi, accusamus saepe voluptatibus qui, temporibus
                reprehenderit perspiciatis! Est cum sed quasi ratione, quas
                eligendi ipsam quisquam.
              </p>
              <div className="d-flex">
                  <Nav.Link href="#">
                    {" "}
                    <img src={google_img} alt="" className="img-fluid" />
                  </Nav.Link>

                  <Nav.Link href="#">
                    <img src={app_img} alt="" className="img-fluid" />
                  </Nav.Link>
                </div>
              <div className="d-flex my-4 mx-1">
                <div className="text-center border-0 me-2 me-md-3 button-more p-2 rounded-3 text-white">
                  <img src={download} alt="" className="" />
                  <p>56000</p>
                  <p>DOWNLOAD</p>
                </div>
                <div className="text-center border me-2 me-md-3 button-more py-2 px-4 rounded-3 text-white">
                  <img src={download_1} alt="" className="" />
                  <p>29862</p>
                  <p>LIKE</p>
                </div>
                <div className="text-center border button-more p-2 rounded-3 text-white">
                  <img src={download_2} alt="" className="" />
                  <p>1500</p>
                  <p>5 STAR RATING</p>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <img src={download_3} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Download;
