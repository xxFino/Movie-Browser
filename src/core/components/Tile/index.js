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
@media (max-width: 778px) {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: center;
}
`;