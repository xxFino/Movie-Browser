import { Container } from "../../../core/components/Container";
import Header from "../../../core/components/Header";
import { StyledSpinner, Wrapper } from "./styled";

export const Loading = () => {
  return (
    <Container>
      <Header>Search results for </Header>
      <Wrapper>
        <StyledSpinner />
      </Wrapper>
    </Container>
  );
};
