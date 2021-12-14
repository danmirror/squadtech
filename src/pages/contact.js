import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../image/logo.png";

const Contact = () => {
  return (
    <>
        <Helmet>
            <title>SquadTech | Contact</title>
        </Helmet>
        <Navbar bg="dark fixed-top" variant="dark" expand="lg" className="nav-custom notHome" id="nav-custom">
            <Container>
                <img className="d-block " src={logo} height="55" width="200"/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/#/">Home</Nav.Link>
                    <Nav.Link href="/#/blogs">Blogs</Nav.Link>
                    <NavDropdown title="Product" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/#/">IOT</NavDropdown.Item>
                        <NavDropdown.Item href="/#/blogs">Auto Industy</NavDropdown.Item>
                        <NavDropdown.Item href="/#/contact">Wesite</NavDropdown.Item>
                        <NavDropdown.Divider />
                        {/* <NavDropdown.Item href="#">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                    <Nav.Link href="/#/contact">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div className="content">
        <div class ="mt-5">
            <h1>Contact</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro non et odit, deserunt consequatur eos quam fugiat qui culpa sequi repellat blanditiis, amet vero numquam pariatur iure saepe atque? Debitis? 
        </div>
        </div>
    </>
    )
  };
  
  export default Contact;
  