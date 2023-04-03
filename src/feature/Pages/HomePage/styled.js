import styled from "styled-components";

export const Content = styled.section`
  margin: 0 auto;
  max-width: 1368px;
  margin-top: 150px;
  display: grid;
  justify-content: space-between;

  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-gap: 24px;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
    margin: 0 24px 0 24px;
  }
  @media (max-width: 776px) {
    grid-template-columns: 1fr 1fr;
    margin: 0 16px 0 16px;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    margin: 0 16px 0 16px;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  margin-bottom: 24px;
  @media (max-width: 1300px) {
    font-size: 32px;

    margin-left: 24px;
    margin-bottom: 18px;
  }
  @media (max-width: 776px) {
    margin-left: 16px;
    margin-bottom: 16px;
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;

export const TileMovie = styled.div`
  display: grid;
  justify-items: start;
  flex-wrap: wrap;
  align-items: start;
  max-width: 324px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  padding: 16px;
  flex-direction: column;
  place-content: space-around;
  align-content: space-between;

  @media (max-width: 480px) {
    grid-template-columns: 2fr 3fr;
  }

  @media (max-width: 480px) {
    width: 288px;
    height: 201px;
  }
`;

export const Images = styled.img`
  max-width: 292px;
  max-height: 434px;
  width: 100%;
  border-radius: 5px;
  @media (max-width: 480px) {
    width: 114px;
    height: 169px;
  }
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
export const Name = styled.p`
  font-size: 22px;
  line-height: 1.3;
  margin-top: 8px;
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 8px;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
export const Text = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  display: flex;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 8px;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
export const Date = styled.p`
  font-size: 16px;
  line-height: 1.5;
  display: flex;
  margin-top: 8px;
  margin-bottom: 8px;
  @media (max-width: 480px) {
    font-size: 13px;
    margin-bottom: 0px;
  }
`;
export const Rating = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 0px;
  gap: 12px;
  margin-bottom: -8px;
  margin-top: 40px;
  @media (max-width: 480px) {
    gap: 8px;
  }
`;
export const ContentTags = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 8px;
`;
export const TagBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const TagTile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 12px;
  height: 36px;
  background: #e4e6f0;
  border-radius: 5px;
  font-size: 14px;
  align-items: center;

  @media (max-width: 480px) {
    max-height: 19px;
    font-size: 13px;
    margin: 8px 0 8px;
  }
`;
export const Box = styled.div`
  max-width: 292px;
  max-height: 434px;
  display: flex;
  @media (max-width: 480px) {
    width: 114px;
    height: 169px;
  }
`;
export const styleIcon = (Icon) => styled(Icon)`
  height: 24px;
  width: 24px;
  @media (max-width: 480px) {
    height: 16px;
    width: 16px;
  }
`;
export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 16px;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
`;
