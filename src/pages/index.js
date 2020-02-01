import React from "react"
import { SEO } from "../components"
import { graphql } from "gatsby"
import {
  ImageContainer,
  TextContainer,
  Benefits,
  Welcome,
  Materials,
  MaterialsContainer,
  Inspiration,
  Newsletter,
} from "../styles/indexStyles"
import { GiTakeMyMoney } from "react-icons/gi"
import { MdMood, MdWbIncandescent } from "react-icons/md"

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" />

      <ImageContainer url={data.allFile.edges[3].node.publicURL}>
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

      <Materials>
        <h3>
          Our <span>skills</span> cover all of this:
        </h3>
        <MaterialsContainer
          materialOne={data.allFile.edges[6].node.publicURL}
          materialTwo={data.allFile.edges[4].node.publicURL}
          materialThree={data.allFile.edges[7].node.publicURL}
          materialFour={data.allFile.edges[0].node.publicURL}
          materialFive={data.allFile.edges[5].node.publicURL}
        >
          <div>
            <article>
              <h4>Fabric</h4>
              <p>
                We make use of of this one to achieve elegant lamps, reminding
                vintage life
              </p>
            </article>
          </div>
          <div>
            <article>
              <h4>Glass</h4>
              <p>
                Don't we all like when the transparency of things let us know
                what is inside?
              </p>
            </article>
          </div>
          <div>
            <article>
              <h4>Wood</h4>
              <p>
                Classical taste (or is it <em>retro</em> nowadays?...)
                <br /> Yet very durable ones!
              </p>
            </article>
          </div>
          <div>
            <article>
              <h4>Metal</h4>
              <p>
                We use this for little decorations mostly, but some lamps even
                have bigger metal parts too!
              </p>
            </article>
          </div>
          <div>
            <article>
              <h4>Ceramic</h4>
              <p>
                We try to resemble asian-like pieces sometimes, inspired by
                their bowls and cup teas
              </p>
            </article>
          </div>
        </MaterialsContainer>
      </Materials>

      <Inspiration inspiration={data.allFile.edges[1].node.publicURL}>
        <p>
          Our <span>goal</span> is to bring you a little shine from our hearts
        </p>
      </Inspiration>
      <br />
      <br />

      <Newsletter>
        <h4>Want to recieve news on our products?</h4>
        <form method="post" netlify-honeypot="bot-field" data-netlify="true">
          <input type="hidden" name="bot-field" />
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Count me in!</button>
        </form>
      </Newsletter>
    </>
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
