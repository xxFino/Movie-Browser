import styled from "styled-components";

export const TileWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 64px auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        margin-top: 16px;
        margin-bottom: 21px;
    }
`;

export const TileContainer = styled.div`
    max-width: 1368px;
    margin: 16px;
    padding: 40px;
    background: ${({theme}) => theme.color.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 0 40px;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        grid-template-columns: 1fr 2fr;
        grid-gap: 0 16px;
        margin: 16px;
        padding: 16px;
    }
`;

export const Image = styled.img`    
    width: 100%;
    border-radius: 5px;
    height: auto;
    grid-row: span 2;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        width: 114px;
        height: auto;
    }
`;

export const Content = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        gap: 8px;
    }
`;

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    color: ${({theme}) => theme.color.black};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        font-size: 16px;
        line-height: 1.3;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        gap: 4px;
    }
`;

export const InfoLabel = styled.span`
    font-size: 18px;
    line-height: 1.2;
    margin-right: 10px;
    color: ${({theme}) => theme.color.stormGray};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        display: none;
    }
`;

export const InfoText = styled.span`
    font-size: 18px;
    line-height: 1.2;
    color: ${({theme}) => theme.color.black};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        font-size: 12px;
        line-height: 1.3;
        margin-bottom: 8px;
        padding: 0;
    }
`;

export const Description = styled.p`
    font-size: 20px;
    line-height: 1.6;
    margin: 40px 0 0 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        font-size: 14px;
        margin: 19px 0 0 0;
        grid-column: span 2;
    }
`;