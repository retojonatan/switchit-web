import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const SecondPage = () => (
  <Layout>
    <Seo title="Página 2" />
    <h1>Pagina 2</h1>
    <p>
      Te tiro el lorem. Lorem ipsum, dolor sit amet consectetur adipisicing
      elit. Ipsum animi quam reiciendis molestias sapiente facilis quia est
      repellendus!
    </p>
    <Link to="/">Volver a la homepage</Link>
  </Layout>
);

export default SecondPage;
