import styled from "styled-components";

export const Content = styled.section`
  margin: 0 auto;
 max-width: 1368px;
  margin-top: 150px;
  display: grid;
  justify-content: space-between;
  @media (max-width: 1100px) {
    justify-content: space-around
}
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-gap: 24px;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap:16px
  }
  @media (max-width: 798px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 490px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
font-weight: 600;
font-size: 36px;
line-height: 1.2;
margin-bottom:24px;
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
  justify-content: space-around;
  align-items: stretch;
  @media (max-width: 490px) {

    }
`;

export const Images = styled.img`
  max-width: 292px;
  max-height: 434px;
  width: 100%;
  border-radius: 5px;
`;
export const Description = styled.div`
  margin-top: 16px;

`;
export const Name = styled.p`
  font-size: 22px;
  line-height: 1.3;
  margin-top: 8px;
  display: flex;
  align-items: center;
`;
export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  margin-top:0px;
  margin-bottom:8px;
`;
export const Text = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  display: flex;
  align-items: center;
  margin-top:0px;
  margin-bottom:8px;
  `;
export const Date = styled.p`
  font-size: 16px;
  line-height: 1.5;
display:flex;
`;
export const Rating = styled.div`
  display: flex;
  padding: 0px;
  gap: 12px;
margin-bottom:-8px;
`;
export const Tag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  margin-top:-24px;
  margin-bottom:40px;
  gap: 10px;
  width: 77px;
  height: 36px;
  background: #e4e6f0;
  border-radius: 5px;
`;
export const Box = styled.div`
 max-width: 292px;
 max-height: 434px;
 display: flex;
`;
export const styleIcon = (Icon) => styled(Icon)`
  height: 24px;
  width: 24px;
`;
