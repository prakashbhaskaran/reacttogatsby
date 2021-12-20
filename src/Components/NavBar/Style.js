import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 40px;
  align-items: center;
  top: 0;
  position: fixed;
  background-color: white;
  width: 100%;
  z-index: 1;
  height: 91px;
  @media screen and (max-width: 360px) {
    padding: 0px 20px;
  }
`
export const Logo = styled.div`
  width: 175px;
  height: 60px;
  @media screen and (max-width: 360px) {
    width: 150px;
    height: 55px;
  }
`

export const PageLinkAndBtnContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media screen and (max-width: 978px) {
    max-height: ${props => (props.click ? "400px" : "0px")};
    transition: max-height 1.5s ease;
    overflow: hidden;
    top: 90px;
    position: absolute;
    flex-direction: column;
    width: calc(100vw - 80px);
    left: 50%;
    transform: translateX(-50%);
    background: white;

    align-items: flex-start;
    box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
    -moz-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
  }
  @media screen and (max-width: 360px) {
    width: calc(100vw - 40px);
  }
`

export const PageLinks = styled.div`
  width: 100%;
  @media screen and (max-width: 978px) {
    border-top: 3px solid #1882d0;
    padding: 10px 20px 20px 20px;
  }
`
export const Links = styled.ul`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 978px) {
    flex-direction: column;
    height: auto;
    gap: 0;
  }
`
export const NavLink = styled.li`
  list-style: none;
  font-size: 14px;
  font-weight: 400;
  display: ${props => (props.id === 5 ? "none" : "initial")};
  :hover {
    color: #1882d0;
  }
  @media screen and (max-width: 978px) {
    border-bottom: 1px solid silver;
    display: ${props => (props.id ? "initial" : "none")};

    padding: 10px;
  }
`
export const link = {
  textDecoration: "inherit",
  color: "inherit",
}

export const Btn = styled.div`
  padding: 10px;
  @media screen and (max-width: 978px) {
    display: none;
  }
`
export const GetDesignBtn = styled.button`
  font-size: 14px;
  color: #1882d0;
  outline: none;
  border-radius: 40px;
  border: double 1px transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(
      to right,
      #1dd6ce 0%,
      #0087d7 27.6%,
      #0087d7 58.33%,
      #be4ebe 100%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  height: 40px;
  width: 110px;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    background: linear-gradient(
      to right,
      #1dd6ce 0%,
      #0087d7 27.6%,
      #0087d7 58.33%,
      #be4ebe 100%
    );
    color: white;
  }
`

export const Icon = styled.div`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 978px) {
    display: initial;
  }
`
