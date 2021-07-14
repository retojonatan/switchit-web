import { StaticImage } from "gatsby-plugin-image";
import React, { Component } from "react";
import { Container } from "react-bootstrap";
import * as partnerStyle from "./partners.module.css";

export default class Partners extends Component {
  render() {
    return (
      <Container>
        <h2 className={partnerStyle.title + " display-3"}>
          Partners {"&"} Tecnologías
        </h2>
        <div className="row">
          <div className="col">
            <StaticImage
              className={partnerStyle.logos}
              src="../images/partners/aws.png"
              objectFit="contain"
              quality={30}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="icono de partners"
            />
          </div>
          <div className="col">
            <StaticImage
              className={partnerStyle.logos}
              src="../images/partners/google-edu.png"
              objectFit="contain"
              quality={30}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="icono de partners"
            />
          </div>
          <div className="col">
            <StaticImage
              className={partnerStyle.logos}
              src="../images/partners/cisco-systems.png"
              objectFit="contain"
              height={400}
              quality={30}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="icono de partners"
            />
          </div>
          <div className="col">
            <StaticImage
              className={partnerStyle.logos}
              src="../images/partners/microsoft-azure.png"
              objectFit="contain"
              height={400}
              quality={30}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="icono de partners"
            />
          </div>
          <div className="col">
            <StaticImage
              className={partnerStyle.logos}
              src="../images/partners/proxmox.png"
              objectFit="contain"
              height={400}
              quality={30}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="icono de partners"
            />
          </div>
        </div>
      </Container>
    );
  }
}
