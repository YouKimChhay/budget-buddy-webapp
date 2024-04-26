import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BASE_NAME} from "../../contants/constants";

export default function LoginNav() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" expand={"md"}>
                <Container>
                    <Navbar.Brand href={`${BASE_NAME}`}>Budget Buddy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href={`${BASE_NAME}/incomes`}>Incomes</Nav.Link>
                            <Nav.Link href={`${BASE_NAME}/categories`}>Categories</Nav.Link>
                            <Nav.Link href={`${BASE_NAME}/expenses`}>Expenses</Nav.Link>
                            <Nav.Link href={`${BASE_NAME}/bills`}>Bills</Nav.Link>
                            <Nav.Link href={`${BASE_NAME}/savinggoals`}>Saving Goals</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-aut">
                            <Nav.Link href={`${BASE_NAME}/logout`}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
