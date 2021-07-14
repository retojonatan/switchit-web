import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import * as empresasStyle from "./empresas.module.css";

export default class Empresas extends Component {
  render() {
    return (
      <Container>
        <h2 className={empresasStyle.title + " display-3"}>Empresas</h2>
        <ul className={empresasStyle.unorderedList}>
          <li className={empresasStyle.list}>Soporte/servicio técnico</li>
          <li className={empresasStyle.list}>Networking/redes</li>
          <li className={empresasStyle.list}>Cámaras</li>
          <li className={empresasStyle.list}>Domótica</li>
          <li className={empresasStyle.list}>Admin de servidores</li>
          <li className={empresasStyle.list}>Consultoría</li>
          <li className={empresasStyle.list}>Admin de usuarios</li>
          <li className={empresasStyle.list}>Hosting y cloud server</li>
          <li className={empresasStyle.list}>Gestión de redes</li>
          <li className={empresasStyle.list}>Marketing digital</li>
          <li className={empresasStyle.list}>Management</li>
          <li className={empresasStyle.list}>Desarrolo de soft/web</li>
          <li className={empresasStyle.list}>Diseño y branding</li>
        </ul>
        <Link to="/empresas" className={empresasStyle.linkBtn}>
          <Button className={empresasStyle.meetBtn} variant="light" size="lg">
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
