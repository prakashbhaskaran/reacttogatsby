import React from "react"
import { CardImg, CardName, CardContainer } from "./Style"

const Card = ({ cname, img }) => {
  return (
    <CardContainer>
      <CardImg>
        <img src={img} alt="Error" />
      </CardImg>
      <CardName>{cname}</CardName>
    </CardContainer>
  )
}

export default Card
