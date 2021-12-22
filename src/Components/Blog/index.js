import React from "react"
import { Container, Heading, SubHeading, Wrapper } from "../Team/style"
import PageDivider from "../PageDivider/PageDivider"
import Recognition from "../Home/Recognition/Recognition"
import Card from "./Card"
const Blog = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Heading>Our Blog</Heading>
          <SubHeading>
            Our thoughts and progress. Subscribe to know more about AI & design.
          </SubHeading>

          <Card />
        </Wrapper>
      </Container>
      <PageDivider para1="An image is worth 1,000 words. Be sure that yours convey a story and are worth noticing!" />
      <Recognition />
    </>
  )
}

export default Blog
