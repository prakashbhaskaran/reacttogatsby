import styled from "styled-components"

export const Entries = styled.div`
  text-align: ${props => (props.click ? "left" : "right")};
  cursor: pointer;
  margin: 20px;
`

export const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;

  margin-top: 80px;
`
