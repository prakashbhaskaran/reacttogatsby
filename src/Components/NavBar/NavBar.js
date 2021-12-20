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
  Icon,
} from "./Style"

import MascotLogo from "../../../static/svg/MascotLogo"

import { graphql, useStaticQuery } from "gatsby"
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
                <NavLink key={i} id={i} to={item.url}>
                  {item.name}
                </NavLink>
              )
            })}
          </Links>
        </PageLinks>
        <Btn>
          <GetDesignBtn>
            <NavLink to="/getdesigns">Get Designs</NavLink>
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
