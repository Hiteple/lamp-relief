import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { ImageContainer, TextContainer } from "../styles/indexStyles"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <ImageContainer url={data.allFile.edges[0].node.publicURL}>
        <TextContainer>
          <h1>You come for the style</h1>
          <h2>
            and <span>return</span> for the quality
          </h2>
        </TextContainer>
      </ImageContainer>
      <p>Height testing for parallax in hero</p>
      <p>Height testing for parallax in hero</p>
      <p>Height testing for parallax in hero</p>
      <p>Height testing for parallax in hero</p>
      <p>Height testing for parallax in hero</p>
      <p>Height testing for parallax in hero</p>
      <p>Height testing for parallax in hero</p>
      <p>Height testing for parallax in hero</p>
      <p>Height testing for parallax in hero</p>
      <p>Height testing for parallax in hero</p>
      <p>Height testing for parallax in hero</p>
      <p>Height testing for parallax in hero</p>
      <p>Height testing for parallax in hero</p>
      <p>Height testing for parallax in hero</p>
      <p>Height testing for parallax in hero</p>
      <p>Height testing for parallax in hero</p>
      <p>Height testing for parallax in hero</p>
      <p>Height testing for parallax in hero</p>
      <p>Height testing for parallax in hero</p>
      <p>Height testing for parallax in hero</p>
      <p>Height testing for parallax in hero</p>
      <p>Height testing for parallax in hero</p>
      <p>Height testing for parallax in hero</p>
      <p>Height testing for parallax in hero</p>
      <p>Height testing for parallax in hero</p>
      <p>Height testing for parallax in hero</p>
      <p>Height testing for parallax in hero</p>
      <p>Height testing for parallax in hero</p>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile(
      filter: {
        dir: { eq: "/Users/alexabellerman/Desktop/lamp-relief/src/images" }
      }
    ) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`

export default IndexPage
