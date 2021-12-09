import React from "react"
import Images from "./Images/Images"
import { graphql, useStaticQuery } from "gatsby"
import {
  Btn,
  Container,
  HeadAndBtn,
  Heading,
  SubHeading,
  Features,
  Blob1,
  Blob2,
} from "./Style"
import Card from "./Card/Card"

const GetInstantDesign = () => {
  const data = useStaticQuery(graphql`
    {
      allGetinstantdesigncardinfoJson {
        nodes {
          cname
          img
        }
      }
    }
  `)
  const cardInfo = data.allGetinstantdesigncardinfoJson.nodes

  return (
    <Container>
      <Blob1 src="/homeblob/blob.png" alt=""></Blob1>
      <Blob2 src="/homeblob/blob2.png" alt=""></Blob2>
      <HeadAndBtn>
        <Heading>Generate instant graphic designs.</Heading>

        <SubHeading>
          Instantly convert your text content into visual designs for your
          campaigns, product banners, website content, ads, email newsletters,
          and more in 1/100th of the time and cost.
        </SubHeading>

        <Btn>Get Instant Designs</Btn>
      </HeadAndBtn>
      <Images />
      <Features>
        {cardInfo.map((card, i) => {
          return <Card key={i} cname={card.cname} img={`${card.img}`} />
        })}
      </Features>
    </Container>
  )
}

export default GetInstantDesign
