import { NavLink } from "react-router-dom"
import styled from "styled-components"

const activeClassName = "active";

export const NavBar = styled.nav`
width: 100%;
height: 94px;
background: #18181B;

`
export const NavList = styled.ul`
list-style: none;
display: flex;
`

export const NavItem = styled.li`

`
export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
  }))`
  color: #ffffff;
  `
