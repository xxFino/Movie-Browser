import styled from "styled-components";
import { ReactComponent as Cover } from "../../../MoviesList/Poster.svg";

export const MovieContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
`;

export const PosterImage = styled.img`
  width: 312px;
  height: 464px;
  margin: 40px;
  border-radius: 5px;
`;

export const PosterCover = styled(Cover)``;

export const DetailsBox = styled.div`
  margin: 40px;
`;

export const MovieTitle = styled.h2`
  margin: 0;
`;

export const Year = styled.span``;

export const ProductionBox = styled.div``;

export const Production = styled.span``;

export const Info = styled.span`
  color: ${({ theme }) => theme.color.black};
`;

export const ReleaseBox = styled.div``;

export const Date = styled.span``;

export const GenreBox = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 24px 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    gap: 8px;
    margin: 12px 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin: 8px 0px;
  }
`;

export const Genre = styled.li`
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.mystic};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 12px;
    padding: 6px 12px;
    gap: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 10px;
    line-height: 1.1;
    padding: 4px 8px;
  }
`;

export const Description = styled.span`
  font-size: 20px;
  line-height: 1.6;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 14px;
  }
`;
