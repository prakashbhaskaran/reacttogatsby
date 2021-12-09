import React from "react"
import { CardWrapper, Container, Heading, SubHeading, Logo } from "./Style"

import YouAndSivi from "../../../../static/svg/YouAndSivi"

import Card from "./Card/Card"
import { graphql, useStaticQuery } from "gatsby"

const DesignsForEveryone = () => {
  const data = useStaticQuery(graphql`
    {
      allDesignforeveryonecardinfoJson {
        nodes {
          img
          heading
          answer
          question
        }
      }
    }
  `)

  const cardInfo = data.allDesignforeveryonecardinfoJson.nodes
  return (
    <Container>
      <Logo>
        <YouAndSivi />
      </Logo>
      <Heading>Designs For Everyone</Heading>
      <SubHeading>In just a minute</SubHeading>
      <CardWrapper>
        {cardInfo.map((card, i) => {
          return (
            <Card
              key={i}
              heading={card.heading}
              question={card.question}
              answer={card.answer}
              img={`${card.img}`}
            />
          )
        })}
      </CardWrapper>
    </Container>
  )
}

export default DesignsForEveryone
