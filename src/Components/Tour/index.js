import React from "react"
import { Container } from "./style"
import HeadAndSubHead from "../HeadAndSubHead"
import TourDetails from "./TourDetails"
import PageDivider from "../PageDivider/PageDivider"
import Recognition from "../Home/Recognition/Recognition"
const Tour = () => {
  return (
    <>
      <Container>
        <HeadAndSubHead
          head={"Tour De Sivi"}
          subhead={
            "Take a sneak peek at the popular features of Sivi and know how it’ll help with your creative needs."
          }
        />
      </Container>
      <TourDetails />
      <PageDivider
        para1={
          "You can easily add your brand colors, fonts, logo, target audience, and industry to the brandkit. Sivi will use them and create designs that fit your brand."
        }
      />
      <Recognition />
    </>
  )
}

export default Tour
