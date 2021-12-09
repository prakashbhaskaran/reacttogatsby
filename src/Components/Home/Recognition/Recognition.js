import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Card from "./Card/Card"
import { Cards, Container, Heading } from "./Style"

const Recognition = () => {
  const data = useStaticQuery(graphql`
    {
      allRecognitioncardinfoJson {
        nodes {
          img
          cname
        }
      }
    }
  `)
  const cardInfo = data.allRecognitioncardinfoJson.nodes
  return (
    <Container>
      <Heading>Recognitions</Heading>
      <Cards>
        {cardInfo.map((item, i) => {
          return <Card key={i} img={`${item.img}`} cname={item.cname} />
        })}
      </Cards>
    </Container>
  )
}

export default Recognition
