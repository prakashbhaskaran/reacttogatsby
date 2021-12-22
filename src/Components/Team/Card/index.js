import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import {
  Container,
  Icons,
  Image,
  ImageWrapper,
  Name,
  Position,
  Summary,
  Wrapper,
} from "./style"

const Card = () => {
  const data = useStaticQuery(graphql`
    {
      allTeaminfoJson {
        nodes {
          img
          name
          position
          summary
          color
        }
      }
    }
  `)
  return (
    <Container>
      {data.allTeaminfoJson.nodes.map((item, i) => {
        return (
          <Wrapper key={i}>
            <ImageWrapper colors={item.color}>
              <Image src={`${item.img}`} alt="" />
            </ImageWrapper>
            <Name>{item.name}</Name>
            <Position>{item.position}</Position>

            <Summary>{item.summary}</Summary>

            <Icons></Icons>
          </Wrapper>
        )
      })}
    </Container>
  )
}

export default Card
