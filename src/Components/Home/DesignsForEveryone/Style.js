import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  padding: 120px 0;
  @media screen and (max-width: 978px) {
    padding: 120px 30px;
  }
`

export const Heading = styled.p`
  font-size: 36px;
  line-height: 41px;
  color: #333333;
  text-align: center;
`

export const SubHeading = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #333333;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 120px;
`

export const Logo = styled.div`
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  width: 215px;
  height: 116.52px;
  @media screen and (max-width: 768px) {
    width: 150px;
    top: -30px;
    height: 60.52px;
  }
`
export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  width: 1080px;
  margin: auto;

  @media screen and (max-width: 1079px) {
    width: 100%;
  }
  @media screen and (max-width: 979px) {
    flex-wrap: wrap;
  }
`
