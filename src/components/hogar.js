import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import * as hogarStyle from "./hogar.module.css";

export default class Hogar extends Component {
  render() {
    return (
      <Container>
        <h2 className={hogarStyle.title + " display-3"}>Hogar</h2>
        <ul>
          <li className={hogarStyle.list}>Soporte/servicio técnico</li>
          <li className={hogarStyle.list}>Networking/redes</li>
          <li className={hogarStyle.list}>Cámaras</li>
          <li className={hogarStyle.list}>Domótica</li>
        </ul>
        <Link to="/hogar" className={hogarStyle.linkBtn}>
          <Button className={hogarStyle.meetBtn} variant="light" size="lg">
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
