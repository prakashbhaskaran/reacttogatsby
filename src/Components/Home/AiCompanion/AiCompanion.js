import React from "react"
import SiviLogo from "../../../../static/svg/SiviLogo"
import Tick from "../../../../static/svg/Tick"
import {
  Container,
  Details,
  Heading,
  LeftPoints,
  Point,
  PointContainer,
  RightPoints,
  SubHeading,
  Logo,
  TickSymbol,
} from "./Style"
const AiCompanion = () => {
  const leftpoints = [
    { point: "Original, template-free designs" },
    { point: "High conversion rates" },
    { point: "Faster turn-around time" },
  ]
  const rightpoints = [
    { point: "No co-ordination hassle" },
    { point: "Multiple design options" },
    { point: "At a fraction of the cost" },
  ]
  return (
    <Container>
      <Logo>
        <SiviLogo />
      </Logo>

      <Details>
        <Heading>Sivi, Your AI Design Companion</Heading>
        <SubHeading>
          Sivi gathers input like a human, curates relevant assets, and
          generates designs adhering to visual design principles.
        </SubHeading>
        <PointContainer>
          <LeftPoints>
            {leftpoints.map((item, i) => {
              return (
                <Point key={i}>
                  <TickSymbol>
                    <Tick />
                  </TickSymbol>
                  {item.point}
                </Point>
              )
            })}
          </LeftPoints>
          <RightPoints>
            {rightpoints.map((item, i) => {
              return (
                <Point key={i}>
                  <TickSymbol>
                    <Tick />
                  </TickSymbol>
                  {item.point}
                </Point>
              )
            })}
          </RightPoints>
        </PointContainer>
      </Details>
    </Container>
  )
}

export default AiCompanion
