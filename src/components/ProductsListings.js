import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Product from "./Product"

const PRODUCTS_LISTING_QUERY = graphql`
  query ProductsListingQuery {
    allShopifyProduct {
      edges {
        node {
          id
          title
          publishedAt(formatString: "YYYY-MM")
          descriptionHtml
          description
          images {
            localFile {
              childImageSharp {
                fixed(width: 200) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`

const ProductsListings = () => {
  const { allShopifyProduct } = useStaticQuery(PRODUCTS_LISTING_QUERY)

  console.log(allShopifyProduct)

  return (
    <div>
      {allShopifyProduct.edges.map(edge => (
        <Product product={edge.node} key={edge.node.id} />
      ))}
    </div>
  )
}

export default ProductsListings
