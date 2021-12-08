import styled from "styled-components"

export const Container = styled.div`
  padding: 120px 85px;
  display: flex;
  gap: 60px;
  justify-content: center;
  @media screen and (max-width: 1279px) {
    flex-direction: column;
  }
`
export const DashLine = styled.div`
  border-right: 2px dashed #cad7e0;
  margin-top: 40px;
  @media screen and (max-width: 1279px) {
    border-right: hidden;
    border-bottom: 2px dashed #cad7e0;
  }
`
