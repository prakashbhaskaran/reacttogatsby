import React from "react"
import { Btn } from "../../utils/Button/GetDesign"
import { Wrapper, Heading, SubHeading, GetDesign } from "./style"
const HeadAndSubHead = ({ head, subhead }) => {
  return (
    <Wrapper>
      <Heading>{head}</Heading>
      <SubHeading>{subhead}</SubHeading>
      <GetDesign>
        <Btn>Get Instant Designs</Btn>
      </GetDesign>
    </Wrapper>
  )
}

export default HeadAndSubHead
