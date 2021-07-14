import ReactFullpage from "@fullpage/react-fullpage";
import * as React from "react";
import Empresas from "../components/empresas";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Hogar from "../components/hogar";
import InstitucionesEducativas from "../components/instituciones";
import Layout from "../components/layout";
import Nosotros from "../components/nosotros";
import Seo from "../components/seo";
import Servicios from "../components/servicios";
import Background from "../images/headers/home.png";
import Partners from "./../components/partners";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <ReactFullpage
      //fullpage options
      scrollingSpeed={1300} /* Options here */
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <div
              className="section"
              style={{
                backgroundImage: `url(${Background})`,
              }}
            >
              <Hero />
            </div>
            <div className="section">
              <Servicios />
            </div>
            <div
              className="section"
              style={{
                backgroundColor: `var(--sw-green)`,
              }}
            >
              <Hogar />
            </div>
            <div
              className="section"
              style={{
                backgroundColor: `var(--sw-dark-pink)`,
              }}
            >
              <InstitucionesEducativas />
            </div>
            <div
              className="section"
              style={{
                backgroundColor: `var(--sw-yellow)`,
              }}
            >
              <Empresas />
            </div>
            <div
              className="section"
              style={{
                backgroundColor: `var(--sw-dark)`,
              }}
            >
              <Partners />
            </div>
            <div className="section">
              <Nosotros />
            </div>
            <div className="section">
              <footer className="h-100">
                <Footer />
              </footer>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  </Layout>
);

export default IndexPage;
