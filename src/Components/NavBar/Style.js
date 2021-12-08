import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 45px;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  width: 100%;
  z-index: 1;
  height: 91px;
`
export const Logo = styled.div`
  width: 175px;
  height: 60px;
`

export const PageLinkAndBtnContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media screen and (max-width: 978px) {
    top: 90px;
    position: absolute;
    flex-direction: column;
    width: 80vw;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    padding: 20px;
    align-items: flex-start;
    box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
    -moz-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
    border-top: 3px solid #1882d0;
  }
`
export const PageLinks = styled.div`
  width: 100%;
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

  @media screen and (max-width: 978px) {
    border-bottom: 1px solid silver;
    height: 40px;

    padding: 10px;
    :hover {
      color: #1882d0;
    }
  }
`
export const link = {
  textDecoration: "inherit",
  color: "inherit",
}

export const Btn = styled.div`
  padding: 10px;
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
  @media screen and (max-width: 978px) {
    font-size: 14px;
    color: initial;
    outline: none;
    border-radius: initial;
    border: hidden;
    background: initial;
    background-origin: none;
    background-clip: none;
    text-align: left;
    cursor: pointer;
    height: initial;
    width: 100%;

    :hover {
      background: initial;
      color: #1882d0;
    }
  }
`
