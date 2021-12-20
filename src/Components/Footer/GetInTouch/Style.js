import styled from "styled-components"

export const Container = styled.div`
  width: 150px;
  height: 116px;
  @media screen and (max-width: 400px) {
    width: 200px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 24px;
`
export const Heading = styled.p`
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  color: white;
`

export const SubAndSocial = styled.div`
  display: flex;
  flex-direction: column;
`
export const SubHeading = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: white;
  white-space: nowrap;
`

export const Social = styled.div`
  display: flex;

  gap: 10px;
`

export const Media = styled.div`
  margin-top: 16px;
  width: 30px;
  height: 30px;
`
