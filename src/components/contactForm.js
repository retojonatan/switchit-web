import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

export default class contactForm extends Component {
  render() {
    const formSwitchit = {
      borderRadius: `20px`,
    };
    return (
      <div className="container py-5 h-100 d-flex flex-column justify-content-center align-items-center">
        <h3
          className="text-cyan text-center"
          style={{
            marginBottom: `20px`,
            fontWeight: `600`,
            color: `var(--sw-light-green)`,
          }}
        >
          ¿Cómo podemos ayudarte?
        </h3>
        <Form action="/contact-form" method="post" className="w-75 text-center">
          <Form.Control
            size="sm"
            style={formSwitchit}
            className="mt-2 pl-4"
            type="text"
            placeholder="Me gustaría..."
          />
          <Form.Control
            size="sm"
            style={formSwitchit}
            className="mt-2 pl-4"
            type="text"
            placeholder="Nombre"
          />
          <Form.Control
            size="sm"
            style={formSwitchit}
            className="mt-2 pl-4"
            type="email"
            placeholder="Email"
          />
          <Form.Control
            size="sm"
            style={formSwitchit}
            className="mt-2 pl-4"
            as="textarea"
            rows={3}
            placeholder="Mensaje"
          />
          <Button
            size="sm"
            style={formSwitchit}
            variant="dark"
            className="mt-4 px-3"
            type="submit"
          >
            Enviar
          </Button>
        </Form>
      </div>
    );
  }
}
