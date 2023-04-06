import { Container } from "../../../core/components/Container"
import Header from "../../../core/components/Header"
import { NoResultImage } from "./styled";


export const NoResult = () => {
    return (
        <Container>
            <Header>Sorry, theare no results for </Header>
            <NoResultImage />
        </Container>
    );
};