import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 120px 85px;
  @media screen and (max-width: 1279px) {
    flex-direction: column;
    gap: 60px;
  }
  @media screen and (max-width: 768px) {
    padding: 60px 45px;
  }
`

export const Logo = styled.div`
  flex: 1;
  text-align: center;
  width: 422px;
  height: 392px;
  @media screen and (max-width: 1279px) {
    width: auto;
    height: auto;
  }
`

export const Details = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;

  flex: 1;
`

export const Heading = styled.div`
  color: #333333;
  font-size: 36px;
  line-height: 41px;
  @media screen and (max-width: 1279px) {
    font-size: calc(1vw + 1rem);
  }
`

export const SubHeading = styled.div`
  font-size: 16px;
  line-height: 24px;
  width: 518px;
  @media screen and (max-width: 1279px) {
    width: initial;
  }
`

export const PointContainer = styled.div`
  display: flex;
  gap: 70px;
  margin-top: 50px;
  @media screen and (max-width: 1279px) {
    flex-direction: column;
  }
`

export const LeftPoints = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  font-size: 16px;
  line-height: 21px;
`
export const RightPoints = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  font-size: 16px;
  line-height: 21px;
`

export const Point = styled.div``

export const TickSymbol = styled.span`
  padding-right: 10px;
`
