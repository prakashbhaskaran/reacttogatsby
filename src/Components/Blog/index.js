import React from "react"
import { Container, Heading, SubHeading, Wrapper } from "../Team/style"
import { Entries, CardWrap } from "./style"
import PageDivider from "../PageDivider/PageDivider"
import Recognition from "../Home/Recognition/Recognition"
import Card from "./Card"
import { graphql, useStaticQuery } from "gatsby"

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allBloginfoJson {
        nodes {
          date
          heading
          img
          summary
          url
        }
      }
    }
  `)
  return (
    <>
      <Container>
        <Wrapper>
          <Heading>Our Blog</Heading>
          <SubHeading>
            Our thoughts and progress. Subscribe to know more about AI & design.
          </SubHeading>
          <CardWrap>
            {data.allBloginfoJson.nodes.map((item, i) => {
              return <Card key={i} item={item} />
            })}
          </CardWrap>
          <Entries click={true}>
            {true ? "New Entries >>" : "<< Old Entries"}
          </Entries>
        </Wrapper>
      </Container>
      <PageDivider para1="An image is worth 1,000 words. Be sure that yours convey a story and are worth noticing!" />
      <Recognition />
    </>
  )
}

export default Blog
