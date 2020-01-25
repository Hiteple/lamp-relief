import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import {
  ImageContainer,
  TextContainer,
  Benefits,
  Gallery,
  Welcome,
} from "../styles/indexStyles"
import { GiTakeMyMoney } from "react-icons/gi"
import { MdMood, MdWbIncandescent } from "react-icons/md"

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

      <Benefits>
        <div>
          <GiTakeMyMoney
            style={{ fontSize: "60px", color: "var(--button-color)" }}
          />
          <h2>Nice price/quality relationship</h2>
          <p>because we offer you what you deserve</p>
        </div>
        <div>
          <MdWbIncandescent
            style={{ fontSize: "60px", color: "var(--button-color)" }}
          />
          <h2>Low consumption</h2>
          <p>as a part of our promise and responsibility</p>
        </div>
        <div>
          <MdMood style={{ fontSize: "60px", color: "var(--button-color)" }} />
          <h2>Guaranteed satisfaction</h2>
          <p>because confidence will be our bond</p>
        </div>
      </Benefits>

      <Welcome>
        <h2>Welcome to Lamp Relief!</h2>
        <p>
          We're glad you came by. Please do check on our beloved lamps, we{" "}
          <span>know</span> you'll find that unique one that'll please you. The
          process is quite simple: you add the lamp you want to the cart and
          then proced to a secure checkout (then you'll be able to add the
          shipping information). <br />
          And that's it! Simple, right?
        </p>
      </Welcome>

      <Gallery>
        <p>gallery here</p>
      </Gallery>
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
