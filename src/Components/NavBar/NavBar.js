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

import { Link } from "gatsby"
import HamBurger from "../../../static/Icons/HamBurger"
const NavBar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => {
    if (click === false) setClick(true)
    else setClick(false)
  }
  return (
    <Container>
      <Logo>
        <MascotLogo />
      </Logo>
     
        <PageLinkAndBtnContainer click={click}>
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
              <NavLink>
                <Link to="/" style={link}>
                Get Designs
                </Link>
              </NavLink>
            </Links>
          </PageLinks>
          <Btn>
            <GetDesignBtn>Get Designs</GetDesignBtn>
          </Btn>
        </PageLinkAndBtnContainer>
      
      <Icon onClick={handleClick}>
        <HamBurger />
      </Icon>
    </Container>
  )
}

export default NavBar
