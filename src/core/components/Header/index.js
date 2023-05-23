import styled from "styled-components";

export default styled.h2`
  margin-top: 56px ;
  font-weight: 600;
  font-size: 36px;
  word-break: break-word;
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin: 24px 0px 12px;
    font-size: 18px;
  }
`;
