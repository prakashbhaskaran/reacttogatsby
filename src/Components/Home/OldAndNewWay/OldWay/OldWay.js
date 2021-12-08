import React from "react"
import { Container, Heading, Img, OldContent, Para, SubHeading } from "./Style"
import OldWay1 from "../../../../../static/svg/OldWay1"
import OldWay2 from "../../../../../static/svg/OldWay2"
import OldWay3 from "../../../../../static/svg/OldWay3"
const OldWay = () => {
  return (
    <Container>
      <Heading>The Old Way</Heading>
      <SubHeading>Stuck with templates and design editing tools</SubHeading>
      <OldContent>
        <Img>
          <OldWay1 />
        </Img>
        <Para>
          Trying to find the right template; just like looking for a needle in a
          haystack.
        </Para>
      </OldContent>
      <OldContent>
        <Img>
          <OldWay2 />
        </Img>
        <Para>Forcefully adapting the content for the chosen template.</Para>
      </OldContent>
      <OldContent>
        <Img>
          <OldWay3 />
        </Img>
        <Para>
          Wasting a lot of time in editing the template to match your brand
          style.
        </Para>
      </OldContent>
    </Container>
  )
}

export default OldWay
