import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/icon.png'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <div>
            <Navbar bg="primary" expand="lg">
                <Container>
                    {/* navbar area */}
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />{' '}
                        <small className="text-white fw-bolder mt-5">Smart Class</small>
                    </Navbar.Brand>



                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">

                            <NavLink to="/home" className="text-white text-decoration-none p-1" activeStyle={activeStyle}>Home</NavLink >
                            <NavLink to="/about" className="text-white text-decoration-none p-1" activeStyle={activeStyle} >About</NavLink >
                            <NavLink to="/contact-us" className="text-white text-decoration-none p-1" activeStyle={activeStyle}>Contact-Us</NavLink >
                            <NavLink to="/services" activeStyle={activeStyle} className="text-white text-decoration-none p-1" >Services</NavLink >

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;