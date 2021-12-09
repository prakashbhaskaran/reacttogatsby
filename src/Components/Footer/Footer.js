import React from "react"
import AvailableOn from "./AvailableOn/AvailableOn"
import GetDesign from "./GetDesign/GetDesign"
import GetInTouch from "./GetInTouch/GetInTouch"
import HowItWorks from "./HowItWorks/HowItWorks"
import { Container } from "./Style"

const Footer = () => {
  return (
    <Container> 
      <AvailableOn />
      <HowItWorks />
      <GetDesign />
      <GetInTouch />
    </Container>
  )
}

export default Footer
