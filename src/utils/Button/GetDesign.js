import styled from "styled-components"

export const Btn = styled.button`
  width: 250px;
  height: 54px;
  color: #ffffff;
  outline: none;
  border: hidden;
  border-radius: 40px;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.466667px;
  cursor: pointer;

  background: linear-gradient(
    96.66deg,
    #1dd6ce -7.38%,
    #0087d7 24.22%,
    #0087d7 59.39%,
    #be4ebe 107.09%
  );

  transition: all 0.3s ease;
  &:hover {
    opacity: 0.5;
  }
  @media screen and (max-width: 768px) {
    width: 200px;
    height: 50px;
  }
`
