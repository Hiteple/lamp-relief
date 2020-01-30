import React from "react"
import { graphql } from "gatsby"
import { Container, ImageContainer, AboutText } from "../styles/aboutStyles"
import { SEO } from "../components"
import us from "../images/us-min.jpg"

const About = ({ data }) => {
  console.log(data)
  return (
    <>
      <SEO title="About" />
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
    </>
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
