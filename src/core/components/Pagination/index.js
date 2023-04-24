import { TextBold, TextNormal } from "../Text";
import {
  Button,
  ButtonText,
  Frame,
  LeftArrow,
  RightArrow,
  Wrapper,
} from "./styled";

export const Pagination = ({ page, totalPages, onPageChange }) => {
  const goToPrev = () => onPageChange(page - 1);
  const goToNext = () => onPageChange(page + 1);
  const goToFirst = () => onPageChange(1);
  const goToLast = () => onPageChange(totalPages);
  return (
    <Wrapper>
      <Button onClick={goToFirst} disabled={page === 1}>
        <LeftArrow />
        <LeftArrow />
        <ButtonText>First</ButtonText>
      </Button>
      <Button onClick={goToPrev} disabled={page === 1}>
        <LeftArrow />
        <ButtonText>Previous</ButtonText>
      </Button>
      <Frame>
        <TextNormal>Page</TextNormal>
        <TextBold>{page}</TextBold>
        <TextNormal>of</TextNormal>
        <TextBold>{totalPages}</TextBold>
      </Frame>
      <Button onClick={goToNext} disabled={page === totalPages}>
        <ButtonText>Next</ButtonText>
        <RightArrow />
      </Button>
      <Button onClick={goToLast} disabled={page === totalPages}>
        <ButtonText>Last</ButtonText>
        <RightArrow />
        <RightArrow />
      </Button>
    </Wrapper>
  );
};