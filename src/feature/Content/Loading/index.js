import { Container } from "../../../core/components/Container";
import Header from "../../../core/components/Header";
import { StyledSpinner, Wrapper } from "./styled";

export const Loading = () => {
  return (
    <Container>
      <Header>Please wait </Header>
      <Wrapper>
        <StyledSpinner />
      </Wrapper>
    </Container>
  );
};
