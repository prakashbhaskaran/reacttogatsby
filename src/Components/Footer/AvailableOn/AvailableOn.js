import React from "react"
import { Container, Heading, Name, Img, Os, OSitem } from "./Style"

const AvailableOn = () => {
  return (
    <Container>
      <Heading>Available on</Heading>
      <Os>
        <OSitem>
          <Img>
            <img src="/OS/macos.png" alt="" width="100%" height="100%" />
          </Img>
          <Name>macOS</Name>
        </OSitem>
        <OSitem>
          <Img>
            <img src="/OS/windows.png" alt="" width="100%" height="100%" />
          </Img>
          <Name>Windows</Name>
        </OSitem>
      </Os>
    </Container>
  )
}

export default AvailableOn
