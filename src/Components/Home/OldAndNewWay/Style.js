import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
  width: 1080px;
  margin: auto;
  padding: 120px 0;
  @media screen and (max-width: 1279px) {
    width: 100%;
    padding: 120px;
  }
  @media screen and (max-width: 979px) {
    flex-direction: column;
  }
  @media screen and (max-width: 560px) {
    flex-direction: column;
    padding: 120px 40px;
  }
`
export const DashLine = styled.div`
  border-right: 2px dashed #cad7e0;
  margin-top: 40px;
  @media screen and (max-width: 979px) {
    border-right: hidden;
    border-bottom: 2px dashed #cad7e0;
  }
`
