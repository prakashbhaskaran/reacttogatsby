import React from "react"
import PageDivider from "../PageDivider/PageDivider"
import AiCompanion from "./AiCompanion/AiCompanion"
import DesignsForEveryone from "./DesignsForEveryone/DesignsForEveryone"
import GetInstantDesign from "./GetInstantDesign/GetInstantDesign"
import NavBar from "../NavBar/NavBar"
import OldAndNewWay from "./OldAndNewWay/OldAndNewWay"

const HomeIndex = () => {
  return (
    <div>
      <NavBar />
      <GetInstantDesign />
      <PageDivider
        para1={
          "Are you a business owner, marketer, content writer or a designer? Join the new revolution in design where humans and AI interact to produce stunning creatives."
        }
      />
      <AiCompanion />
      <PageDivider
        para1={"In a world full of distraction, grabbing attention is key."}
        para2={"A great way to do so is by creating visuals that stand out."}
        pad={"Yes"}
      />
      <DesignsForEveryone />
      <PageDivider
        para1={"No design skills? No problem."}
        para2={
          "You can now create beautiful designs without having to be a designer."
        }
      />
      <OldAndNewWay />
      <PageDivider
        para1={"No more sifting through design templates."}
        para2={" Sivi generates unique and stunning graphics for your content."}
      />
    </div>
  )
}

export default HomeIndex
