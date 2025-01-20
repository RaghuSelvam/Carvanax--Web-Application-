import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const NavbarSection = () => {
  return (
    <Navbar
      expand="lg"
      className="custom-navbar"
      style={{ height: "2cm", backgroundColor: "transparent" }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Auto Dcar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 gap-2"
            style={{ maxHeight: "100px", color: "black" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/cars">
              Listing Cars
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About us
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex align-items-center gap-2">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            <AccountCircleIcon /> Login/Register
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
