import React from "react"
import AvailableOn from "./AvailableOn/AvailableOn"
import HowItWorks from "./HowItWorks/HowItWorks"
import { Container } from "./Style"

const Footer = () => {
  return (
    <Container>
      <AvailableOn />
      <HowItWorks/>
    </Container>
  )
}

export default Footer
