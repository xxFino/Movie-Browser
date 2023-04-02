import styled from "styled-components";

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1368px;
  width: 70vw;
  margin-top: 150px;
  margin-button: 179px;
  @media (max-width: 1100px) {
    width: 90vw;
  }
`;
export const Wrapper = styled.section`
  margin: 0 auto;
  display: grid;
  grid-gap: 24px;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 490px) {
    grid-template-columns: 1fr;
  }
`;

export const TileMovie = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 324px;
  max-height: 650px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
`;
