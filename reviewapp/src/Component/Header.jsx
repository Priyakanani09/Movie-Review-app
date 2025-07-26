import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";
import "../App.css";

function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/search/${search}`);
      setSearch("");
    }
  };
  
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container style={{maxWidth:'1600px'}}>
        <Navbar.Brand as={Link} to="/" className="fs-4">
          Movie Review
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto fs-5 gap-5">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/tvshow">
              TV Shows
            </Nav.Link>
            <Nav.Link as={Link} to="/movie">
              Movies
            </Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/action">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sport">
                Sports
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/bollywood">
                Bollywood
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

          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search movies..."
              className="me-2 text-white white-placeholder hover-effect"
              style={{ backgroundColor: "#333" }}
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              variant="outline-light"
              type="submit"
              style={{ backgroundColor: "#555", borderColor: "#777" }}
            >
            <FaSearch />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;