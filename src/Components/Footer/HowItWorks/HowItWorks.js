import {  graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Container, Links, List,NavLink } from "./Style"

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
              <NavLink to={`${item.url}`} >
                {item.name}
              </NavLink>
            </Links>
          )
        })}
      </List>
    </Container>
  )
}

export default HowItWorks
