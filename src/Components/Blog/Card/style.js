import { Link } from "gatsby"
import styled from "styled-components"

export const Container = styled.div`
  border: 1px solid black;
`

export const Wrapper = styled.div`
  width: 313px;
  margin: 20px;

  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  /* @media screen and (max-width: 1279px) {
    width: 25%;
  } */
`

export const ImageWrap = styled.div`
  width: 311px;
  height: 195px;
  @media screen and (max-width: 1279px) {
    width: 100%;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0;
`

export const Details = styled.div`
  padding: 20px 20px;
`
export const Heading = styled.p`
  font-weight: 700;
  font-size: 22px;
  line-height: 1.4em;
  color: #353740;
`

export const Date = styled.p`
  padding: 10px 0;
  color: #949ba3;
  line-height: 1.7em;
  font-weight: 500;
  font-size: 16px;
`

export const Summary = styled.p`
  line-height: 1.8em;
  color: #747d88;
  font-weight: 500;
`
export const BlogLink = styled(Link)`
  color: initial;
  text-decoration: initial;
`
