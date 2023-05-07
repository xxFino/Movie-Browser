import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 24px;
  margin: 0 auto;

  @media (max-width: 1396px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 1040px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 778px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`;
