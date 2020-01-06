import React, { useState, useContext } from "react";
import Img from "gatsby-image";
import styled from "styled-components";

import { StoreContext } from "../context/StoreContext";

const ProductDetail = ({ product }) => {
  const ProductWrapper = styled.article`
    h1 {
      font-family: Amaranth;
    }

    .small-price {
      font-size: 1.2rem;
      font-style: italic;
      float: right;
    }
  `;

  const ProductFlex = styled.article`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    div {
      width: 50%;
    }

    p {
      color: rgba(0, 0, 0, 0.8);
    }
  `;

  //   const [sku, setSku] = useState(product.variants[0].sku);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const { client } = useContext(StoreContext);

  const addToCart = async variantId => {
    const newCheckout = await client.checkout.create();

    const lineItems = [
      {
        variantId: variantId.replace("Shopify__ProductVariant__", ""),
        quantity: 1,
      },
    ];

    //shopify creates a new id to a shopping cart
    const addItems = await client.checkout.addLineItems(
      newCheckout.id,
      lineItems
    );

    window.open(addItems.webUrl, "_blank");
    console.log("ADD ITEMS", addItems.webUrl);
  };

  return (
    <ProductWrapper>
      <h1>
        {product.title}
        <span className="small-price">${selectedVariant.price} </span>
      </h1>

      <ProductFlex>
        <Img fixed={product.images[0].localFile.childImageSharp.fixed} />
        <div>
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

          <button onClick={() => addToCart(selectedVariant.id)}>Buy Now</button>
        </div>
      </ProductFlex>
    </ProductWrapper>
  );
};

export default ProductDetail;
