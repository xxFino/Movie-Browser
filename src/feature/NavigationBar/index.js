import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { MoviePage } from "../Movie/MoviePage";
import { Movies } from "../Movie/Movies";
import { People } from "../People";
import { Profile } from "../Profile";
import { SearchBar } from "../SearchBar";
import {
  Header,
  NavBar,
  NavItem,
  NavList,
  StyledNavLink,
  StyledNavLinkTitle,
  StyledVideoIcon,
  Title,
} from "./styled";

export const NavigationBar = () => {
  return (
    <HashRouter>
      <Header>
        <NavBar>
          <NavList>
            <StyledNavLinkTitle to="/movie-list">
              <StyledVideoIcon />
              <Title>Movies Browser</Title>
            </StyledNavLinkTitle>
            <NavItem>
              <StyledNavLink to="/movie-list">MOVIES</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/people">PEOPLE</StyledNavLink>
            </NavItem>
          </NavList>
          <SearchBar />
        </NavBar>
      </Header>
      <Switch>
        <Route path="/movie-list/">
          <Movies />
        </Route>
        <Route path="/movie-list/:id">
          <MoviePage />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/people/:id">
          <Profile />
        </Route>
        <Route path="/">
          <Redirect to="movie-list" />
        </Route>
      </Switch>
    </HashRouter>
  );
};
