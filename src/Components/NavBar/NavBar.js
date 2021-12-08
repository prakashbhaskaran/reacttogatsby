import React from "react"
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
} from "./Style"

import MascotLogo from "../../../static/svg/MascotLogo"

import { Link } from "gatsby"
const NavBar = () => {
  return (
    <Container>
      
        <Logo>
          <MascotLogo />
        </Logo>
      
      <PageLinkAndBtnContainer>
        <PageLinks>
          <Links>
            <NavLink>
              <Link to="/" style={link}>
                Home
              </Link>
            </NavLink>
            <NavLink>
              <Link to="/" style={link}>
                How It Works
              </Link>
            </NavLink>
            <NavLink>
              <Link to="/" style={link}>
                Tour
              </Link>
            </NavLink>
            <NavLink>
              <Link to="/" style={link}>
                Team
              </Link>
            </NavLink>
            <NavLink>
              <Link to="/" style={link}>
                Blog
              </Link>
            </NavLink>
          </Links>
        </PageLinks>
        <Btn>
          <GetDesignBtn>Get Designs</GetDesignBtn>
        </Btn>
      </PageLinkAndBtnContainer>
    </Container>
  )
}

export default NavBar
