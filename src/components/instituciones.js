import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import * as institucionesStyle from "./instituciones.module.css";

export default class InstitucionesEducativas extends Component {
  render() {
    return (
      <Container>
        <h2 className={institucionesStyle.title + " display-3"}>
          Instituciones <br /> Educativas
        </h2>
        <ul className={institucionesStyle.unorderedList}>
          <li className={institucionesStyle.list}>Soporte/servicio técnico</li>
          <li className={institucionesStyle.list}>Networking/redes</li>
          <li className={institucionesStyle.list}>Cámaras</li>
          <li className={institucionesStyle.list}>Domótica</li>
          <li className={institucionesStyle.list}>Admin de servidores</li>
          <li className={institucionesStyle.list}>Consultoría</li>
          <li className={institucionesStyle.list}>Admin de usuarios</li>
          <li className={institucionesStyle.list}>Hosting y cloud server</li>
          <li className={institucionesStyle.list}>Gestión de redes</li>
          <li className={institucionesStyle.list}>Marketing digital</li>
          <li className={institucionesStyle.list}>Management</li>
          <li className={institucionesStyle.list}>Desarrolo de soft/web</li>
          <li className={institucionesStyle.list}>Diseño y branding</li>
        </ul>
        <Link
          to="/instituciones-educativas"
          className={institucionesStyle.linkBtn}
        >
          <Button
            className={institucionesStyle.meetBtn}
            variant="light"
            size="lg"
          >
            Conocé mas{" "}
            <FontAwesomeIcon
              icon={faLongArrowAltRight}
              transform="right-6 down-1"
            />
          </Button>
        </Link>
      </Container>
    );
  }
}
