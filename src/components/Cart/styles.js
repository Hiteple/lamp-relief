import styled, { keyframes } from "styled-components"

const animatedCart = keyframes`
   0% {
      opacity: 0;
      transform: translateX(70%);
   }
   100% {
      opacity: 1;
      transform: translateX(0);
   }
`

const animatedItems = keyframes`
   0% {
      opacity: 0;
      transform: translateX(-20%);
   }
   100% {
      opacity: 1;
      transform: translateX(0);
   }
`

export const CartContainer = styled.div`
  height: 100vh;
  width: 25vw;
  background-color: var(--main-color);
  position: fixed;
  z-index: 499;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: ${animatedCart} 0.3s ease both;
  & .total {
    text-align: center;
    margin-top: 20px;
    width: 150px;
    background-color: #fff;
    padding: 5px 10px;
  }
`

export const CartItems = styled.div`
  margin-top: 100px;
  min-height: 700px;
  max-height: 700px;
  overflow: scroll;
  min-width: 400px;
  padding: 40px;
`

export const Item = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100px;
  padding: 30px;
  background-color: #fff;
  opacity: 0;
  animation: ${animatedItems} 0.2s ease forwards;
  & h4,
  & p {
    margin: 0;
  }
  & button {
    width: 70px;
    height: 30px;
    border-radius: 30px;
    border: none;
    background-color: red;
    color: #fff;
    font-size: 13px;
    cursor: pointer;
    outline: none;
  }
`

export const ItemImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
`
