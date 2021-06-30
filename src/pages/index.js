import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section id="hero">
      <div className="hero">
        <h1 className="fw-bold">Soluciones</h1>
        <span>360</span>
      </div>
    </section>
    <h1>Hola mundo</h1>
    <p>Este es un sitio desarrollado con Gatsby.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Ver la página 2</Link>
    </p>
  </Layout>
);

export default IndexPage;
