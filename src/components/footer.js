import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "./contactForm";
import ContactInfo from "./contactInfo";

export default class Footer extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col sm md={6} style={{ backgroundColor: `var(--sw-dark)` }}>
              <ContactInfo />
            </Col>
            <Col sm md={6} style={{ backgroundColor: `var(--sw-gray)` }}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
