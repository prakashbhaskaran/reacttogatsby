import { Link } from "gatsby"
import styled from "styled-components"

export const Container = styled.div``

export const List = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  width: 200px;
  height: 128px;
`

export const Links = styled.p`
  color: white;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
`
export const NavLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;
`
