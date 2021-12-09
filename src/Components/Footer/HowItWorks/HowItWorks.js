import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Container, Links, List } from "./Style"
import { link } from "../../NavBar/Style"
const HowItWorks = () => {
  const data = useStaticQuery(graphql`
    {
      allFooterhowitworkslinksJson {
        nodes {
          url
          name
        }
      }
    }
  `)
  const links = data.allFooterhowitworkslinksJson.nodes
  return (
    <Container>
      <List>
        {links.map((item, i) => {
          return (
            <Links key={i}>
              <Link to={`${item.url}`} style={link}>
                {item.name}
              </Link>
            </Links>
          )
        })}
      </List>
    </Container>
  )
}

export default HowItWorks
