import {
  StyledNavLink,
  Wrapper,
  TitleWrapper,
  NavList,
  StyledListItem,
  StyledLogo,
  LogoIcon,
  LogoName,
} from "./styled";
import SearchBar from "./SearchBar";

const Navigation = () => (
  <Wrapper>
    <TitleWrapper>
      <StyledLogo to="/movie">
        <LogoIcon />
        <LogoName>Movie Browser</LogoName>
      </StyledLogo>
      <NavList>
        <StyledListItem>
          <StyledNavLink to="/movie">MOVIES</StyledNavLink>
        </StyledListItem>
        <StyledListItem>
          <StyledNavLink to="/people">PEOPLE</StyledNavLink>
        </StyledListItem>
      </NavList>
    </TitleWrapper>
    <SearchBar />
  </Wrapper>
);

export default Navigation;
