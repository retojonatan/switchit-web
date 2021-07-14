import { StaticImage } from "gatsby-plugin-image";
import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import * as nosotrosStyle from "./nosotros.module.css";

export default class Nosotros extends Component {
  render() {
    const settings = {
      dots: true,
      arrow: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Container>
        <h2 className={nosotrosStyle.title + " display-3"}>Nosotros</h2>
        <Slider {...settings}>
          <div>
            <div className="row py-3 my-4">
              <div className="col">
                <StaticImage
                  className={nosotrosStyle.circle}
                  src="../images/switchers/MatiE.png"
                  objectFit="cover"
                  quality={30}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Foto de Matias Eckhardt"
                />
                <h5 className={nosotrosStyle.names}>Matias Eckhardt</h5>
                <h5 className={nosotrosStyle.description}>CEO {"&"} Founder</h5>
              </div>
              <div className="col">
                <StaticImage
                  className={nosotrosStyle.circle}
                  src="../images/switchers/MatiR.png"
                  objectFit="cover"
                  quality={30}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Foto de Matias Roces"
                />
                <h5 className={nosotrosStyle.names}>Matias Roces</h5>
                <h5 className={nosotrosStyle.description}>
                  Management {"&"} Co-Founder
                </h5>
              </div>
              <div className="col">
                <StaticImage
                  className={nosotrosStyle.circle}
                  src="../images/switchers/JonaR.png"
                  objectFit="cover"
                  quality={30}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Foto de Jonatan Reto"
                />
                <h5 className={nosotrosStyle.names}>Jonatan Reto</h5>
                <h5 className={nosotrosStyle.description}>
                  Software Developer
                </h5>
              </div>
              <div className="col">
                <StaticImage
                  className={nosotrosStyle.circle}
                  src="../images/switchers/DemianC.png"
                  objectFit="cover"
                  quality={30}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Foto de Demian Czumakiewicz"
                />
                <h5 className={nosotrosStyle.names}>Demian Czumakiewicz</h5>
                <h5 className={nosotrosStyle.description}>
                  Software Developer
                </h5>
              </div>
            </div>
          </div>
          <div>
            <div className="row py-3 my-4">
              <div className="col">
                <StaticImage
                  className={nosotrosStyle.circle}
                  src="../images/switchers/FacuT.png"
                  objectFit="cover"
                  quality={30}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Foto de Facundo Tasillo"
                />
                <h5 className={nosotrosStyle.names}>Facundo Tasillo</h5>
                <h5 className={nosotrosStyle.description}>Tech Support</h5>
              </div>
              <div className="col">
                <StaticImage
                  className={nosotrosStyle.circle}
                  src="../images/switchers/KevinS.png"
                  objectFit="cover"
                  quality={30}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Foto de Kevin Schmidt"
                />
                <h5 className={nosotrosStyle.names}>Kevin Schmidt</h5>
                <h5 className={nosotrosStyle.description}>Tech Support</h5>
              </div>
              <div className="col">
                <StaticImage
                  className={nosotrosStyle.circle}
                  src="../images/switchers/GuadaV.png"
                  objectFit="cover"
                  quality={30}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Foto de Guadalupe Veloso"
                />
                <h5 className={nosotrosStyle.names}>Guadalupe Veloso</h5>
                <h5 className={nosotrosStyle.description}>
                  Branding {"&"} Social Media
                </h5>
              </div>
              <div className="col">
                <StaticImage
                  className={nosotrosStyle.circle}
                  src="../images/switchers/CamiS.png"
                  objectFit="cover"
                  quality={30}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Foto de Camila Scianca"
                />
                <h5 className={nosotrosStyle.names}>Camila Scianca</h5>
                <h5 className={nosotrosStyle.description}>
                  Branding {"&"} Social Media
                </h5>
              </div>
            </div>
          </div>
          <div>
            <div className="row py-3 my-4">
              <div className="col">
                <StaticImage
                  className={nosotrosStyle.circle}
                  src="../images/switchers/SophiaG.png"
                  objectFit="cover"
                  quality={30}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Foto de Sophia Coser"
                />
                <h5 className={nosotrosStyle.names}>Sophia Coser</h5>
                <h5 className={nosotrosStyle.description}>
                  Branding {"&"} Social Media
                </h5>
              </div>
              <div className="col">
                <StaticImage
                  className={nosotrosStyle.circle}
                  src="../images/switchers/PatoN.png"
                  objectFit="cover"
                  quality={30}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Foto de Patricio Natale"
                />
                <h5 className={nosotrosStyle.names}>Patricio Natale</h5>
                <h5 className={nosotrosStyle.description}>
                  PM {"&"} Digital Marketing
                </h5>
              </div>
              <div className="col">
                <StaticImage
                  className={nosotrosStyle.circle}
                  src="../images/switchers/PatoN.png"
                  objectFit="cover"
                  quality={30}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Foto de Patricio Natale"
                />
                <h5 className={nosotrosStyle.names}>Patricio Natale</h5>
                <h5 className={nosotrosStyle.description}>
                  PM {"&"} Digital Marketing
                </h5>
              </div>
              <div className="col">
                <StaticImage
                  className={nosotrosStyle.circle}
                  src="../images/switchers/PatoN.png"
                  objectFit="cover"
                  quality={30}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Foto de Patricio Natale"
                />
                <h5 className={nosotrosStyle.names}>Patricio Natale</h5>
                <h5 className={nosotrosStyle.description}>
                  PM {"&"} Digital Marketing
                </h5>
              </div>
            </div>
          </div>
        </Slider>
      </Container>
    );
  }
}
