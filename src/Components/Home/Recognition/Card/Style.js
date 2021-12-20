import styled from "styled-components"

export const Container = styled.div`
  height: 110px;
  width: 230px;
  @media screen and (max-width: 320px) {
    width: 100%;
    padding: 0px 20px;
  }
`
export const ImgContainer = styled.div`
  background: linear-gradient(
    141.53deg,
    rgba(29, 214, 206, 0.05) 2.66%,
    rgba(0, 135, 215, 0.05) 50.52%,
    rgba(190, 78, 190, 0.05) 111.52%
  );
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9px;
`
export const Img = styled.div``

export const Name = styled.div`
  text-align: center;
  margin-top: 16px;
`
