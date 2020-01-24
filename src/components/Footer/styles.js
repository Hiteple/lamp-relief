import styled from "styled-components"

export const FooterContainer = styled.footer`
  background-color: var(--button-color);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  max-width: 100%;
  bottom: 0;
  height: auto;
  padding: 40px 0;
  & h2 {
    margin: 20px 0;
    color: #fff;
  }
`

export const Company = styled.ul`
  list-style: none;
  margin: 0;
  & li {
    font-size: 15px;
    & a {
      text-decoration: none;
      color: #fff;
    }
  }
  min-width: 200px;
`

export const Contact = styled.ul`
  list-style: none;
  margin: 0;
  & li {
    font-size: 15px;
    color: #fff;
  }
  min-width: 200px;
`

export const Media = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
  & li {
    margin: 20px 0;
    font-size: 25px;
    & a:first-child {
      color: #fff;
      transition: all .2s ease;
    }
    & a:first-child: hover {
      background-color: var(--main-color);
      color: var(--button-color);
      padding: 10px 10px 6px 10px;
      border: none;
      border-radius 50%;
    }
  }
`
