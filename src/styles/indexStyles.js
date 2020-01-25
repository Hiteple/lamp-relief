import styled, { keyframes } from "styled-components"

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
  }
  & h2 {
    animation: ${animateHeadings} 2s 0.8s ease forwards;
    font-size: 70px;
    margin-left: 60px;
    & span {
      color: var(--main-color);
      font-style: italic;
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
  & div {
    text-align: center;
    min-width: 400px;
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
  height: 400px;
  padding: 40px 300px;
  background-color: #eee;
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
`

export const Gallery = styled.section`
  background-color: #aaa;
  padding: 20px 0;
  text-align: center;
  & p {
    margin: 0;
    color: #fff;
  }
`
