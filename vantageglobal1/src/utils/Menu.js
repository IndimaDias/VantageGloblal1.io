import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from '.././images/logo.png';
import './css/menu.css'


export default function Menu() {
    return (
        <Navbar bg="light" >
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="75"
                        height="75"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Nav>
                    <Nav.Item className = "navButton">
                        <Nav.Link href=""> Why Choose Us </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="navButton">
                        <Nav.Link href=""> Our Services </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="navButton">
                        <Nav.Link href=""> Contact Us </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
       
        )
}