import styled from "styled-components"

export const Wrapper = styled.div`
  width: 1080px;
  margin: auto;

  font-family: Tahoma, Verdana, Segoe, sans-serif;
  @media screen and (max-width: 1080px) {
    width: 90%;
  }
`
export const Heading = styled.p`
  font-size: 36px;
  font-weight: 600;
  line-height: 41px;
  text-align: center;
`

export const SubHeading = styled.p`
  font-size: 18px;
  line-height: 24px;
  width: 500px;
  text-align: center;
  margin: 30px auto;
  @media screen and (max-width: 979px) {
    width: 85%;
  }
`
export const GetDesign = styled.div`
  text-align: center;
`
