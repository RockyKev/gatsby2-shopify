import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Product from "./Product"

const PRODUCTS_LISTING_QUERY = graphql`
  query MyQuery {
    allShopifyProduct {
      edges {
        node {
          id
          title
          publishedAt(formatString: "YYYY-MM")
          descriptionHtml
          description
          variants {
            sku
            id
            price
          }
        }
      }
    }
  }
`

const ProductsListings = () => {
  const { allShopifyProduct } = useStaticQuery(PRODUCTS_LISTING_QUERY)

  return (
    <div>
      {allShopifyProduct.edges.map(edge => (
        <Product product={edge.node} key={edge.node.id} />
      ))}
    </div>
  )
}

export default ProductsListings
