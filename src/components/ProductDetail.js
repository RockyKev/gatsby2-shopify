import React, { useState } from "react";
import Img from "gatsby-image";

const ProductDetail = ({ product }) => {
  //   const [sku, setSku] = useState(product.variants[0].sku);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  return (
    <div>
      <h1>{product.title}</h1>
      <Img fixed={product.images[0].localFile.childImageSharp.fixed} />
      <p>{product.description} </p>

      <p>${selectedVariant.price} </p>

      <select
        onChange={e => {
          const selected = product.variants.filter(
            variant => variant.sku === e.target.value
          );

          setSelectedVariant(selected[0]);
        }}
        value={selectedVariant.sku}
      >
        {product.variants.map(variant => (
          <option key={variant.id} value={variant.sku}>
            {variant.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductDetail;
