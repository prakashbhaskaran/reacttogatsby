import React from "react"
import {
  Container,
  Content,
  ContentImg,
  ContentText,
  ArrowContent,
} from "./Style"

const Images = () => {
  return (
    <Container>
      <Content>
        <ContentImg>
          <img
            src="/getinstantdesignimg/addyourcontent.png"
            alt=""
            width="100%"
            height="100%"
          />
        </ContentImg>
        <ContentText>Add your content</ContentText>
      </Content>
      <ArrowContent>
        <img
          src="/getinstantdesignimg/arrow.png"
          alt=""
          width="100%"
          height="100%"
        />
      </ArrowContent>
      <Content>
        <ContentImg>
          <img
            src="/getinstantdesignimg/getinstantdesigns.png"
            alt=""
            width="100%"
            height="100%"
          />
        </ContentImg>
        <ContentText>Get instant designs</ContentText>
      </Content>
    </Container>
  )
}

export default Images
