import React from "react"
import {
  Container,
  Date,
  Heading,
  Image,
  ImageWrap,
  Summary,
  Wrapper,
  Details,
  BlogLink,
} from "./style"

const Card = ({ item }) => {
  return (
    <Container>
      <Wrapper>
        <ImageWrap>
          <BlogLink to={`${item.url}`}>
            <Image src={`${item.img}`} alt="" />
          </BlogLink>
        </ImageWrap>
        <Details>
          <Heading>
            <BlogLink to={`${item.url}`}>{item.heading}</BlogLink>
          </Heading>
          <Date>{item.date}</Date>
          <Summary>{item.summary}</Summary>
        </Details>
      </Wrapper>
    </Container>
  )
}

export default Card
