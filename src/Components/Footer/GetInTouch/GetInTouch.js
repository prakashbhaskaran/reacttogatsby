import { Link } from "gatsby"
import React from "react"
import { Container, Heading, Social, SubHeading, Media } from "./Style"

const GetInTouch = () => {
  const socialmedias = [
    { img: "/socialmedia/linkedin.png", url: "/" },
    { img: "/socialmedia/twitter.png", url: "/" },
    { img: "/socialmedia/instagram.png", url: "/" },
    { img: "/socialmedia/fb.png", url: "/" },
  ]
  return (
    <Container>
      <Heading>Get in touch</Heading>
      <SubHeading>Email: info@hellosivi.com</SubHeading>
      <Social>
          {socialmedias.map((item,i)=>{
              return <Media key={i}>
              <Link to={item.url}>
                <img src={item.img} alt="" />
              </Link>
            </Media>
          })}
        
      </Social>
    </Container>
  )
}

export default GetInTouch
