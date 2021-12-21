import React from "react"

import HeadAndSubHead from "../HeadAndSubHead"
import Recognition from "../Home/Recognition/Recognition"
import Steps from "./Steps"
import { Container } from "./Style"
import PageDivider from "../PageDivider/PageDivider"
const HowItWorks = () => {
  return (
    <>
      <Container>
        <HeadAndSubHead
          head={"How It Works"}
          subhead={
            "You and Sivi are the perfect team. Together, you can generate graphic much faster and at a much lower cost."
          }
        />
      </Container>

      <Steps />
      <PageDivider
        para1={
          "The new era of design is all about human + AI interaction to produce stunning creatives."
        }
      />
      <Recognition />
    </>
  )
}

export default HowItWorks
