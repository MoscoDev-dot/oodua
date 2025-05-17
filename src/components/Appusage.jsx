import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import app_usage from "../assets/Vector 3371.png";
import first_img from "../assets/Group 1000001367.png";
import Second_img from "../assets/Group 1000001604.png";
import third_img from "../assets/Group 471.png";
import vector_2 from "../assets/Vector (2).png";
import vector_3 from "../assets/Screenshot 2025-05-16 084526.png";
import vector_4 from "../assets/Vector 1.png";

const Appusage = () => {
  return (
    <div>
      <Container fluid className="app-bg pb-5">
        <div className="text-center mt-5">
          <p className="text-white fw-bold fs-3">
            HOW TO USE THE APP PERFECTLY
          </p>
          <p className="respect-1 text-white text-opacity-75 fw-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            praesentium <br /> placeat possimus dignissimos provident non.
          </p>
        </div>
        <Container>
          <div className="d-flex justify-content-center">
            <img src={vector_3} alt="vector" className="img-fluid" />
          </div>
          <div className="d-flex justify-content-center">
            <div className="me-0 me-md-5">
                <p className="text-white fw-semibold">Create Account</p>
              <p className="respect-1 text-white text-opacity-75 fw-bold">
                Enter your information <br />
                ensure your details <br />
                safe and more secure
              </p>
            </div>
            <div className="me-0 me-md-5 ms-2 ms-md-5">
                <p className="text-white  fw-semibold">Enter Information</p>
              <p className="respect-1 text-white text-opacity-75 fw-bold">
                Enter your information <br />
                ensure your details <br />
                safe and more secure
              </p>
            </div>
            <div className="ms-2 ms-md-5">
                <p className="text-white  fw-semibold">Add Payment</p>
              <p className="respect-1 text-white text-opacity-75 fw-bold">
                Enter your information <br />
                ensure your details <br />
                safe and more secure
              </p>
            </div>
            
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Appusage;
