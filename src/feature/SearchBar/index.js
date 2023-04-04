import { Form, SearchInput, StyledSearchIcon} from "./styled"

export const SearchBar = () => {
    return (
        <Form>
            <StyledSearchIcon />
        <SearchInput type="text" placeholder="Search for movies..." />
        </Form>
    );
};
