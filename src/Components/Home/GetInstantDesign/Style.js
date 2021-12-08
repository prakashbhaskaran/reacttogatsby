import styled from "styled-components"

export const Container = styled.div`
  padding: 120px 85px;
  position: relative;
  @media screen and (max-width: 768px) {
    padding: 60px 45px;
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
  @media screen and (max-width: 1279px) {
    font-size: calc(1vw + 1rem);
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
export const Blob1 = styled.img`
  position: absolute;
  right: 0;
  top: 5px;
  opacity: 0.7;
  z-index: -1;
`
export const Blob2 = styled.img`
  position: absolute;
  left: 0;
  top: 5px;
  opacity: 0.7;
  top: 25%;
  z-index: -1;
`
