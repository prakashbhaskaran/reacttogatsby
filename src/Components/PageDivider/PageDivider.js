import React from "react"
import { Container, Para1, Para2, Wrapper } from "./Style"

const PageDivider = ({ para1, para2, pad ,strongtext}) => {
  return (
    <Container pad={pad}>
      <Wrapper>
        <Para1>{para1 !== "" ? `${para1}` : ""}<strong>{strongtext}</strong></Para1>
        <Para2>{para2 !== "" ? para2 : ""}</Para2>
      </Wrapper>
    </Container>
  )
}

export default PageDivider
