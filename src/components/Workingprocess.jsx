import React from "react";
import Container from "react-bootstrap/Container";
import IfaDropdown from "./IfaDropdown";
import CloseIfaDropdown from "./CloseIfaDropdown";

const Workingprocess = () => {
  return (
    <div>
      <Container className="py-5">
        <div className="d-flex flex-column process-p flex-md-row">
            <div className="text-black button-more-1 border rounded-3 p-2 fw-semibold fs-5">Our Working Process</div>
            <div className="respect ms-4"> Your questions answered with clarity, <br /> care, and  cultural respect.</div>
        </div>
       

        <IfaDropdown  title={"01"}
          title_1={"Is the knowledge on IFA Kiko open to everyone?"}
          children={
            "No. Access is granted through ethical permissions from knowledge custodians. While the platform supports learning, it respects sacred boundaries. Some content is restricted to initiated users, and users are expected to engage with reverence and responsibility."
          } />
        <CloseIfaDropdown
          title={"02"}
          title_1={"Is the knowledge on IFA Kiko open to everyone?"}
          children={
            "No. Access is granted through ethical permissions from knowledge custodians. While the platform supports learning, it respects sacred boundaries. Some content is restricted to initiated users, and users are expected to engage with reverence and responsibility."
          }
        />
        <CloseIfaDropdown
          title={"03"}
          title_1={"Is the knowledge on IFA Kiko open to everyone?"}
          children={
            "No. Access is granted through ethical permissions from knowledge custodians. While the platform supports learning, it respects sacred boundaries. Some content is restricted to initiated users, and users are expected to engage with reverence and responsibility."
          }
        />
        <CloseIfaDropdown
          title={"04"}
          title_1={"Is the knowledge on IFA Kiko open to everyone?"}
          children={
            "No. Access is granted through ethical permissions from knowledge custodians. While the platform supports learning, it respects sacred boundaries. Some content is restricted to initiated users, and users are expected to engage with reverence and responsibility."
          }
        />
        <CloseIfaDropdown
          title={"05"}
          title_1={"Is the knowledge on IFA Kiko open to everyone?"}
          children={
            "No. Access is granted through ethical permissions from knowledge custodians. While the platform supports learning, it respects sacred boundaries. Some content is restricted to initiated users, and users are expected to engage with reverence and responsibility."
          }
        />
        <CloseIfaDropdown
          title={"06"}
          title_1={"Is the knowledge on IFA Kiko open to everyone?"}
          children={
            "No. Access is granted through ethical permissions from knowledge custodians. While the platform supports learning, it respects sacred boundaries. Some content is restricted to initiated users, and users are expected to engage with reverence and responsibility."
          }
        />
      </Container>
    </div>
  );
};

export default Workingprocess;
