import { Link } from "react-router-dom";
import styled from "styled-components";

export const Tile = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(186, 199, 213, 0.5) 0px 4px 12px;
  height: 100%;
  border-radius: 5px;
  padding: 16px;
  transition: opacity 1s linear 0s, transform 1s linear 0s;
  grid-template-rows: auto 1fr;
  transition: 0.3s;
  &:hover {
    opacity: 0.5s;
    transform: scale(1.03);
    cursor: pointer;
  }
  @media (max-width: 1040px) {
    padding: 12px;
  }
  @media (max-width: 778px) {
    padding: 8px;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  aspect-ratio: 2 / 3;
  display: block;
`;
export const Title = styled.p`
  font-size: 22px;
  margin-top: 14px;
  margin-bottom: 50px;
  font-weight: 500;
  word-break: break-word;
  line-height: 1.3;
  text-align: center;
  @media (max-width: 778px) {
    font-size: 14px;
    margin-top: 8px;
    margin-bottom: 30px;
  }
`;
