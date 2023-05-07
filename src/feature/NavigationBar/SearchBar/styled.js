import styled from "styled-components";
import { ReactComponent as SearchIcon } from "./search.svg";

export const Form = styled.div`
  background: #ffffff;
  border-radius: 33px;
  position: relative;
  border: 1px solid #e4e6f0;
  width: 432px;
  height: 48px;
  margin: 6px;
  display: flex;
  justify-content: right;

  @media (max-width: 1040px) {
    margin: 12px;
    width: 40vw;
  }
  @media (max-width: 778px) {
    height: 40px;
  }

  @media (max-width: 530px) {
    height: 40px;
    margin: 0 auto;
    width: 500px;
    width: 90vw;
    margin-bottom: 16px;
  }
`;

export const SearchInput = styled.input`
  width: 90%;
  height: 100%;
  display: flex;
  font-size: 16px;
  line-height: 24px;
  border-radius: 33px;
  border: none;

  &::placeholder {
    font-size: 16px;
    color: #7e839a;

    @media (max-width: 776px) {
      font-size: 14px;
      padding-left: 10px;
    }
  }

  &:focus {
    outline: none;
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  top: 0;
  left: 16px;
  width: 18px;
  height: 100%;
`;
