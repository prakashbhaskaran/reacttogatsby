import styled from "styled-components"

export const Container = styled.div`
  width: 1080px;
  margin: auto;
  padding: 120px 0;
  @media screen and (max-width: 1080px) {
    width: 100%;
  }
`
export const Heading = styled.p`
  font-size: 36px;
  line-height: 41px;
  text-align: center;
`

export const Cards = styled.div`
  display: flex;
  margin-top: 60px;
  gap: 60px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 979px) {
    flex-direction: column;
    gap: 100px;
  }
`
