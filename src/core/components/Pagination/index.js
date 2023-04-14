import { TextBold, TextNormal } from "../Text";
import {
  Button,
  ButtonText,
  Frame,
  LeftArrow,
  RightArrow,
  Wrapper,
} from "./styled";

import { useState } from "react";

export const Pagination = ({ totalResults }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalResults / 20);
  const handlePrevClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <Wrapper>
      <Button disabled={currentPage === 1} onClick={handlePrevClick}>
        <LeftArrow />
        <LeftArrow />
        <ButtonText>First</ButtonText>
      </Button>
      <Button disabled={currentPage === 1} onClick={handlePrevClick}>
        <LeftArrow />
        <ButtonText>Previous</ButtonText>
      </Button>
      <Frame>
        <TextNormal>Page</TextNormal>
        <TextBold>{currentPage}</TextBold>
        <TextNormal>of</TextNormal>
        <TextBold>{totalPages}</TextBold>
      </Frame>
      <Button disabled={currentPage === totalPages} onClick={handleNextClick}>
        <ButtonText>Next</ButtonText>
        <RightArrow />
      </Button>
      <Button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(totalPages)}
      >
        <ButtonText>Last</ButtonText>
        <RightArrow />
        <RightArrow />
      </Button>
    </Wrapper>
  );
};
