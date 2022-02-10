import React from 'react';
import { Nav, Navbar , Container } from 'react-bootstrap'
class Header extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>
                <Container>
                <Navbar.Brand href="#home"><h2>Organic mart</h2></Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Veggies</Nav.Link>
                <Nav.Link href="#pricing">About Us</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default Header;