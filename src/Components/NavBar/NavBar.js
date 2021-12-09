import React, { useState } from "react"
import {
  Container,
  Logo,
  PageLinks,
  NavLink,
  GetDesignBtn,
  Links,
  Btn,
  PageLinkAndBtnContainer,
  link,
  Icon,
} from "./Style"

import MascotLogo from "../../../static/svg/MascotLogo"

import { Link, graphql, useStaticQuery } from "gatsby"
import HamBurger from "../../../static/Icons/HamBurger"
const NavBar = () => {
  const [click, setClick] = useState(false)
  const data = useStaticQuery(graphql`
    {
      allNavbarlinksJson {
        nodes {
          name
          url
        }
      }
    }
  `)

  const handleClick = () => {
    if (click === false) setClick(true)
    else setClick(false)
  }

  const links = data.allNavbarlinksJson.nodes
  return (
    <Container>
      <Logo>
        <MascotLogo />
      </Logo>

      <PageLinkAndBtnContainer click={click}>
        <PageLinks>
          <Links>
            {links.map((item, i) => {
              return (
                <NavLink key={i} id={i}>
                  <Link to={item.url} style={link}>
                    {item.name}
                  </Link>
                </NavLink>
              )
            })}
          </Links>
        </PageLinks>
        <Btn>
          <GetDesignBtn>
            <Link to="/getdesigns" style={link}>
              Get Designs
            </Link>
          </GetDesignBtn>
        </Btn>
      </PageLinkAndBtnContainer>

      <Icon onClick={handleClick}>
        <HamBurger />
      </Icon>
    </Container>
  )
}

export default NavBar
