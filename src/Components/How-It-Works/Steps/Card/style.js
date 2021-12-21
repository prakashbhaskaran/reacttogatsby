import styled from "styled-components"

export const Container = styled.div`
  width: 360px;
  @media screen and (max-width: 979px) {
    width: 100%;
  }
`
export const ImageWrapper = styled.div`
  width: 360px;
  height: auto;
  margin: auto;
  @media screen and (max-width: 1080px) {
    width: 320px;
  }
  @media screen and (max-width: 979px) {
    width: 70%;
  }
`
export const Image = styled.img`
  height: 100%;
  width: 100%;

  object-position: center;
`

export const Heading = styled.p`
  font-size: 20px;
  text-align: center;
  margin: 20px 0;
`

export const SubHeading = styled.p`
  width: 280px;
  text-align: center;
  margin: auto;
  @media screen and (max-width: 979px) {
    width: 95%;
  }
`
