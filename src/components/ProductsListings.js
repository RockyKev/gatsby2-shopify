import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Product from "./Product";
import styled from "styled-components";

const Header = styled.h2`
  color: white;
  text-align: center;
`;

const Listing = styled.div`
  display: flex;
  border: 1px blue solid;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const ProductBox = styled.div`
  border: 2px green solid;
  width: 33%;

  article {
    text-align: center;
  }
`;

const PRODUCTS_LISTING_QUERY = graphql`
  query ProductsListingQuery {
    allShopifyProduct {
      edges {
        node {
          id
          title
          handle
          publishedAt(formatString: "YYYY-MM")
          descriptionHtml
          description
          images {
            localFile {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

const ProductsListings = () => {
  const { allShopifyProduct } = useStaticQuery(PRODUCTS_LISTING_QUERY);

  return (
    <>
      <Header>Heroic Helmets</Header>

      <Listing>
        {allShopifyProduct.edges.map(edge => {
          return (
            <ProductBox>
              <Product product={edge.node} key={edge.node.id} />
            </ProductBox>
          );
        })}
      </Listing>
    </>
  );
};

export default ProductsListings;
