import React from "react"
import Layout from "../components/Layout/layout"
import { graphql } from "gatsby"
import { Container } from "../styles/policyStyles"

const Privacy = ({ data }) => {
  return (
    <Layout>
      <Container>
        <h1>{data.allShopifyShopPolicy.edges[0].node.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: data.allShopifyShopPolicy.edges[0].node.body,
          }}
        ></p>
      </Container>
    </Layout>
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
