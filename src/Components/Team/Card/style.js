import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 50px;
  @media screen and (max-width: 979px) {
    flex-direction: column;
  }
`
export const Wrapper = styled.div`
  width: 299px;
  padding: 50px 0;
  @media screen and (max-width: 979px) {
    width: 80%;
    margin: auto;
  }
`

export const ImageWrapper = styled.div`
  width: 299px;
  height: 299px;
  border: 1px solid ${props => props.colors};
  border-radius: 6px;

  @media screen and (max-width: 979px) {
    width: auto;
    height: auto;
  }
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 6px;
`
export const Name = styled.p`
  line-height: 1.3em;
  font-size: 26px;
  margin-top: 30px;
`

export const Position = styled.p`
  font-size: 1.2em;
  line-height: 1.6em;
  color: #0ec2cb;
  margin-top: 10px;
`

export const Summary = styled.p`
  color: #939ca1;
  line-height: 1.6em;
  font-size: 1.2em;
  margin-top: 10px;
`

export const Icons = styled.div``
