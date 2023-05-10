import styled from "styled-components";
import { ReactComponent as Star } from "../../../core/icon/Vector.svg";

export const RatingWrapper = styled.div`
display: block;

@media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: flex;
}
`

export const RatingBox = styled.div`
  margin-bottom: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-bottom: 8px;
  }
`;

export const Rate = styled.span`
  font-size: 30px;
  line-height: 39px;
  font-weight: 600;
  vertical-align: middle;
  margin: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 22px;
    line-height: 26px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 14px;
    line-height: 18px;
    margin: 4px;
  }
`;

export const RateOn = styled.span`
  font-size: 16px;
  vertical-align: middle;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 10px;
    line-height: 12px;
  }
`;

export const Votes = styled.span`
  font-size: 15px;
  line-height: 19px;
 
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 10px;
    margin-left: 8px;
  }
`;

export const Icon = styled(Star)`
  width: 38px;
  height: 40px;
  vertical-align: middle;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    width: 32px;
    height: 31px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 16px;
    height: 16px;
  }
`;
