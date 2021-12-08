import styled from "styled-components"

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 45px;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  width: 100%;
  z-index: 1;
`
export const NavLogo = styled.div`
  width: 175px;
  height: 60px;
`

export const NavPageLinkAndBtnContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`
export const NavPageLinks = styled.div``
export const NavLinks = styled.ul`
  display: flex;
  gap: 20px;
`
export const NavLink = styled.li`
  list-style: none;
  font-size: 14px;
  font-weight: 400;
`
export const link = {
  textDecoration: "inherit",
  color: "inherit",
}

export const NavBtn = styled.div``
export const NavGetDesignBtn = styled.button`
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
`
