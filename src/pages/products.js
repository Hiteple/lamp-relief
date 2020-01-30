import React from "react"
import { Link, graphql } from "gatsby"
import { SEO } from "../components"
import { priceFormat } from "../utils/priceFormat"

import {
  Container,
  ProductImage,
  Product,
  Title,
  Heading,
} from "../styles/productsStyles"

const ProductsPage = ({ data }) => (
  <>
    <SEO title="Products" />
    <Heading>Our lovely lamps</Heading>
    <Container>
      {data.allShopifyProduct.edges.map(({ node }) => (
        <Link key={node.shopifyId} to={`/product/${node.handle}`}>
          <Product>
            <ProductImage src={node.images[0].originalSrc} alt={node.handle} />
            <Title>{node.title}</Title>
            <h4>${priceFormat(node.priceRange.minVariantPrice.amount)}</h4>
            <p>{node.description}</p>
          </Product>
        </Link>
      ))}
    </Container>
  </>
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
