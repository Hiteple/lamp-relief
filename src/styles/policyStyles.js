import styled from "styled-components"
import { device } from "../responsive"

export const Container = styled.section`
  margin: 160px 50px 50px 50px;
  padding: 30px;
  border: none;
  border-radius: 30px;
  background-color: var(--main-color);
  color: #555;
  & h1 {
    text-align: center;
  }
  & p {
    font-size: 16px;
    font-weight: bold;
  }

  @media only screen and ${device.tablet} {
    margin: 60px 0 0 0;
    border-radius: 0;
  }

  @media only screen and ${device.mobileM} {
    margin: 200px 0 0 0;
    & p {
      font-size: 14px;
    }
  }
`
