import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navs.css';
import logo from './../../Assets/logo.png';
import './../Home/Header'
import './../Home/Home'
import './../Footer/Footer'

const Navs = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                <img src={logo} title='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href='#home' >Home</Nav.Link>
                        <Nav.Link href="#pride">About Us</Nav.Link>
                        <Nav.Link href="#blogs">Explore Food</Nav.Link>
                        <Nav.Link href="#testi">Reviews</Nav.Link>
                        <Nav.Link href="#faq">FAQ</Nav.Link>
                    </Nav>
                    <Nav className='two'>
                        <Nav.Link id='lastnav'>01234567890</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navs
