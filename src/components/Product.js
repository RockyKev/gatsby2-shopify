import React from "react"

//edges -> node -> title
const Product = ({ product }) => {
  return (
    <article>
      <h3> {product.title} </h3>
    </article>
  )
}

export default Product
