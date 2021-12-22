import { Link } from "gatsby"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 80px;
`

export const Wrapper = styled.div`
  width: 311px;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

export const ImageWrap = styled.div`
  width: 311px;
  height: 195px;
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
  color: #353740;
  font-size: 22px;
  line-height: 1.4em;
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
