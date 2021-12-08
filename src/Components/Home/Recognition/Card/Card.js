import React from "react"

import { Container, Img, ImgContainer, Name } from "./Style"

const Card = ({ img, cname }) => {
  return (
    <Container>
      <ImgContainer>
        <Img>
          <img src={img} alt="" />
        </Img>
      </ImgContainer>
      <Name>{cname}</Name>
    </Container>
  )
}

export default Card
