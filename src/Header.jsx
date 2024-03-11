// Header.jsx
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Header() {
  // Assuming you have a variable for Firstname
  const firstname = "Christine";

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="justify-content-center"> {/* Change bg="light" to bg="dark" to make navbar dark, and add variant="dark" */}
      <Navbar.Brand style={{ marginLeft: '100px' }}>{firstname}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
