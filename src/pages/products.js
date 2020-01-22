import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import {
  Container,
  ProductImage,
  Product,
  Title,
  Heading,
} from "../styles/productsStyles"

const ProductsPage = ({ data }) => (
  <Layout>
    <Heading>Our lovely lamps</Heading>
    <Container>
      {data.allShopifyProduct.edges.map(({ node }) => (
        <Link to={`/product/${node.handle}`}>
          <Product key={node.shopifyId}>
            <ProductImage
              src={node.images[0].originalSrc}
              alt={node.shopifyId}
            />
            <Title>{node.title}</Title>
            <h4>${node.priceRange.minVariantPrice.amount}</h4>
            <p>{node.description}</p>
          </Product>
        </Link>
      ))}
    </Container>
  </Layout>
)

export default ProductsPage

export const query = graphql`
  {
    allShopifyProduct(sort: { fields: [title] }) {
      edges {
        node {
          title
          shopifyId
          description
          handle
          images {
            originalSrc
          }
          priceRange {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`