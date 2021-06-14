import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Services = () => (
  <Layout>
    <Seo title="Services" />
    <h1>Esta es la pagina de los servicios</h1>
    <Link to="/">Volver al Homepage</Link>
  </Layout>
);

export default Services;
