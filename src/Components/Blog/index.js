import React, { useState } from "react"
import { Container, Heading, SubHeading, Wrapper } from "../Team/style"
import { Entries, CardWrap, EntriesButton } from "./style"
import PageDivider from "../PageDivider/PageDivider"
import Recognition from "../Home/Recognition/Recognition"
import Card from "./Card"
import { graphql, navigate, useStaticQuery } from "gatsby"

const Blog = () => {
  const [currentPage, setCurrent] = useState(1)
  const [paginationEnd, setPaginationEnd] = useState(false)
  const itemsPerPage = 12
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

  const indexOflastitem = currentPage * itemsPerPage
  const indexOffirstitem = indexOflastitem - itemsPerPage
  const currentItems = data.allBloginfoJson.nodes.slice(
    indexOffirstitem,
    indexOflastitem
  )
  const handleEntires = () => {
    if (currentItems.length === itemsPerPage) {
      setCurrent(currentPage + 1)
      setPaginationEnd(true)
    } else if (currentItems.length < itemsPerPage) {
      setCurrent(currentPage - 1)
      setPaginationEnd(false)
    } else {
      return
    }
    navigate("/blog")
  }

  return (
    <>
      <Container>
        <Wrapper>
          <Heading>Our Blog</Heading>
          <SubHeading>
            Our thoughts and progress. Subscribe to know more about AI & design.
          </SubHeading>
          <CardWrap id="box">
            {currentItems.map((item, i) => {
              return <Card key={i} item={item} />
            })}
          </CardWrap>
          <Entries click={!paginationEnd}>
            <EntriesButton onClick={handleEntires}>
              {paginationEnd ? "New Entries >>" : "<< Old Entires"}
            </EntriesButton>
          </Entries>
        </Wrapper>
      </Container>
      <PageDivider para1="An image is worth 1,000 words. Be sure that yours convey a story and are worth noticing!" />
      <Recognition />
    </>
  )
}

export default Blog
