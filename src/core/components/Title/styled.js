import styled from "styled-components";

export const StyledTitle = styled.h1`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    color: black; 

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        margin-top: 0;
        margin-bottom: 12px;
        font-size: 20px;
        line-height: 26px;
    }
`;
