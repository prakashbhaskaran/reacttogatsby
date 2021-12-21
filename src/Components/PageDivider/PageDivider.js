import React from "react"
import { Container, Para1, Para2,Wrapper } from "./Style"

const PageDivider = ({ para1, para2, pad }) => {
  return (
    <Container pad={pad}>
      <Wrapper>
      <Para1>{para1 !== "" ? para1 : ""}</Para1>
      <Para2>{para2 !== "" ? para2 : ""}</Para2>
      </Wrapper>
    </Container>
  )
}

export default PageDivider
