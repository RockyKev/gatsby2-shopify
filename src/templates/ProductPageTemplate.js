import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Header from "../components/header";
import Layout from "../components/layout";
import ProductDetail from "../components/ProductDetail";
import Footer from "../components/Footer";

const ProductPageTemplate = ({ data }) => {
  const ProductPageWrapper = styled.div`
    background: white;
    padding-top: 3rem;
  `;

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <ProductPageWrapper>
        <Layout>
          <ProductDetail product={data.shopifyProduct} />
        </Layout>
      </ProductPageWrapper>
      <Footer />
    </>
  );
};

export const query = graphql`
  query ProductQuery($handle: String!) {
    site {
      siteMetadata {
        title
      }
    }
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      images {
        localFile {
          childImageSharp {
            fixed(width: 400) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
      publishedAt(formatString: "YYYY")
      description
      descriptionHtml
      variants {
        sku
        id
        title
        price
      }
    }
  }
`;

export default ProductPageTemplate;
