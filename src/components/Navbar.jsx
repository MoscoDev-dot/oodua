import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ifa_img from "../assets/Ifá Kíkọ́ Green Logo Text_prev_ui 2.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaEarthAfrica } from "react-icons/fa6";


function CollapsibleExample() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-white  px-2 mt-0 mt-md-3 px-md-5">
      <Container  fluid>
        <Navbar.Brand href="/home">
          {" "}
          <img src={ifa_img} alt="ifa image" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-0 ms-lg-5">
            <Nav.Link href="#" className="text-black">Home</Nav.Link>
            <Nav.Link href="#" className="text-black">About ifa</Nav.Link>
            <Nav.Link href="#" className="text-black">Explore Verses</Nav.Link>
            <Nav.Link href="#"className="text-black">Features</Nav.Link>
            <Nav.Link href="#" className="text-black">Pricing</Nav.Link>
            <Nav.Link href="#" className="text-black fw-semibold ms-0 ms-lg-5">Login</Nav.Link>
          </Nav>
          <Nav>
            <div>
              <Nav.Link href="#">
              <Button variant="outline-success" className="me-3 ">Sign up</Button>
            </Nav.Link>
            </div>
            <div className="mt-0 d-flex mt-md-1 px-1 eng-border-1 border rounded-3 text-success">
              <FaEarthAfrica className="mt-2 fs-3" />
              <Form.Select
                className="text-success border-0 eng-border "
                size="sm"
              >
                <option className="text-success ">ENG</option>
              </Form.Select>
            </div>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    
    </>
    







  );
}

export default CollapsibleExample;
