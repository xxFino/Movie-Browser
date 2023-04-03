import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as VideoIcon } from "./video.svg";

const activeClassName = "active";

export const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: #18181b;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -1.5px;
  display: flex;
  justify-content: left;
`;

export const StyledVideoIcon = styled(VideoIcon)`
  margin: 0;
  padding: 0;
`;

export const NavBar = styled.nav`
  margin: 0 auto;
  flex-basis: 1368px;
  height: 94px;
  display: grid;
  grid-template-columns: auto auto;
  align-content: center;
  justify-content: space-between;
  color: #ffffff;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

export const NavItem = styled.li`
  list-style: none;
`;
export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  color: #ffffff;
  list-style: none;
`;

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