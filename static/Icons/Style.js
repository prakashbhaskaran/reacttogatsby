import styled from "styled-components"

export const Container = styled.div``

export const Line = styled.div`
  width: 25px;
  height: 3px;
  background-color: black;
  margin: 6px 0;
  cursor: pointer;
  @media screen and (max-width:768px){
    width: 20px;
  height: 2px;
  }
`
