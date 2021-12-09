import React from "react"
import {
  CardAnswer,
  CardContainer,
  CardHeading,
  CardImg,
  CardQuestion,
  CardWrapper,
} from "./Style"

const Card = ({ heading, question, answer, img }) => {
  return (
    <CardContainer>
      <CardImg>
        <img src={img} alt="" width="100%" height="100%"/>
      </CardImg>
      <CardWrapper>
        <CardHeading>{heading}</CardHeading>
        <CardQuestion>{question}</CardQuestion>
        <CardAnswer>{answer}</CardAnswer>
      </CardWrapper>
    </CardContainer>
  )
}

export default Card
