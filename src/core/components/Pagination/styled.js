import styled from "styled-components";
import { ReactComponent as Left } from "./left.svg";
import { ReactComponent as Right } from "./right.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 100px;
  @media (max-width: 778px)  {
   gap:8px;
   margin-top: 30px;
   margin-bottom: 30px;
  }
`;
export const LeftArrow = styled(Left)`
  color: #0044cc;
  @media (max-width: 778px)  {
    width: 5px;
    height: 8px;
}
`;
export const RightArrow = styled(Right)`
  color: #0044cc;
  @media (max-width: 778px)  {
    width: 5px;
    height: 8px;
}

`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  background-color: #d6e4ff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.85;
  }
  &:disabled {
    background-color: #e4e6f0;
    color: #18181b;
    cursor: auto;
    opacity: 1;
  }
  @media (max-width: 778px) {
    padding: 7.5px 12px;
    gap: 4px;
  }
  &:hover ${LeftArrow} {
    transform: translateX(-2px);
  }
  &:disabled ${LeftArrow} {
    transform: none;
    color: #7e839a;
  }
  &:hover ${RightArrow} {
    transform: translateX(2px);
  }
  &:disabled ${RightArrow} {
    transform: none;
    color: #7e839a;
  }
`;
export const ButtonText = styled.span`
  @media  (max-width: 778px)  {
    display: none;
  }
`;
export const Frame = styled.div`
  margin-left: 12px;
  margin-right: 12px;
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  @media(max-width: 778px){
    gap:2px;
    margin-left: 4px;
  margin-right: 4px;

  }
`;
