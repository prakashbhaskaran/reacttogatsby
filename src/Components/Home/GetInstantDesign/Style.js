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



export const Features = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 100px;
  flex-wrap: wrap;
`
