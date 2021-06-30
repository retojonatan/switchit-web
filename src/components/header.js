import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import NavMenu from "./navMenu";

const Header = () => (
  <header
    style={{
      background: `var(--sw-dark)`,
      marginBottom: `1.15rem`,
    }}
  >
    <>
      <Navbar
        collapseOnSelect
        bg="dark"
        expand="sm"
        fixed="top"
        variant="dark"
        className="py-1"
      >
        <Navbar.Brand
          as="div"
          style={{
            padding: "0 .5rem",
            lineHeight: "0",
          }}
        >
          <Link to="/">
            <StaticImage
              src="../images/gatsby-icon.png"
              width={100}
              height={25}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Logo switchit"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ fontSize: ".75rem", padding: ".25rem .5rem" }}
        />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <NavMenu />
          </Nav>
          <Button
            className="border-0 py-0 px-3 ms-auto"
            style={{ backgroundColor: "var(--sw-green)", borderRadius: "50px" }}
            size="sm"
          >
            <Link as="span" to="/">
              Login
            </Link>
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  </header>
);

export default Header;
