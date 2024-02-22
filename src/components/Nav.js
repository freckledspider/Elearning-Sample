import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navcomponent() {
  return (
    <div>
  <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="navContainer" style={{marginLeft: "0", marginRight: "0", backgroundColor: "#f5f5f5"}}>
        <Navbar.Brand href="/">Elearning</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/page1">Science</Nav.Link>
            <Nav.Link href="/page2">Language Arts</Nav.Link>
            <Nav.Link href="/page3">Math</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}
