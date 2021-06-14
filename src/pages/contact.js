import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Contact = () => (
  <Layout>
    <Seo title="Contact" />
    <h1>Este es el Contact</h1>
    <Link to="/">Volver al Home</Link>
  </Layout>
);

export default Contact;
