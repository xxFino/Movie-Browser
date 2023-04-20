import { useDispatch, useSelector } from "react-redux";
import {
  selectPage,
  selectTotalPages,
  setPage,
} from "../../../feature/Movie/moviesSlice";
import { TextBold, TextNormal } from "../Text";
import {
  Button,
  ButtonText,
  Frame,
  LeftArrow,
  RightArrow,
  Wrapper,
} from "./styled";

export const Pagination = ({ page, totalPages, onPrevClick, onNextClick }) => {
  const goToFirst = () => {
    onPrevClick(1);
  };
  const goToLast = () => {
    onNextClick(totalPages);
  };

  return (
    <Wrapper>
      <Button onClick={goToFirst} disabled={page === 1}>
        <LeftArrow />
        <LeftArrow />
        <ButtonText>First</ButtonText>
      </Button>
      <Button disabled={page === 1} onClick={() => onPrevClick(page - 1)}>
        <LeftArrow />
        <ButtonText>Previous</ButtonText>
      </Button>
      <Frame>
        <TextNormal>Page</TextNormal>
        <TextBold>{page}</TextBold>
        <TextNormal>of</TextNormal>
        <TextBold>{totalPages}</TextBold>
      </Frame>
      <Button
        disabled={page === totalPages}
        onClick={() => onNextClick(page + 1)}
      >
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
