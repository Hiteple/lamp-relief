import styled, { keyframes } from "styled-components"

const animateImage = keyframes`
   0% {
      opacity: 0;
      transform: translateX(-80%) scale(1.4);
   }
   100% {
      opacity: 1;
      transform: translateX(0) scale(1.4);
   }
`

export const SingleProductContainer = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: auto;
  margin-top: 104px;
  padding: 150px 0;
  background-attachment: scroll;
`
export const SingleProduct = styled.div`
  display: flex;
  max-width: 80%;
  transition: all 0.3s ease;
  & img {
    flex-grow: 1;
    animation: ${animateImage} 1.5s both;
  }
  & div {
    display: flex;
    flex-direction: column;
    margin-left: 140px;
    flex-grow: 4;
    & h1 {
      font-size: 80px;
      font-weight: 300;
      letter-spacing: 4px;
    }
    & p {
      font-size: 25px;
    }
  }
`
