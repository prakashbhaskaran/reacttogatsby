import styled from "styled-components"

export const Container = styled.div`
  background-image: url("/footer/footerbg.png");
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
    Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 300;
`
export const Wrapper = styled.div`
  display: flex;

  gap: 140px;

  padding: 240px 0;
  align-items: flex-end;

  width: 1080px;
  margin: auto;
  @media screen and (max-width: 1279px) {
    width: 970px;
    gap: 100px;
  }
  @media screen and (max-width: 1079px) {
    width: 100%;
    gap: 40px;
    padding: 120px 120px;
  }
  @media screen and (max-width: 979px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media screen and (max-width: 645px) {
    padding: 120px 60px;
  }
  @media screen and (max-width: 320px) {
    padding: 120px 30px;
  }
`
export const AvailAndHow = styled.div`
  display: flex;

  gap: 140px;
  align-items: flex-end;
  @media screen and (max-width: 1279px) {
    gap: 80px;
  }
  @media screen and (max-width: 1079px) {
    gap: 60px;
  }
  @media screen and (max-width: 645px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const DesignAndTouch = styled.div`
  display: flex;
  gap: 140px;

  align-items: flex-end;
  @media screen and (max-width: 1279px) {
    gap: 80px;
  }
  @media screen and (max-width: 1079px) {
    gap: 60px;
  }
  @media screen and (max-width: 645px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const CopyRight = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 24px;
  color: white;
  text-align: center;
  padding-bottom: 33px;
`
