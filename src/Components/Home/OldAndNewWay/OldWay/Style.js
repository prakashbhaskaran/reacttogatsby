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
`

export const OldContent = styled.div`
  display: flex;

  align-items: center;
  margin-top: 80px;
  gap: 36px;
  @media screen and (max-width: 1279px) {
    flex-direction: column;
  }
`

export const Img = styled.div``

export const Para = styled.p``
