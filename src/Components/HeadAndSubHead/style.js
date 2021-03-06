import styled from "styled-components"

export const Wrapper = styled.div`
  width: 1080px;
  margin: auto;

  @media screen and (max-width: 1080px) {
    width: 90%;
  }
`
export const Heading = styled.p`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.4em;
  text-align: center;
`

export const SubHeading = styled.p`
  font-size: 1.1em;
  line-height: 1.6em;
  width: 512px;
  text-align: center;
  color: #333333;
  margin: 30px auto;
  @media screen and (max-width: 979px) {
    width: 85%;
  }
`
export const GetDesign = styled.div`
  text-align: center;
`
