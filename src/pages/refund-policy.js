import React from "react"
import { graphql } from "gatsby"
import { SEO } from "../components"
import { Container } from "../styles/policyStyles"

const RefundPolicy = ({ data }) => {
  console.log(data)
  return (
    <>
      <SEO title="Refunds" />
      <Container>
        <h1>{data.allShopifyShopPolicy.edges[1].node.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: data.allShopifyShopPolicy.edges[1].node.body,
          }}
        ></p>
      </Container>
    </>
  )
}

export default RefundPolicy

export const query = graphql`
  query {
    allShopifyShopPolicy {
      edges {
        node {
          title
          body
        }
      }
    }
  }
`
