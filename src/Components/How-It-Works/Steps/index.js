import React from "react"
import YouAndSivi from "../../../../static/svg/YouAndSivi"
import { Btn } from "../../../utils/Button/GetDesign"
import { GetDesign } from "../../HeadAndSubHead/style"
import Card from "./Card"
import {
  Container,
  Wrapper,
  Logo,
  Para,
  AllSteps,
  StepOneAndTwo,
  StepThreeAndFour,
  StepDivider,
} from "./style"
import { Image } from "./style"

const Steps = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <YouAndSivi />
        </Logo>
        <Para>
          You and Sivi together can create wonderful graphics. Here’s how you
          can work together.
        </Para>
        <AllSteps>
          <StepOneAndTwo>
            <Card
              img={"/howitworks/add-brief.png"}
              head={"1. Add Brief"}
              subhead={
                "You can add the industry, target audience, tone, and emotions that best suit your design idea."
              }
            />

            <Card
              img={"/howitworks/add-content.png"}
              head={"3. Add Content"}
              subhead={
                "You can add the text content just like you type in a word document."
              }
            />
          </StepOneAndTwo>
          <StepDivider>
            <Image src="/howitworks/hs-steps.png" alt="" />
          </StepDivider>
          <StepThreeAndFour>
            <Card
              img={"/howitworks/asset-curation.png"}
              head={"2. Asset Curation"}
              subhead={
                "Sivi would create the assets and a planner for your idea. You can add your assets as well."
              }
            />
            <Card
              img={"/howitworks/design-generation.png"}
              head={"4. Design Generation"}
              subhead={"Sivi then generates the graphics for your needs."}
            />
          </StepThreeAndFour>
        </AllSteps>
      </Wrapper>
      <GetDesign>
        <Btn>Get Instant Designs</Btn>
      </GetDesign>
    </Container>
  )
}

export default Steps
