import styled, { keyframes } from "styled-components"
import { device } from "../responsive"

const animateUs = keyframes`
   0% {
      opacity: 0;
   }
   100% {
      opacity: 1;
   }
`

const animateText = keyframes`
   0% {
      opacity: 0;
      transform: translateX(-100%);
   }
   100% {
      opacity: 1;
      transform: translateX(0%);
   }
`

export const Container = styled.section`
  margin: 160px 50px 50px 50px;
  color: #555;
  display: flex;
  justify-content: space-around;
  min-height: 800px;

  @media only screen and ${device.laptop} {
    flex-direction: column;
    align-items: center;
  }

  @media only screen and ${device.tablet} {
    padding-top: 60px;
    margin: 100px 0 0 0;
  }

  @media only screen and ${device.mobileM} {
    padding-top: 120px;
  }
`

export const ImageContainer = styled.div`
  width: 400px;
  height: 800px;
  background-position: center;
  height: 600px;
  width: 800px;

  @media only screen and ${device.laptop} {
    width: 100%;
  }

  & img {
    width: 40rem;
    height: 43rem;
    object-fit: cover;
    border-radius: 30px;
    opacity: 0;
    animation: ${animateUs} 1.5s 1s ease forwards;

    @media only screen and ${device.laptop} {
      width: 100%;
      height: 100%;
    }

    @media only screen and ${device.tablet} {
      min-width: 100%;
      border-radius: 0;
    }
  }
`

export const AboutText = styled.div`
  width: 900px;
  opacity: 0;
  transform: translateX(-100%);
  animation: ${animateText} 1.4s 0.3s ease forwards;
  margin-left: 20px;
  padding: 40px 0;
  & p span {
    color: var(--button-color);
  }

  @media only screen and ${device.laptop} {
    width: 700px;
    text-align: center;
  }

  @media only screen and ${device.tablet} {
    margin-left: 0;
    width: 300px;
  }

  @media only screen and ${device.mobileM} {
    width: 300px;
  }
`
