import styled from "styled-components";
import {ReactComponent as SearchIcon} from "./search.svg"

export const Form = styled.form`
background: #ffffff;
border-radius: 33px;
position: relative;
border: 1px solid #e4e6f0;
width: 432px;
height: 48px;
margin: auto;
display: flex;
justify-content: right;
`

export const SearchInput = styled.input`
width: 90%;
height: 100%;
display: block;
font-size: 16px;
line-height: 24px;
border-radius: 33px;
border: none;

&:focus {
    outline: none;
}
`
export const StyledSearchIcon = styled(SearchIcon)`
position: absolute;
top: 0;
left: 16px;
width: 18px;
height: 100%;
`