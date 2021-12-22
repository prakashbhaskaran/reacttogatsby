import { graphql, useStaticQuery } from "gatsby"
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

const Card = () => {
  const data = useStaticQuery(graphql`
    {
      allBloginfoJson {
        nodes {
          date
          heading
          img
          summary
          url
        }
      }
    }
  `)
  return (
    <Container>
      {data.allBloginfoJson.nodes.map((item, i) => {
        return (
          <Wrapper key={i}>
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
        )
      })}
    </Container>
  )
}

export default Card
