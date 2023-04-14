import styled from "styled-components";

export const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;
export const Photo = styled.img`
 width: 100%;
  height: auto;
  border-radius: 5px;
  aspect-ratio: 2 / 3;
  display: block;
`;
export const Tile = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 16px;
gap: 12px;
`;