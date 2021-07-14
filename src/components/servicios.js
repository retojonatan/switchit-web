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
        <h2 className={serviceStyle.subtitle + " display-4"}>
          Nos dedicamos a
        </h2>
        <h1 className={serviceStyle.title + " display-2"}>
          digitalizar marcas
        </h1>
        <h5 className={serviceStyle.paragraph}>
          Brindamos un servicio integral de soluciones informáticas que, sumado
          al conocimiento a nuestra basta experiencia en gestión de negocios,
          nos permite brindarte la solución que tu negocio necesita para
          adaptarse a este nuevo mundo empresarial y crecer orgánicamente.
        </h5>

        <div className="d-flex mb-3">
          <Button className={serviceStyle.meetBtn} size="lg">
            <Link as="span" className="h3" to="/">
              Conocé nuestros servicios para
            </Link>
          </Button>
        </div>
        <div className="row">
          <div className="col-4 d-flex justify-content-evenly">
            <Link as="div" to="/hogares">
              <Box title="Hogares">
                <StaticImage
                  src="../images/icons/hogares.png"
                  objectFit="contain"
                  quality={30}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="icono de hogar"
                  style={{ marginBottom: "1rem" }}
                />
              </Box>
            </Link>
          </div>
          <div className="col-4 d-flex justify-content-evenly">
            <Link as="div" to="/instituciones-educativas">
              <Box title="Instituciones Educativas">
                <StaticImage
                  src="../images/icons/instituciones-educativas.png"
                  objectFit="contain"
                  quality={30}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="icono de escuelas"
                  style={{ marginBottom: "1rem" }}
                />
              </Box>
            </Link>
          </div>
          <div className="col-4 d-flex justify-content-evenly">
            <Link as="div" to="/empresas">
              <Box title="Empresas">
                <StaticImage
                  src="../images/icons/empresas.png"
                  objectFit="contain"
                  quality={30}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="icono de empresa"
                  style={{ marginBottom: "1rem" }}
                />
              </Box>
            </Link>
          </div>
        </div>
      </Container>
    );
  }
}
