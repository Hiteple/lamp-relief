import React from "react"
import Layout from "../components/Layout/layout"
import { graphql } from "gatsby"
import { Container } from "../styles/policyStyles"

const Terms = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Container>
        <h1>{data.allShopifyShopPolicy.edges[2].node.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: data.allShopifyShopPolicy.edges[2].node.body,
          }}
        ></p>
      </Container>
    </Layout>
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
