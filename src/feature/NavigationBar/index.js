import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { MovieList } from "../MovieList";
import { MoviePage } from "../MoviePage";
import { People } from "../People";
import { Profile } from "../Profile";
import { SearchBar } from "../SearchBar";
import { NavBar, NavItem, NavList, StyledNavLink } from "./styled";

export const NavigationBar = () => {
  return (
    <HashRouter>
      <NavBar>
        <StyledNavLink to="/movie-list">Movies Browser</StyledNavLink>
        <NavList>
          <NavItem>
            <StyledNavLink to="/movie-list">MOVIES</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/people">PEOPLE</StyledNavLink>
          </NavItem>
        </NavList>
        <SearchBar />
      </NavBar>

      <Switch>
        <Route path="/movie-list/">
          <MovieList />
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
