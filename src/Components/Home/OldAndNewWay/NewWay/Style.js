import styled from "styled-components"

export const Container = styled.div``

export const Heading = styled.div`
  font-size: 36px;
  line-height: 41px;
  text-align: center;
  @media screen and (max-width: 1279px) {
    font-size: calc(1vw + 1rem);
  }
`

export const SubHeading = styled.div`
  margin-top: 10px;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  margin-bottom: 60px;
`
export const NewContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Img = styled.div`
  width: 480px;
  height: 410px;
  @media screen and (max-width: 978px) {
    width: auto;
    height: auto;
  }
`
export const FeaturePoints = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
`
