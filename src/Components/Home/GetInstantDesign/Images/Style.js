import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 76px;
  @media screen and (max-width: 1279px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ArrowContent = styled.div`
  margin-top: 100px;
  width: 71px;
  height: 71px;
  @media screen and (max-width: 1279px) {
    display: none;
  }
`
export const Content = styled.div``
export const ContentImg = styled.div`
  width: 455px;
  height: 390px;
`
export const ContentText = styled.div`
  text-align: center;
  font-size: 36px;
  line-height: 43px;
  color: #cad7e0;
`
