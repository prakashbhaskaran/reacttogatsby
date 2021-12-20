import React from "react"
import AvailableOn from "./AvailableOn/AvailableOn"
import GetDesign from "./GetDesign/GetDesign"
import GetInTouch from "./GetInTouch/GetInTouch"
import HowItWorks from "./HowItWorks/HowItWorks"
import {
  Container,
  Wrapper,
  AvailAndHow,
  DesignAndTouch,
  CopyRight,
} from "./Style"

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <AvailAndHow>
          <AvailableOn />
          <HowItWorks />
        </AvailAndHow>
        <DesignAndTouch>
          <GetDesign />
          <GetInTouch />
        </DesignAndTouch>
      </Wrapper>
      <CopyRight>Copyright © 2020-21 HelloSivi</CopyRight>
    </Container>
  )
}

export default Footer
