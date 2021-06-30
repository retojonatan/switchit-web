import React, { Component } from "react";

export default class Hero extends Component {
  render() {
    return (
      <div className="container-fluid fw-bold text-center text-white text-wrap">
        <h1
          className="fst-italic"
          style={{ fontSize: `80px`, fontWeight: `600` }}
        >
          Soluciones
        </h1>
        <p
          style={{
            fontSize: `200px`,
            lineHeight: `.75`,
            fontWeight: `800`,
          }}
        >
          360
        </p>
      </div>
    );
  }
}
