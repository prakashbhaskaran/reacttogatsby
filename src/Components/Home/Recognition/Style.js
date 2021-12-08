import styled from "styled-components"

export const Container = styled.div`
  padding: 120px 85px;
 
`
export const Heading = styled.div`
  font-size: 36px;
  line-height: 41px;
  text-align: center;
  @media screen and (max-width: 1279px) {
    font-size: calc(1vw + 1.2rem);
  }
`

export const Cards = styled.div`
  display: flex;
  margin-top: 60px;
  gap: 60px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1279px) {
    flex-direction: column;
  }
`
