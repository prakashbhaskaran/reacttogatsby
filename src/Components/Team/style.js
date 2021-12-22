import styled from "styled-components"

export const Container = styled.div`
  padding: 120px 0;
`
export const Wrapper = styled.div`
  width: 1080px;
  margin: auto;
  @media screen and (max-width: 1080px) {
    width: 90%;
  }
`

export const Heading = styled.p`
  color: #333;
  padding-bottom: 10px;
  line-height: 1em;
  font-weight: 500;
  font-size: 36px;
  text-align: center;
`

export const SubHeading = styled.p`
  padding-top: 10px;
  line-height: 1.6em;
  color: #333333;
  text-align: center;
`
export const CardWrapper = styled.div``