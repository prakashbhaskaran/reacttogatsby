import React from "react"
import { Container, Heading, Image, SubHeading,ImageWrapper } from "./style"

const Card = ({ img, head, subhead }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={`${img}`} alt="" />
      </ImageWrapper>
      <Heading>{head}</Heading>
      <SubHeading>{subhead}</SubHeading>
    </Container>
  )
}

export default Card
