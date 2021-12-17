import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../image/logo.png";

const NoPage = () => {
    return (
      <>
      <Helmet>
          <title>SquadTech | Product</title>
      </Helmet>
      <Navbar bg="dark fixed-top" variant="dark" expand="lg" className="nav-custom notHome" id="nav-custom">
          <Container>
              <img className="d-block " src={logo} height="55" width="200" alt=""/>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                  <Nav.Link href="/#/">Home</Nav.Link>
                  <Nav.Link href="/#/blogs">Blogs</Nav.Link>
                  <NavDropdown title="Product" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/#/product/iot">IOT</NavDropdown.Item>
                      <NavDropdown.Item href="/#/product/autoindustry">Auto Industy</NavDropdown.Item>
                      <NavDropdown.Item href="/#/product/website">Wesite</NavDropdown.Item>
                      {/* <NavDropdown.Divider /> */}
                      {/* <NavDropdown.Item href="#">Separated link</NavDropdown.Item> */}
                  </NavDropdown>
                  <Nav.Link href="/#/contact">Contact</Nav.Link>
              </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
      <div className="content mt-5 text-center">
        <div class ="mt-5">
            <h1>Whoops</h1>
            <p>404 Page not found</p>
        </div>
        </div>
      </>
    )
  };
  
  export default NoPage;
  