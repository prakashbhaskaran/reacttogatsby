import styled from "styled-components"

export const Entries = styled.div`
  text-align: ${props => (props.click ? "left" : "right")};

  margin: 20px;
`
export const EntriesButton = styled.button`
  outline: none;
  border: hidden;
  background: transparent;
  cursor: pointer;
`

export const Container = styled.div`
  padding: 120px 0;
`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: auto;

  @media screen and (max-width: 1080px) {
    width: 90%;
  }
`
export const CardWrap = styled.div`
  margin-top: 80px;
  display: grid;
  justify-content: center;
  grid-template-columns: 313px 313px 313px;

  @media screen and (max-width: 1080px) {
    grid-template-columns: auto auto auto;
  }
  @media screen and (max-width: 978px) {
    grid-template-columns: auto auto;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 313px;
  }
`
