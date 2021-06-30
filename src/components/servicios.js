import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class Servicios extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="display-3 fw-bold" style={{ lineHeight: `.5` }}>
          Nos dedicamos a
        </h2>
        <h1
          className="display-1 fw-bolder"
          style={{
            color: `var(--sw-green)`,
          }}
        >
          digitalizar marcas
        </h1>
        <h5 className="pt-4 col-xl-10">
          Brindamos un servicio integral de soluciones informáticas que, sumado
          al conocimiento a nuestra basta experiencia en gestión de negocios,
          nos permite brindarte la solución que tu negocio necesita para
          adaptarse a este nuevo mundo empresarial y crecer orgánicamente.
        </h5>

        <div className="d-flex mt-4">
          <Button
            className="border-0 mt-4 mx-auto"
            style={{ backgroundColor: "var(--sw-green)", borderRadius: "50px" }}
            size="lg"
          >
            <Link as="span" className="h3" to="/">
              Conocé nuestros servicios para
            </Link>
          </Button>
        </div>
        <StaticImage
          src="../images/gatsby-astronaut.png"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
    );
  }
}
