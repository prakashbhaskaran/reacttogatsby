import React from "react"
import { CardWrapper, Container, Heading, SubHeading, Logo } from "./Style"

import YouAndSivi from "../../../../static/svg/YouAndSivi"

import Card from "./Card/Card"

const DesignsForEveryone = () => {
  const cardInfo = [
    {
      heading: "For Marketers",
      question: "Is creative velocity a bottle-neck for A/B testing?",
      answer: "Generate mutliple stunning designs in just a minute.",
      img: "/designforeveryone/marketer.png",
    },
    {
      heading: "For Business Owners",
      question: "Are you stuck with templates?",
      answer: "Instantly convert your text content into visual designs.",
      img: "/designforeveryone/businessowner.png",
    },
    {
      heading: "For Content Writers",
      question: "Do you have limited access to quality designs?",
      answer: "Get quality designs in 1/100th of the time and cost.",
      img: "/designforeveryone/contentwriter.png",
    },
    {
      heading: "For Designers",
      question: "Are you looking to overcome creative block?",
      answer:
        "Never run out of ideas. Generate designs and add fuel to your creative fires.",
      img: "/designforeveryone/designer.png",
    },
  ]
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
