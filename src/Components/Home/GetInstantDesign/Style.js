import styled from "styled-components"

export const Container = styled.div`
  padding: 120px 85px;
`

export const HeadAndBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 30px;
`

export const Heading = styled.div`
  font-weight: bold;
  font-size: 52px;
  line-height: 63px;
  color: #000000;
  @media screen and (max-width: 1279px) {
    font-size: calc(1vw + 0.7rem);
  }
`

export const SubHeading = styled.div`
  font-size: 20px;
  line-height: 30px;
  color: #333333;
  width: 870px;
  @media screen and (max-width: 1279px) {
    width: initial;
    font-size: 16px;
  }
`

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
  &:hover {
    opacity: 0.5;
  }
`

export const Features = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 100px;
  flex-wrap: wrap;
`
