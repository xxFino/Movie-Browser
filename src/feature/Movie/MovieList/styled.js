import styled from "styled-components";

export const MovieListHeader = styled.h2`
margin-top:56px;
font-size:32px;
@media (max-width: 1300px) {
font-size:28px
  }
  @media (max-width: 776px) {
font-size:24px
  }
  @media (max-width: 480px) {
font-size:18px;
  }
`;

export const MovieListContainer = styled.section`
     margin: 0 auto 0px;
    max-width: 1368px;
    margin-top: 150px;

  @media (max-width: 1300px) {
    margin: 150px 16px 0 16px;
  }
`;

export const MovieListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 24px;
  margin: 0 auto;
  margin-top:24px;
  @media (max-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 776px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;
export const MovieTile = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(186, 199, 213, 0.5) 0px 4px 12px;
  height: auto;
  border-radius: 5px;
  padding: 16px;
  transition: opacity 1s linear 0s, transform 1s linear 0s;
  grid-template-rows: auto 1fr;
  transition: 0.3s all;
  &:hover {
    opacity: 0.5s;
    transform: scale(1.03);
  }

  @media (max-width: 480px) {
    min-width: 288px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  aspect-ratio: 2 / 3;
  display: block;
`;
export const Description = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  margin-left: -16px;
  @media (max-width: 480px) {
    margin-top: 0;
  }
`;
export const MoviesTitle = styled.p`
  font-size: 22px;
  margin-top: 16px;
  margin-bottom: 8px;
  font-weight: 500;
  word-break: break-word;
line-height: 1.3;
  @media (max-width: 480px) {
    font-size: 16px;
    margin-top: 0px;
    margin-bottom: 4px;
  }
`;
export const MovieListParagraph = styled.p`
  margin: 0px;
  display: flex;
  align-self: flex-end;
  color: rgb(126, 131, 154);
  flex: 0 0 auto;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
export const MovieListText = styled.p`
  margin: 0px;
  display: flex;
  align-self: flex-end;
  font-weight: 600;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
export const MovieYear = styled.p`
  color: rgb(126, 131, 154);
  margin: 0px;
  @media (max-width: 480px) {
    font-size: 13px;
    margin-bottom: 0px;
  }
`;
export const MovieRating = styled.div`
  display: flex;
  height: 100%;
  gap: 12px;
  flex-wrap: wrap;
  align-items: flex-end;

  @media (max-width: 480px) {
    gap: 8px;
  }
`;
export const MovieTagsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
`;
export const MovieTags = styled.div``;
export const MovieTag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 12px;

  background: #e4e6f0;
  border-radius: 5px;
  font-size: 14px;
  align-items: center;

  @media (max-width: 480px) {
    align-self: flex-start;
    font-size: 10px;
    padding: 4px 8px;
  }
`;
export const styleIcon = (Icon) => styled(Icon)`
  height: 24px;
  width: 24px;
  display: flex;
  @media (max-width: 480px) {
    height: 16px;
    width: 16px;
  }
`;
export const MovieInfoBox = styled.div`
  height: 225px;
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
    height: auto;
    margin-left: 16px;
  }
`;
