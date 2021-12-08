import React from "react"
import {
  NavContainer,
  NavLogo,
  NavPageLinks,
  NavLink,
  NavGetDesignBtn,
  NavLinks,
  NavBtn,
  NavPageLinkAndBtnContainer,

  link,
} from "./Style"

import MascotLogo from "../../../static/svg/MascotLogo"

import { Link } from "gatsby"
const NavBar = () => {
  return (
    <NavContainer>
      
        <NavLogo>
          <MascotLogo />
        </NavLogo>
      
      <NavPageLinkAndBtnContainer>
        <NavPageLinks>
          <NavLinks>
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
          </NavLinks>
        </NavPageLinks>
        <NavBtn>
          <NavGetDesignBtn>Get Designs</NavGetDesignBtn>
        </NavBtn>
      </NavPageLinkAndBtnContainer>
    </NavContainer>
  )
}

export default NavBar
