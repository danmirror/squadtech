import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Table from 'react-bootstrap/Table';

import logo from "../../image/logo.png";

import "./product.css";
import bg1 from "../../image/bg1.jpg";


const Autoindustry = () => {
    // var element = document.getElementById("nav-custom");
    // element.classList.add("nav-custom");
    
    return (
    <>
        <Helmet>
            <title>SquadTech | Product</title>
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
                    <Nav.Link href="/#/about">About</Nav.Link>
                    <Nav.Link href="/#/contact">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div className="content mt-5">
            <div className="container">
                <div class ="mt-5">
                    <h2 className="text-center">Industry Automation</h2>

                    <div className="container-product">
                        <div className="row mb-4">
                            <div className="col-md-6">
                                <h5>smart home</h5>
                                <div className="image-center-product">
                                    <img className="mb-2" src={bg1}  width="300" height="200" alt=""/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                        {/* <th>#</th> */}
                                        <th colSpan={2} >Spesification</th>
                                        
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        </tr>
                                        <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        </tr>
                                        <tr>
                                        <td >Larry the Bird</td>
                                        <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-md-6">
                                <h5>smart home</h5>
                                <div className="image-center-product">
                                    <img className="mb-2" src={bg1}  width="300" height="200" alt=""/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                        {/* <th>#</th> */}
                                        <th colSpan={2} >Spesification</th>
                                        
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        </tr>
                                        <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        </tr>
                                        <tr>
                                        <td >Larry the Bird</td>
                                        <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-md-6">
                                <h5>smart home</h5>
                                <div className="image-center-product">
                                    <img className="mb-2" src={bg1}  width="300" height="200" alt=""/>
                                    <img className="mb-2" src={bg1}  width="300" height="200" alt=""/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                        {/* <th>#</th> */}
                                        <th colSpan={2} >Spesification</th>
                                        
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        </tr>
                                        <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        </tr>
                                        <tr>
                                        <td >Larry the Bird</td>
                                        <td>@twitter</td>
                                        </tr>
                                        <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        </tr>
                                        <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        </tr>
                                        <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        </tr>
                                        <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-md-6">
                                <h5>smart home</h5>
                                <div className="image-center-product">
                                    <img className="mb-2" src={bg1}  width="300" height="200" alt=""/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                        {/* <th>#</th> */}
                                        <th colSpan={2} >Spesification</th>
                                        
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        </tr>
                                        <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        </tr>
                                        <tr>
                                        <td >Larry the Bird</td>
                                        <td>@twitter</td>
                                        </tr>
                                        <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        </tr>
                                        <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        </tr>
                                        <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
  };
  
  export default Autoindustry;

  
  