import React from "react"
import {
  // Container,
  Date,
  Heading,
  Image,
  ImageWrap,
  Summary,
  Wrapper,
  BlogLink,
} from "./style"

const Card = ({ item }) => {
  return (
    <Wrapper>
      <ImageWrap>
        <BlogLink to="/">
          <Image src={`${item.img}`} alt="" loading="lazy" />
        </BlogLink>
      </ImageWrap>

      <Heading>
        <BlogLink to="/">{item.heading}</BlogLink>
      </Heading>
      <Date>{item.date}</Date>
      <Summary>{item.summary}</Summary>
    </Wrapper>
  )
}

export default Card
