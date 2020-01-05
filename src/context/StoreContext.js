import React from "react";
import Client from "shopify-buy";

import config from "../../config";

export const client = Client.buildClient({
  domain: `${config.shopify.shopname}.myshopify.com`,
  storefrontAccessToken: config.shopify.storefront,
});

//add remove, if checkout is available, etc.
export const StoreContext = React.createContext({
  client,
});
