import styled from "styled-components"

export const Container = styled.div`
  padding: 90px 0;
  font-family: Tahoma, Verdana, Segoe, sans-serif;
`

export const Wrapper = styled.div`
  width: 1080px;
  margin: auto auto 20px auto;

  @media screen and (max-width: 1080px) {
    width: 90%;
  }
`

export const Logo = styled.div`
  width: 215px;
  height: 116.52px;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 150px;

    height: 60.52px;
  }
`

export const Para = styled.p`
  font-size: 1.2em;
  line-height: 1.6em;
  width: 485px;
  text-align: center;
  color: #939ca1;
  margin: 30px auto;
  @media screen and (max-width: 979px) {
    width: 85%;
  }
`
export const AllSteps = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 979px) {
    flex-direction: column;
    align-items: center;
    gap: 100px;
  }
`
export const StepOneAndTwo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  gap: 240px;
  @media screen and (max-width: 979px) {
    margin-top: 20px;
    gap: 100px;
  }
`
export const StepThreeAndFour = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 60px;
  @media screen and (max-width: 979px) {
    margin-top: 0px;
    gap: 100px;
  }
`
export const StepDivider = styled.div`
  @media screen and (max-width: 979px) {
    display: none;
  }
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
`
