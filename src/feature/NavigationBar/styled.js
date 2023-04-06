import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as VideoIcon } from "./video.svg";

const activeClassName = "active";

export const Header = styled.header`
  //position: fixed;
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
  margin: 0;
  padding: 0;

  @media (max-width: 1025px) {
    margin: 0;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const StyledVideoIcon = styled(VideoIcon)`
  margin: 27px 16px;
  padding: 0;

  @media (max-width: 776px) {
    margin: auto;
    width: auto;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
  }
`;

export const NavBar = styled.nav`
  margin: 0 auto;
  flex-basis: 1368px;
  min-height: 94px;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;


  @media (max-width: 776px) {
    grid-template-columns: auto;
    justify-content: center;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 64px;
  align-items: center;

  @media (max-width: 1025px) {
    gap: 34px;
  }

  @media (max-width: 480px) {
    margin-top: 18px;
  }
`;

export const NavItem = styled.li`
  gap: 12px;
`;

export const StyledNavLinkTitle = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    color: #ddd;
  }

  &:active {
    color: #ffffff;
  }
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  display: flex;
  align-items: center;

  &:hover {
    color: #ddd;
  }

  &:active {
    color: #ffffff;
  }

  &.${activeClassName} {
    border-top: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff;
    border-left: 1px solid #ffffff;
    border-right: 1px solid #ffffff;
    border-radius: 33px;
    padding: 14px;

    @media (max-width: 480px) {
      padding: 8px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;
