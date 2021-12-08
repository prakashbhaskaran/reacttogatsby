import { Link } from "gatsby"
import React from "react"
import { Container, Links, List } from "./Style"
import {link} from "../../NavBar/Style"
const HowItWorks = () => {
  const links = [
    { url: "/howitworks", name: "How It Works" },
    { url: "/tour", name: "Tour" },
    { url: "/tour", name: "Team" },
    { url: "/privacypolicy", name: "Privacy Policy and Terms Of Use" },
  ]
  return (
    <Container>
      <List>
        {links.map((item, i) => {
          return (
            <Links key={i}>
              <Link to={`${item.url}`} style={link}>{item.name}</Link>
            </Links>
          )
        })}
      </List>
    </Container>
  )
}

export default HowItWorks
