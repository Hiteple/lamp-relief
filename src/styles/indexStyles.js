import styled from "styled-components"

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
  }
  & h1 {
    font-size: 50px;
  }
  & h2 {
    font-size: 70px;
    margin-left: 60px;
    & span {
      color: var(--main-color);
      font-style: italic;
    }
  }
`
