import styled from "styled-components"

export const Container = styled.div``

export const Heading = styled.div`
  font-size: 36px;
  line-height: 41px;
  text-align: center;
`

export const SubHeading = styled.div`
  margin-top: 10px;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
`

export const OldContent = styled.div`
  display: flex;

  align-items: center;
  margin-top: 80px;
  gap: 36px;
  @media screen and (max-width: 1279px) {
    flex-direction: column;
  }
  @media screen and (max-width: 978px) {
    margin-top: 100px;
  }
`

export const Img = styled.div`
  width: 200px;
  height: 143.46px;
  @media screen and (max-width: 768px) {
  }
`

export const Para = styled.p``
