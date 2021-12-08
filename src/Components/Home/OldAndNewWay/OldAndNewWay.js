import React from "react"
import NewWay from "./NewWay/NewWay"
import OldWay from "./OldWay/OldWay"
import { Container, DashLine } from "./Style"

const OldAndNewWay = () => {
  return (
    <Container>
      <OldWay />
      <DashLine></DashLine>
      <NewWay />
    </Container>
  )
}

export default OldAndNewWay
