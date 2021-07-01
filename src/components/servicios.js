import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import Box from "./box";
import * as serviceStyle from "./servicios.module.css";

export default class Servicios extends Component {
  render() {
    return (
      <Container className="mt-n1 d-flex flex-column justify-content-center">
        <h2 className={serviceStyle.subtitle + " display-3"}>
          Nos dedicamos a
        </h2>
        <h1 className={serviceStyle.title + " display-1"}>
          digitalizar marcas
        </h1>
        <h5 className={serviceStyle.paragraph + " col-xl-10"}>
          Brindamos un servicio integral de soluciones informáticas que, sumado
          al conocimiento a nuestra basta experiencia en gestión de negocios,
          nos permite brindarte la solución que tu negocio necesita para
          adaptarse a este nuevo mundo empresarial y crecer orgánicamente.
        </h5>

        <div className="d-flex">
          <Button className={serviceStyle.meetBtn} size="lg">
            <Link as="span" className="h3" to="/">
              Conocé nuestros servicios para
            </Link>
          </Button>
        </div>
        <div className="d-flex row justify-content-center">
          <div className="col-3">
            <Box title="desarrollo">
              <StaticImage
                src="../images/icons/desarrollo.svg"
                width={150}
                quality={70}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="icono de desarrollo"
                style={{ marginBottom: "1.45rem" }}
              />
            </Box>
          </div>
          <div className="col-3">
            <Box title="desarrollo">
              <StaticImage
                src="../images/icons/desarrollo.svg"
                width={150}
                quality={70}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="icono de desarrollo"
                style={{ marginBottom: "1.45rem" }}
              />
            </Box>
          </div>
          <div className="col-3">
            <Box title="desarrollo">
              <StaticImage
                src="../images/icons/desarrollo.svg"
                width={150}
                quality={70}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="icono de desarrollo"
                style={{ marginBottom: "1.45rem" }}
              />
            </Box>
          </div>
        </div>
      </Container>
    );
  }
}
