import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React, { Component } from "react";

export default class contactInfo extends Component {
  render() {
    const styleRedes = {
      borderTopLeftRadius: `30px`,
      borderTopRightRadius: `30px`,
      margin: `0 .25rem`,
      display: `inline-flex`,
      verticalAlign: `bottom`,
    };
    const styleLinea = {
      margin: `.75rem -.375rem`,
      width: `250px`,
      backgroundColor: `var(--sw-gray)`,
      height: `1px`,
      display: `block`,
    };

    return (
      <div className="container pt-5 px-5 d-flex flex-column align-items-center">
        <div>
          <h3
            className="text-white"
            style={{
              fontWeight: `600`,
            }}
          >
            Encontranos,
          </h3>
          <h4
            className="text-cyan"
            style={{
              fontWeight: `600`,
              color: `var(--sw-light-green)`,
            }}
          >
            tenemos soluciones.
          </h4>
          <div className="py-4">
            <Link to="mailto:info@switchit.com.ar">
              <h5>
                info@<b>switchit</b>.com.ar
              </h5>
            </Link>
            <span style={styleLinea}></span>
            <Link to="tel:1167131996">
              <h5>11-6713-1996</h5>
            </Link>
            <span style={styleLinea}></span>
            <Link to="tel:1167443962">
              <h5>11-6744-3962</h5>
            </Link>
          </div>
        </div>
        <div className="text-center mt-2">
          <div
            style={{
              ...styleRedes,
              padding: `1rem .75rem 3rem`,
              backgroundColor: `var(--sw-light-green)`,
            }}
          >
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faFacebookF}
                width={`0.875em`}
                size="2x"
                inverse
              />
            </a>
          </div>
          <div
            style={{
              ...styleRedes,
              padding: `1rem .5rem 4rem`,
              backgroundColor: `var(--sw-green)`,
            }}
          >
            <a
              href="https://instagram.com/switchit.ar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" inverse />
            </a>
          </div>
          <div
            style={{
              ...styleRedes,
              padding: `1rem .5rem 5rem`,
              backgroundColor: `var(--sw-blue)`,
            }}
          >
            <a
              href="https://www.linkedin.com/company/switch-it-tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" inverse />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
