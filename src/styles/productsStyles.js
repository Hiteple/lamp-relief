import styled, { keyframes } from "styled-components"

const animateProduct = keyframes`
   0% {
      opacity: 0;
   }
   100% {
      opacity: 1;
   }
`

export const Heading = styled.h1`
  text-align: center;
  letter-spacing: 2px;
  font-weight: 300;
  font-size: 60px;
  margin: 20px 0;
`

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & a {
    font-size: 20px;
    color: #000;
    text-decoration: none;
    margin: 30px;
  }
`

export const Product = styled.div`
  max-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px 0 40px;
  text-align: center;
  transition: all 0.6s ease;
  border: none;
  border-radius: 30px;
  opacity: 0;
  animation: ${animateProduct} 0.8s ease forwards;
  &:hover {
    background-color: #eee;
  }
  & h4 {
    margin-top: 20px;
    font-size: 20px;
  }
  & p {
    color: #000;
    font-weight: 600;
    font-size: 16px;
  }
`

export const Title = styled.h2`
  font-size: 30px;
`

export const ProductImage = styled.img`
  width: 300px;
  min-height: 500px;
  object-fit: cover;
  border: none;
  border-radius: 30px;
`
