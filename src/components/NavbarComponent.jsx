import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link
            to={"/"}
            style={{
              margin: "0 10px",
            }}
          >
            Home
          </Link>
          <Link
            to={"/About"}
            style={{
              margin: "0 10px",
            }}
          >
            About
          </Link>
          <Link
            to={"/Contact"}
            style={{
              margin: "0 10px",
            }}
          >
            Contact
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
