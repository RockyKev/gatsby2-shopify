import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import Jumbotron from "../components/Jumbotron";
import ProductsListing from "../components/ProductsListings";
import SplashMonthly from "../components/SplashMonthly";
import Gaurantee from "../components/Gaurantee";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Jumbotron />
    <ProductsListing />
    <SplashMonthly />

    <Gaurantee />
  </Layout>
);

export default IndexPage;
