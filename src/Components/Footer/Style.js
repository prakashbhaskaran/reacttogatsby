import styled from "styled-components"

export const Container = styled.div`
  background-image: url("/footer/footerbg.png");
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  padding: 120px 85px;
  display: flex;
  gap: 30px;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 978px) {
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    padding: 60px 45px;
  }
`
