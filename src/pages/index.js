import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Image from "../components/image";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Header from "../components/header";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/footer";

import ProductsListing from "../components/ProductsListings";
import SplashMonthly from "../components/SplashMonthly";
import Gaurantee from "../components/Gaurantee";

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
