import React from "react"
import Layout from "../components/Layout/layout"
import { graphql } from "gatsby"
import { Container, ImageContainer, AboutText } from "../styles/aboutStyles"
import us from "../images/us-min.jpg"

const About = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Container>
        <ImageContainer>
          <img src={us} alt="{us}" />
        </ImageContainer>
        <AboutText>
          <p
            dangerouslySetInnerHTML={{
              __html: data.allShopifyPage.edges[0].node.body,
            }}
          ></p>
        </AboutText>
      </Container>
    </Layout>
  )
}

export default About

export const query = graphql`
  {
    allShopifyPage {
      edges {
        node {
          title
          body
        }
      }
    }
  }
`
