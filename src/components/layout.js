/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import "bootstrap/dist/css/bootstrap.min.css";
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import * as React from "react";
import "./custom.css";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || ``} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.5rem 1.15rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        <Footer />
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
