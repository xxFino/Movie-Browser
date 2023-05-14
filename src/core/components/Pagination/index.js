import { useHistory } from "react-router-dom";
import { TextBold, TextNormal } from "../Text";
import {
  Button,
  ButtonText,
  Frame,
  LeftArrow,
  RightArrow,
  Wrapper,
} from "./styled";

export const Pagination = ({ page, onPageChange, query, totalPages }) => {
  const history = useHistory();

  const goToPage = (newPage) => {
    const searchParams = new URLSearchParams(history.location.search);
    searchParams.set("page", newPage);
    history.push(`${history.location.pathname}?${searchParams.toString()}`);
    onPageChange(newPage);
  };

  const goToPrev = () => goToPage(page - 1, query);
  const goToNext = () => goToPage(page + 1, query);
  const goToFirst = () => goToPage(1, query);
  const goToLast = () => goToPage(totalPages, query);

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
