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

  const links = [
    { url: "/home", name: "Home" },
    { url: "/howitworks", name: "How It Works" },
    { url: "/tour", name: "Tour" },
    { url: "/team", name: "Team" },
    { url: "/blog", name: "Blog" },
    { url: "/getdesigns", name: "Get Designs" },
  ]
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
