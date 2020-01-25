import styled, { keyframes } from "styled-components"

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
`

export const ImageContainer = styled.div`
  width: 400px;
  height: 800px;
  background-position: center;
  height: 600px;
  width: 800px;
  & img {
    width: 40rem;
    height: 43rem;
    object-fit: cover;
    border-radius: 30px;
    opacity: 0;
    animation: ${animateUs} 1.5s 1s ease forwards;
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
`
