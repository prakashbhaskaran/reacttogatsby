import styled from "styled-components"

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  align-items: center;
  gap: 20px;
  width: 145px;
  height: 171px;
  background: linear-gradient(
    141.53deg,
    rgba(29, 214, 206, 0.05) 2.66%,
    rgba(0, 135, 215, 0.05) 50.52%,
    rgba(190, 78, 190, 0.05) 111.52%
  );
  @media screen and (max-width: 979px) {
    width: 231px;
  }
`

export const CardImg = styled.div`
  width: 64px;
  height: 64px;
`

export const CardName = styled.div`
  color: #0ec2cb;
`
