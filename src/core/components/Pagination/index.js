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

export const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPage) ?? 1;
  const totalPages = useSelector(selectTotalPages);


  const goToFirst = () => {
    dispatch(setPage(1));
  };
  const goToLast = () => {
    dispatch(setPage(totalPages));
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      dispatch(setPage(nextPage));
    }
  };

  const goToPrev = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  };
  return (
    <Wrapper>
      <Button onClick={goToFirst}disabled={currentPage === 1}>
        <LeftArrow />
        <LeftArrow />
        <ButtonText>First</ButtonText>
      </Button>
      <Button onClick={goToPrev}disabled={currentPage === 1}>
        <LeftArrow />
        <ButtonText>Previous</ButtonText>
      </Button>
      <Frame>
      <TextNormal>Page</TextNormal>
<TextBold>{currentPage}</TextBold>
<TextNormal>of</TextNormal>
<TextBold>{totalPages}</TextBold>
      </Frame>
      <Button onClick={goToNext} disabled={currentPage === totalPages}>
        <ButtonText>Next</ButtonText>
        <RightArrow />
      </Button>
      <Button onClick={goToLast} disabled={currentPage === totalPages}>
        <ButtonText>Last</ButtonText>
        <RightArrow />
        <RightArrow />
      </Button>
    </Wrapper>
  );
};


