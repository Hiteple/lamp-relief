import React from "react"
import { graphql } from "gatsby"
import { SEO } from "../components"
import { Container } from "../styles/policyStyles"

const Terms = ({ data }) => {
  console.log(data)
  return (
    <>
      <SEO title="Terms" />
      <Container>
        <h1>{data.allShopifyShopPolicy.edges[2].node.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: data.allShopifyShopPolicy.edges[2].node.body,
          }}
        ></p>
      </Container>
    </>
  )
}

export default Terms

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
