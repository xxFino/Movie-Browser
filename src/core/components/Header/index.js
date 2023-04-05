import styled from "styled-components";

export default styled.h1`
  margin: 0px 0 24px 0;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  @media (max-width: 480px) {
    margin: 24px 0 12px 0;
    font-size: 18px;
    margin: 0px 0 12px 0;
  }
  @media (max-width: 1300px) {
    font-size: 28px;
  }
  @media (max-width: 776px) {
    font-size: 24px;
  }
`;
