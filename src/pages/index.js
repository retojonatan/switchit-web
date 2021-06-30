import ReactFullpage from "@fullpage/react-fullpage";
import * as React from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Servicios from "../components/servicios";
import Background from "../images/home.png";

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
