import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import {
  Container,
  Details,
  Head,
  Image,
  ImageWrapper,
  Para,
  Wrapper,
} from "./style"

const Card = () => {
  const data = useStaticQuery(graphql`
    {
      allTourstepsinfoJson {
        nodes {
          para
          head
          img
        }
      }
    }
  `)
  return (
    <Container>
      {data.allTourstepsinfoJson.nodes.map((item, i) => {
        return (
          <Wrapper key={i} id={i}>
            <ImageWrapper>
              <Image src={`${item.img}`} alt="" />
            </ImageWrapper>
            <Details>
              <Head>{item.head}</Head>
              <Para>{item.para}</Para>
            </Details>
          </Wrapper>
        )
      })}
    </Container>
  )
}

export default Card
