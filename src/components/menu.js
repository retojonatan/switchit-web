import { Link } from "gatsby";
import React, { Component } from "react";
import { Nav } from "react-bootstrap";

export default class Menu extends Component {
  render() {
    return (
      <>
        <Nav.Link as="li" className="py-0">
          <Link to="/">Home</Link>
        </Nav.Link>

        <Nav.Link as="li" className="py-0">
          <Link to="/about">Nosotros</Link>
        </Nav.Link>

        <Nav.Link as="li" className="py-0">
          <Link to="/services">Servicios</Link>
        </Nav.Link>

        <Nav.Link as="li" className="py-0">
          <Link to="/contact">Contacto</Link>
        </Nav.Link>
      </>
    );
  }
}
