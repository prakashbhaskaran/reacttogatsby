import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 60px;

  border-bottom: ${props =>
    props.id === 3 ? "transparent" : "1px solid rgba(0, 0, 0, 0.1)"};
  padding: 120px 0;
  @media screen and (max-width: 979px) {
    flex-direction: column;
  }
`
export const ImageWrapper = styled.div`
  width: 388px;
  height: 335px;
  @media screen and (max-width: 979px) {
    width: auto;
    height: auto;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const Details = styled.div``

export const Head = styled.p`
  width: 440px;
  font-size: 36px;
  line-height: 1.7em;

  @media screen and (max-width: 979px) {
    width: 95%;
    margin: auto;
  }
`

export const Para = styled.p`
  margin-top: 20px;
  color: #939ca1;
  width: 480px;
  line-height: 1.6em;
  font-size: 1.2em;
  @media screen and (max-width: 979px) {
    width: 95%;
    margin: auto;
  }
`
