import styled from "styled-components"

export const CardContainer = styled.div`
  width: 240px;
  height: 253px;
  background: linear-gradient(
    141.53deg,
    rgba(29, 214, 206, 0.05) 2.66%,
    rgba(0, 135, 215, 0.05) 50.52%,
    rgba(190, 78, 190, 0.05) 111.52%
  );
  border-radius: 9px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 1079px) {
    width: 300px;
  }
  @media screen and (max-width: 360px) {
    height: 260px;
  }
`

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`
export const CardHeading = styled.div`
  font-size: 20px;
  line-height: 24px;
  color: #0ec2cb;
  padding-top: 76px;
`
export const CardQuestion = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #333333;
  font-weight: 700;
  padding: 0px 20px;
`
export const CardAnswer = styled.div`
  font-size: 16px;
  line-height: 21px;
  color: #333333;
  padding: 0px 20px;
  padding-bottom: 45px;
`

export const CardImg = styled.div`
  position: absolute;
  top: -25%;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 120px;

  @media screen and (max-width: 360px) {
    width: 100px;
    height: 100px;
    top: -20%;
  }
`
