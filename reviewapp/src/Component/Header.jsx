import React, { useState } from "react";
import { Link  } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../App.css";

function Header() {

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container style={{maxWidth:'1400px'}}>
        <Navbar.Brand as={Link} to="/" className="fs-4">
          Movie Review
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs-5 gap-5">
            <Nav.Link as={Link} to="/" className="text">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/tvshow" className="text">
              TV Shows
            </Nav.Link>
            <Nav.Link as={Link} to="/movie" className="text">
              Movies
            </Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown" className="text">
              <NavDropdown.Item as={Link} to="/action">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sport">
                Sports
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/horror">
                Horror
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/drama">
                Dramas
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/comedies">
                Comedies
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;