import styled, { keyframes } from "styled-components"
import { device } from "../../responsive"

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

const animateButton = keyframes`
0% {
   opacity: 0;
   transform: translateY(150%);
}
100% {
   opacity: 1;
   transform: translateY(0);
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

  @media only screen and ${device.laptopL} {
    justify-content: center;
  }
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

  @media only screen and ${device.laptop} {
    padding: 100px 0;
    max-width: 100%;
    flex-direction: column;
    overflow: hidden;

    & img {
      width: 500px;
      align-self: center;
      border-bottom-left-radius: 30px;
      border-bottom-right-radius: 30px;
    }
    & div {
      padding: 0 30px;
      margin-top: 120px;
    }
  }

  @media only screen and ${device.tablet} {
    & img {
      width: 100%;
    }
    & div {
      text-align: center;
      padding: 0 30px;
      margin-top: 120px;
      margin-left: 0;
      & h1 {
        font-size: 40px;
      }
      & p {
        font-size: 25px;
      }
    }
  }

  @media only screen and ${device.mobileM} {
    & div {
      & h1 {
        font-size: 30px;
      }
      & p {
        font-size: 18px;
      }
    }
  }
`

export const OkButton = styled.button`
  outline: none;
  background-color: var(--button-color);
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  margin-top: 30px;
  width: 200px;
  color: #fff;
  cursor: pointer;
  opacity: 0;
  border: 1px solid transparent;
  transition: all 0.2s ease;
  &:hover {
    border: 1px solid #00cec9;
    background-color: #fff;
    color: var(--button-color);
  }
  animation: ${animateButton} 2s 1s ease forwards;

  @media only screen and ${device.tablet} {
    margin: 30px auto;
  }
`
