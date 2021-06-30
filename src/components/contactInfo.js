import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React, { Component } from "react";

export default class ContactInfo extends Component {
  render() {
    const styleRedes = {
      borderTopLeftRadius: `30px`,
      borderTopRightRadius: `30px`,
      margin: `0 .4rem`,
      display: `inline-flex`,
      verticalAlign: `bottom`,
    };
    const styleLinea = {
      margin: `.75rem -.375rem`,
      width: `370px`,
      backgroundColor: `var(--sw-gray)`,
      height: `1px`,
      display: `block`,
    };

    return (
      <div
        className="container px-5 d-flex flex-column align-items-center"
        style={{ paddingTop: `4rem` }}
      >
        <div>
          <h2
            className="text-white"
            style={{
              fontWeight: `600`,
            }}
          >
            Encontranos,
          </h2>
          <h3
            style={{
              fontWeight: `600`,
              color: `var(--sw-light-green)`,
            }}
          >
            tenemos soluciones.
          </h3>
          <div className="py-4">
            <Link to="mailto:info@switchit.com.ar">
              <h4>
                info@<b>switchit</b>.com.ar
              </h4>
            </Link>
            <span style={styleLinea}></span>
            <Link to="tel:1167131996">
              <h4>11-6713-1996</h4>
            </Link>
            <span style={styleLinea}></span>
            <Link to="tel:1167443962">
              <h4>11-6744-3962</h4>
            </Link>
          </div>
        </div>
        <div className="text-center mt-2">
          <div
            style={{
              ...styleRedes,
              padding: `1rem 1rem 3rem`,
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
              padding: `1rem .75rem 4rem`,
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
              padding: `1rem .75rem 5rem`,
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
