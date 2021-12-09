import { graphql, useStaticQuery } from "gatsby"
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
  const data = useStaticQuery(graphql`
    query MyQuery {
      allLeftpointsJson {
        nodes {
          point
        }
      }
      allRightpointsJson {
        nodes {
          point
        }
      }
    }
  `)
  const leftpoints = data.allLeftpointsJson.nodes
  const rightpoints = data.allRightpointsJson.nodes

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

