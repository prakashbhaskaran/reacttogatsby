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

export const CardWrap = styled.div`
  display: flex;
  align-items: start;

  margin: 80px auto auto;
  flex-wrap: wrap;
  @media screen and (max-width: 1080px) {
    justify-content: space-around;
  }
`
