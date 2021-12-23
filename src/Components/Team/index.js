import React from "react"
import { CardWrapper, Container, Heading, SubHeading, Wrapper } from "./style"
import Card from "./Card"
import PageDivider from "../PageDivider/PageDivider"
import Recognition from "../Home/Recognition/Recognition"
const Team = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Heading>Meet Our Team</Heading>
          <SubHeading>
            The designers and makers who are on a mission to democratize design
            and make it accessible to everyone.
          </SubHeading>
          <CardWrapper>
            <Card />
          </CardWrapper>
        </Wrapper>
      </Container>
      <PageDivider
        para1="Interested in a job with Hellosivi? We’d love to hear from you at "
        strongtext="jobs@hellosivi.com."
      />
      <Recognition />
    </>
  )
}

export default Team
