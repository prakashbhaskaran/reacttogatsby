import { Link } from "gatsby"
import React from "react"
import {
  Container,
  Heading,
  Social,
  SubHeading,
  Media,
  Wrapper,
  SubAndSocial,
} from "./Style"

const GetInTouch = () => {
  const socialmedias = [
    { img: "/socialmedia/linkedin.png", url: "/" },
    { img: "/socialmedia/twitter.png", url: "/" },
    { img: "/socialmedia/instagram.png", url: "/" },
    { img: "/socialmedia/fb.png", url: "/" },
  ]
  return (
    <Container>
      <Wrapper>
        <Heading>Get in touch</Heading>
        <SubAndSocial>
          <SubHeading>Email: info@hellosivi.com</SubHeading>
          <Social>
            {socialmedias.map((item, i) => {
              return (
                <Media key={i}>
                  <Link to={item.url}>
                    <img src={item.img} width="100%" height="100%" alt="" />
                  </Link>
                </Media>
              )
            })}
          </Social>
        </SubAndSocial>
      </Wrapper>
    </Container>
  )
}

export default GetInTouch
