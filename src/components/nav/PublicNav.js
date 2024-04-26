import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BASE_NAME} from "../../contants/constants";

export default function PublicNav() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href={`${BASE_NAME}`}>Budget Buddy</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-aut">
                            <Nav.Link href={`${BASE_NAME}#/register`}>Register</Nav.Link>
                            <Nav.Link href={`${BASE_NAME}#/login`}>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
