import styled from "styled-components"

export const Entries = styled.div`
  text-align: ${props => (props.click ? "left" : "right")};
  cursor: pointer;
  margin-top: 20px;
`

export const CardWrap = styled.div`
  margin: auto;
`
