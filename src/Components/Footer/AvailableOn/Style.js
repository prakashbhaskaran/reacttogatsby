import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
  width: 165px;
  height: 150px;

  @media screen and (max-width: 665px) {
    margin-top: 120px;
  }
`

export const Heading = styled.p`
  color: white;
  font-size: 24px;
  line-height: 29px;
`

export const Os = styled.div`
  display: flex;
  gap: 50px;
`

export const OSitem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

export const Img = styled.div`
  text-align: center;
  width: 60px;
  height: 60px;
  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`

export const Name = styled.p`
  color: white;
  text-align: center;
`
