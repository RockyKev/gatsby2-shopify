import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Image from "../components/image";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Header from "../components/header";
import Jumbotron from "../components/Jumbotron";
import ProductsListing from "../components/ProductsListings";
import SplashMonthly from "../components/SplashMonthly";
import Gaurantee from "../components/Gaurantee";
import Footer from "../components/Footer";

const IndexPage = () => {
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <Jumbotron />
      <Layout>
        <SEO title="Home" />

        <ProductsListing />
      </Layout>
      <SplashMonthly />

      <Gaurantee />

      <Footer />
    </>
  );
};

export default IndexPage;
