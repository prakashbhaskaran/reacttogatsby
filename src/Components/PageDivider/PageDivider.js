import React from "react"
import { Container, Para1, Para2 } from "./Style"

const PageDivider = ({ para1, para2, pad }) => {
  return (
    <Container
      style={{
        padding: pad !== "Yes" ? "60px 120px" : "60px 120px 90px 120px",
      }}
    >
      <Para1>{para1 !== "" ? para1 : ""}</Para1>
      <Para2>{para2 !== "" ? para2 : ""}</Para2>
    </Container>
  )
}

export default PageDivider
