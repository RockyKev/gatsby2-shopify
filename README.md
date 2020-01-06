<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
 A MVP for Shopify
</h1>

This broilerplate is a test example of building a Gatsby-powered storefront, pulling data from my (@rockykev) shopify account via Graphql.

## 🚀 Quick start

1.  **Google "Shopify Developers" to get access to their dev accounts.**

You'll need to create a dev account, a store, and create items in your store.
From there, get your secret key.

1.  **Pass your keys to the file**

Create a config.js file and include your keys in there.

it should look like this.

```
module.exports = {
  shopify: {
    shopname: "MY STORE NAME",
    storefront: "MY STORE API KEY",
  },
}
```

1.  **gatsby-node.js will auto-generate your files**

Using the GraphQl query, it takes all of your products, passes them to a react.create function that builds pages based on the page name.

## 🧐 To-do list

- [x] Create MVP with working buy button
- [ ] Create shopping cart
- [ ] Create about pages/extra pages
- [ ] Organize code to put products in product area.

## 💫 Deploy

Run your gatsby code with gatsby develop, or gatsby build.

<!-- AUTO-GENERATED-CONTENT:END -->
