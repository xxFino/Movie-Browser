import { TextBold, TextNormal } from "../Text";
import {
  Button,
  ButtonText,
  Frame,
  LeftArrow,
  RightArrow,
  Wrapper,
} from "./styled";

export const Pagination = () => {
  return (
    <Wrapper>
      <Button>
        <LeftArrow media="true" />
        <LeftArrow />
        <ButtonText>First</ButtonText>
      </Button>
      <Button>
        <LeftArrow />
        <ButtonText>Previous</ButtonText>
      </Button>
      <Frame>
        <TextNormal>Page</TextNormal>
        <TextBold>1</TextBold>
        <TextNormal>of</TextNormal>
        <TextBold>500</TextBold>
      </Frame>
      <Button>
        <ButtonText>Next</ButtonText>
        <RightArrow />
      </Button>
      <Button>
        <ButtonText>Last</ButtonText>
        <RightArrow />
        <RightArrow media="true" />
      </Button>
    </Wrapper>
  );
};
