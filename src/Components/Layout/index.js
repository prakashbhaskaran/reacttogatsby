import React from "react"
import { Container } from "./style"
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"

const Layout = ({ children }) => {
  return (
    <Container>
      <NavBar />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
