import styled from "styled-components"

export const Container = styled.div`
  background-image: url("/homeblob/homebg.png");
  background-size: contain;
  background-repeat: no-repeat;
`

export const Wrapper = styled.div`
  padding: 120px 0;
  width: 1080px;
  margin: auto;
  @media screen and (max-width: 1079px) {
    width: 90%;
  }
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
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`

export const SubHeading = styled.div`
  font-size: 20px;
  line-height: 30px;
  color: #333333;
  width: 80%;
  @media screen and (max-width: 979px) {
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
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.5;
  }
  @media screen and (max-width: 768px) {
    width: 200px;
    height: 50px;
  }
`

export const Features = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 100px;
  flex-wrap: wrap;
`
