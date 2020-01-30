import React from "react"
import { graphql } from "gatsby"
import { SEO } from "../components"
import { Container } from "../styles/policyStyles"

const Privacy = ({ data }) => {
  return (
    <>
      <SEO title="Privacy" />
      <Container>
        <h1>{data.allShopifyShopPolicy.edges[0].node.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: data.allShopifyShopPolicy.edges[0].node.body,
          }}
        ></p>
      </Container>
    </>
  )
}

export default Privacy

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
