import { Link } from "gatsby"
import styled from "styled-components"

export const Wrapper = styled.div`
  margin: 20px;

  border-radius: 10px;
  box-shadow: 0px 2px 24px 0px rgb(53 55 64 / 10%);
  @media screen and (max-width: 1279px) {
  }
`

export const ImageWrap = styled.div`
  width: 100%;
  height: 195px;
  @media screen and (max-width: 1279px) {
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0;
`

export const Heading = styled.p`
  font-weight: 700;
  font-size: 22px;
  line-height: 1.4em;
  color: #353740;
  font-family: "Montserrat", sans-serif;
  padding: 20px 20px 10px 20px;
`

export const Date = styled.p`
  padding: 10px 0;
  color: #949ba3;
  line-height: 1.7em;
  font-weight: 500;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  padding: 0px 20px;
`

export const Summary = styled.p`
  line-height: 1.8em;
  color: #747d88;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  padding: 10px 20px;
`
export const BlogLink = styled(Link)`
  color: initial;
  text-decoration: initial;
`
