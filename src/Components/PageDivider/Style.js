import styled from "styled-components"

export const Container = styled.div`
  background: linear-gradient(
    141.53deg,
    rgba(29, 214, 206, 0.08) 2.66%,
    rgba(0, 135, 215, 0.08) 50.52%,
    rgba(190, 78, 190, 0.08) 111.52%
  );

  text-align: center;
  line-height: 42px;
  padding: ${props => (!props.pad ? "60px 120px" : "60px 120px 90px 120px")};
  @media screen and (max-width: 768px) {
    padding: 60px 45px;
  }
`
export const Para1 = styled.p`
  color: #333333;
  font-size: 24px;
`
export const Para2 = styled.p`
  color: #333333;
  font-size: 24px;
`
