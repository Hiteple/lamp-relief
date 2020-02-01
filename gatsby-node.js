const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const results = await graphql(`
    query {
      allShopifyProduct(sort: { fields: [title] }) {
        edges {
          node {
            title
            images {
              originalSrc
            }
            shopifyId
            handle
            description
            availableForSale
            variants {
              weight
              sku
              compareAtPrice
            }
            priceRange {
              maxVariantPrice {
                amount
              }
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
      allStripeSku {
        edges {
          node {
            id
            price
            product {
              name
              metadata {
                description
              }
            }
          }
        }
      }
    }
  `)

  results.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/product/${node.handle}`,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        product: node,
      },
    })
  })
}
