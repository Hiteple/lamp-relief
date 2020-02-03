import styled, { keyframes } from "styled-components"
import { device } from "../responsive"

console.log(device)

const animateHeadings = keyframes`
   0% {
      opacity: 0;
   }
   100% {
      opacity: 1;
   }
`

export const ImageContainer = styled.div`
  height: 700px;
  background-image: url(${props => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  margin-top: 104px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  & h1,
  & h2 {
    color: #fff;
    opacity: 0;
  }
  & h1 {
    font-size: 50px;
    animation: ${animateHeadings} 2s 0.3s ease forwards;

    @media only screen and ${device.laptop} {
      font-size: 40px;
    }

    @media only screen and ${device.tablet} {
      font-size: 30px;
      margin: 0;
    }
  }
  & h2 {
    animation: ${animateHeadings} 2s 0.8s ease forwards;
    font-size: 70px;
    margin-left: 60px;
    & span {
      color: var(--main-color);
      font-style: italic;
    }

    @media only screen and ${device.laptop} {
      font-size: 50px;
      margin: 20px 0 0 0;
    }

    @media only screen and ${device.tablet} {
      font-size: 35px;
      margin: 20px 0 0 0;
    }
  }
`

export const Benefits = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: auto;
  max-width: 100%;
  padding: 70px 0;
  justify-content: space-around;

  @media only screen and ${device.tablet} {
    flex-direction: column;
    align-items: center;
    min-width: 200px;
  }

  & div {
    text-align: center;
    min-width: 400px;

    @media only screen and ${device.tablet} {
      min-width: 200px;
      max-width: 400px;
    }

    @media only screen and ${device.mobileM} {
      & h2 {
        font-size: 20px;
      }
      & p {
        font-size: 15px;
      }
    }

    & h2 {
      font-weight: 300;
      margin: 0;
    }
    & p {
      margin-top: 10px;
    }
  }
`

export const Welcome = styled.div`
   height: auto;
   padding: 40px 200px;
   background-color: #f7f7f7;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   & h2 {
      margin: 0;
      font-size: 50px;
      letter-spacing: 4px;
      font-weight: 300;
   }
   & p {
      margin-top 30px;
      font-size: 20px;
      line-height: 40px;
   }
   & p span {
      color: var(--button-color);
   }

   @media only screen and ${device.laptop} {
     padding: 40px 50px;
   }
   @media only screen and ${device.tablet} {
      padding: 40px 10px;
   }
   @media only screen and ${device.mobileM} {
      & h2 {
         font-size: 20px;
      }
      & p {
         font-size: 17px;
      }
   }
`

export const Materials = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 70px 0;
  text-align: center;
  border-radius: 30px;
  text-align: center;
  & h3 {
    font-size: 50px;
    font-weight: 300;
    letter-spacing: 3px;
    & span {
      color: var(--button-color);
    }
  }
`

export const MaterialsContainer = styled.div`
  height: 600px;
  width: 1200px;
  display: flex;
  background-color: #000;
  border-radius: 30px;

  &:hover > div {
    transition: all 0.5s ease;
    opacity: 0.3;
  }

  & div:nth-child(1) {
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    flex-grow: 2;
    background-image: url(${props => props.materialOne});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: all 0.3s ease;
    position: relative;
    & article {
      display: none;
      opacity: 0;
      background-color: #fff;
      height: 150px;
      width: 300px;
      transition: all 0.5s 0.2s ease-out;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 50%;
      & h4 {
        margin: 10px 0;
        color: var(--button-color);
        font-size: 24px;
      }
      & p {
        margin: 0 20px;
      }
    }
    &:hover {
      flex-grow: 5;
      opacity: 1;
    }
    &:hover article {
      display: block;
      opacity: 1;
    }
  }
  & div:nth-child(2) {
    flex-grow: 2;
    background-image: url(${props => props.materialTwo});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: all 0.3s ease;
    position: relative;
    & article {
      display: none;
      opacity: 0;
      background-color: #fff;
      height: 150px;
      width: 300px;
      transition: all 0.5s 0.2s ease-out;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 50%;
      & h4 {
        margin: 10px 0;
        color: var(--button-color);
        font-size: 24px;
      }
      & p {
        margin: 0 20px;
      }
    }
    &:hover {
      flex-grow: 5;
      opacity: 1;
    }
    &:hover article {
      display: block;
      opacity: 1;
    }
  }
  & div:nth-child(3) {
    flex-grow: 2;
    background-image: url(${props => props.materialThree});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: all 0.3s ease;
    position: relative;
    & article {
      display: none;
      opacity: 0;
      background-color: #fff;
      height: 150px;
      width: 300px;
      transition: all 0.5s 0.2s ease-out;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 50%;
      & h4 {
        margin: 10px 0;
        color: var(--button-color);
        font-size: 24px;
      }
      & p {
        margin: 0 20px;
      }
    }
    &:hover {
      flex-grow: 5;
      opacity: 1;
    }
    &:hover article {
      display: block;
      opacity: 1;
    }
  }
  & div:nth-child(4) {
    flex-grow: 2;
    background-image: url(${props => props.materialFour});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: all 0.3s ease;
    position: relative;
    & article {
      display: none;
      opacity: 0;
      background-color: #fff;
      height: 150px;
      width: 300px;
      transition: all 0.5s 0.2s ease-out;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 50%;
      & h4 {
        margin: 10px 0;
        color: var(--button-color);
        font-size: 24px;
      }
      & p {
        margin: 0 20px;
      }
    }
    &:hover {
      flex-grow: 5;
      opacity: 1;
    }
    &:hover article {
      display: block;
      opacity: 1;
    }
  }
  & div:nth-child(5) {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    flex-grow: 2;
    background-image: url(${props => props.materialFive});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
    transition: all 0.3s ease;
    position: relative;
    & article {
      display: none;
      opacity: 0;
      background-color: #fff;
      height: 150px;
      width: 300px;
      transition: all 0.5s 0.2s ease-out;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 50%;
      & h4 {
        margin: 10px 0;
        color: var(--button-color);
        font-size: 24px;
      }
      & p {
        margin: 0 20px;
      }
    }
    &:hover {
      flex-grow: 5;
      opacity: 1;
    }
    &:hover article {
      display: block;
      opacity: 1;
    }
  }

  @media only screen and ${device.laptopL} {
    max-width: 900px;
  }
  @media only screen and ${device.laptop} {
    max-width: 780px;
  }
  @media only screen and ${device.tablet} {
    max-width: 400px;
    flex-direction: column;
    min-height: 1500px;
    border-top-right-radius: 30px;

    &:hover > div {
      transition: none;
      opacity: 1;
    }

    & > div > {
      & article {
        display: block !important;
        opacity: 1 !important;
      }
    }

    & div:nth-child(1) {
      border-top-right-radius: 30px;
    }

    & div:nth-child(1),
    & div:nth-child(2),
    & div:nth-child(3),
    & div:nth-child(4),
    & div:nth-child(5) {
      flex-grow: 5;
    }

    & div:nth-child(1):hover,
    & div:nth-child(2):hover,
    & div:nth-child(3):hover,
    & div:nth-child(4):hover,
    & div:nth-child(5):hover {
      flex-grow: 5;
    }
  }

  @media only screen and ${device.mobileM} {
    min-height: 3000px;
    max-width: 320px;
    & div:nth-child(2) {
    }
    & div > article {
      min-width: 100%;
    }
  }
`

export const Inspiration = styled.section`
  max-width: 100%;
  height: 500px;
  margin-top: 70px;
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.5)
    ),
    url(${props => props.inspiration});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  & p {
    font-size: 60px;
    text-align: center;
    & span {
      color: var(--button-color);
    }
  }

  @media only screen and ${device.laptop} {
    & p {
      font-size: 40px;
    }
  }
  @media only screen and ${device.tablet} {
    & p {
      font-size: 30px;
    }
  }
  @media only screen and ${device.mobileM} {
    padding: 0 30px;
    & p {
      font-size: 20px;
    }
  }
`

export const Newsletter = styled.section`
  padding: 90px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  & h4 {
    font-size: 30px;
  }
  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    max-width: 100%;
    & input {
      padding: 10px 20px;
      width: 600px;
      border: none;
      border-radius: 30px;
      margin: 10px 0;
      border: 1px solid #00cec9;
      outline: none;

      @media only screen and ${device.tablet} {
        max-width: 100%;
      }
    }
    & input::placeholder {
      color: #010101;
    }
    & button {
      width: 200px;
      border: 1px solid #00cec9;
      border-radius: 30px;
      margin: 20px 0;
      cursor: pointer;
      background-color: var(--button-color);
      color: #fff;
      padding: 10px 20px;
      transition: all 0.2s ease;
      &:hover {
        background-color: #fff;
        color: var(--button-color);
        border: 1px solid #00cec9;
      }
    }
  }

  @media only screen and ${device.tablet} {
    padding: 0 30px;
    & h4 {
      text-align: center;
      font-size: 20px;
    }
  }
`
