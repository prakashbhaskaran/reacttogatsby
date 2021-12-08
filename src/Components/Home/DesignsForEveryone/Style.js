import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  padding: 120px 85px;
  @media screen and (max-width: 768px) {
    padding: 60px 45px;
  }
`

export const Heading = styled.div`
  font-size: 36px;
  line-height: 41px;
  color: #333333;
  text-align: center;
`

export const SubHeading = styled.div`
  font-size: 16px;
  line-height: 21px;
  color: #333333;
  text-align: center;
  margin-top: 10px;
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
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 120px;
`
