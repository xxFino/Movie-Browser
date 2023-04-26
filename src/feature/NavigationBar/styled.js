import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as VideoIcon } from "./video.svg";

const activeClassName = "active";

export const Header = styled.header`
  width: 100%;
  background: #18181b;
  display: flex;
  justify-content: center;
`;
export const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  letter-spacing: -1.5px;
  margin: 0;
  padding: 0;


  @media (max-width: 778px) {
    font-size: 18px;
  }
  @media (max-width: 530px) {
    font-size: 13px;
}
`;

export const StyledVideoIcon = styled(VideoIcon)`
  margin:16px;
  padding: 0;

  @media (max-width: 778px) {
 margin: 10px;
    max-width: 16px;
    max-height: 16px;
  }
`;

export const NavBar = styled.nav`
  margin: 0 auto;
  width: 1368px;
  min-height: 94px;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;


  @media (max-width: 530px) {
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

  @media (max-width: 1040px) {
    gap:20px;
  }

  @media (max-width: 778px) {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  @media (max-width: 530px) {
  width: 90vw;
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
  font-style: normal;
font-weight: 500;
line-height: 1.3;

  &:hover {
    color: #ddd;
  }

  &:active {
    color: #ffffff;
  }
  @media (max-width: 778px) {
    font-size: 13px;
    }
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  color: #ffffff;
  text-decoration: none;
  font-style: normal;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  display: flex;
  align-items: center;
  @media (max-width: 778px) {
font-size: 10px;

    }
    
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
    padding: 8px 12px;

    @media (max-width: 778px) {
font-size: 10px;
    }
  }
`;
