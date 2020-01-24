import styled from "styled-components"

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 500;
  background-color: var(--main-color);
  padding: 30px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  & h1 {
    margin: 0;
    font-family: "Nunito";
    font-weight: 300;
    font-size: 50px;
    letter-spacing: 4px;
  }
  & h1 a {
    margin-left: 30px;
    color: #fff;
    text-decoration: none;
  }
`
export const Menu = styled.ul`
  display: flex;
  margin: 0 30px 0 0;
  list-style: none;
  align-self: center;
  & li {
    margin: 0;
  }
  & li a {
    color: #fff;
    font-size: 25px;
    margin: 0 20px;
    text-decoration: none;
  }
`
