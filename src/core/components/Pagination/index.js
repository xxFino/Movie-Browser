import { useSelector } from "react-redux";
import { TextBold, TextNormal } from "../Text";
import {
  Button,
  ButtonText,
  Frame,
  LeftArrow,
  RightArrow,
  Wrapper,
} from "./styled";

export const Pagination = ({ page, onPageChange,totalPages,query}) => {

  const goToPrev = () => onPageChange(page - 1,query);
  const goToNext = () => onPageChange(page + 1,query);
  const goToFirst = () => onPageChange(1,query);
  const goToLast = () => onPageChange(totalPages,query);
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
        <TextBold>{totalPages > 500 ? 500 : totalPages}</TextBold>
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
