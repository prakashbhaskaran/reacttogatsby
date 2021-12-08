import React from "react"
import Card from "./Card/Card"
import { Cards, Container, Heading } from "./Style"

const Recognition = () => {
  const cardInfo = [
    { img: "/recognitions/recog1.png", cname: "NASSCOM 10k Startups" },
    { img: "/recognitions/recog2.png", cname: "Top 5 NTLF Super Startups" },
    { img: "/recognitions/recog3.png", cname: "One of KTech Elevate Winners" },
  ]
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
