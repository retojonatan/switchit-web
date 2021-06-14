import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const About = () => (
  <Layout>
    <Seo title="About" />
    <h1>Pagina About</h1>
    <Link to="/">Volver al Home</Link>
  </Layout>
);

export default About;
