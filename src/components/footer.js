import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "./contactForm";
import ContactInfo from "./contactInfo";

export default class Footer extends Component {
  render() {
    return (
      <>
        <Container fluid className="h-100">
          <Row className="h-100">
            <Col
              className="d-flex align-items-center"
              xs={{ order: "last" }}
              md={{ order: 1, span: 6 }}
              style={{ backgroundColor: `var(--sw-dark)` }}
            >
              <ContactInfo />
            </Col>
            <Col
              md={{ order: 2, span: 6 }}
              style={{ backgroundColor: `var(--sw-gray)` }}
            >
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
