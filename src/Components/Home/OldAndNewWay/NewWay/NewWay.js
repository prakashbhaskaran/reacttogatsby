import React from "react"
import Tick from "../../../../../static/svg/Tick"
import { Point, TickSymbol } from "../../AiCompanion/Style"
import { graphql, useStaticQuery } from "gatsby"
import {
  Container,
  FeaturePoints,
  Heading,
  Img,
  NewContent,
  SubHeading,
} from "./Style"

const NewWay = () => {
  const data = useStaticQuery(graphql`
    {
      allNewwayJson {
        nodes {
          content
        }
      }
    }
  `)
  const features = data.allNewwayJson.nodes
  return (
    <Container>
      <Heading>The All New Sivi Way</Heading>
      <SubHeading>Generate designs rather than editing templates</SubHeading>
      <NewContent>
        <Img>
          <img
            src="/getinstantdesignimg/getinstantdesigns.png"
            alt=""
            width="100%"
            height="100%"
          />
        </Img>
        <FeaturePoints>
          {features.map((item, i) => {
            return (
              <Point key={i}>
                <TickSymbol>
                  <Tick />
                </TickSymbol>
                {item.content}
              </Point>
            )
          })}
        </FeaturePoints>
      </NewContent>
    </Container>
  )
}

export default NewWay
