import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../image/logo.png";
import "./about.css"

const About = () => {
    // var element = document.getElementById("nav-custom");
    // element.classList.add("nav-custom");
    
    return (
    <>
        <Helmet>
            <title>SquadTech | About</title>
        </Helmet>
        <Navbar bg="dark fixed-top" variant="dark" expand="lg" className="nav-custom notHome" id="nav-custom">
            <Container>
                <img className="d-block" src={logo} height="55" width="200" alt=""/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/#/">Home</Nav.Link>
                    <NavDropdown title="Products" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/#/products/iot">IOT</NavDropdown.Item>
                        <NavDropdown.Item href="/#/products/autoindustry">Auto Industy</NavDropdown.Item>
                        <NavDropdown.Item href="/#/products/website">Wesite</NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        {/* <NavDropdown.Item href="#">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                    <Nav.Link className="active" href="/#/about">About</Nav.Link>
                    <Nav.Link href="/#/contact">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div className="content mt-5">
            <div className="container">
                <div className =" mt-5">
                    <h3 className="text-center">About</h3>
                    <div className="container-about ">
                    <p className="mb-5">Squad Tech berkomitmen untuk mengimplementasikan teknologi di dunia nyata, kami mencoba menerapkannya dalam interaksi antara teknologi dan manusia yang tidak terbatas jangkauannya, IOT (Internet of things) telah berhasil menjawabnya. Squad Tech didirikan pada tahun 2018, fokus utama kami saat itu adalah implementasi IoT di dunia nyata, sekarang kami telah bergerak di dunia industri kami mencoba sistem di industri menjadi sistem cloud untuk memudahkan proses pemantauan.
                    </p>
                    <p>
                    Squad Tech is committed to implementing technology in the real world, we try to apply it in the interaction between technology and humans which is not limited in scope, IOT (Internet of things) has succeeded in answering it. Squad Tech was founded in 2018, our main focus at that time was the implementation of IoT in the real world, now that we have moved in the industrial world we are trying the system in the industry into a cloud system to facilitate the monitoring process.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
  };
  
  export default About;
  