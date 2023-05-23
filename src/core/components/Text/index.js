import styled from "styled-components";

export const TextBold = styled.p`
  margin: 0px;
  display: flex;
  font-weight: 600;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 12px;
  }
`;
export const TextNormal = styled.p`
  margin: 0px;
  display: flex;
  color: ${({ theme }) => theme.color.waterloo};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 12px;
  }
`;
