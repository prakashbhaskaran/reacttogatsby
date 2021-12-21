import React from "react"
import styled from "styled-components"
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"
const Container = styled.div`
  font-family: Tahoma, Verdana, Segoe, sans-serif;
`
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
