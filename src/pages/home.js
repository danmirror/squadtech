import React, { useEffect } from "react";

import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import bg1 from "../image/bg1.jpg";
import bg2 from "../image/bg2.jpg";
import bg3 from "../image/bg3.jpg";

import iot from "../image/iot.png";
import industrial from "../image/industrial.png";
import www from "../image/www.png";

import "./home.css";

// vendor
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet';



import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../image/logo.png";

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration : 1600
          });
        AOS.refresh();
    }, []);

    var top  = window.pageYOffset || document.documentElement.scrollTop
   
    console.log("iii",top);

    window.onload = function(e){ 
        var element = document.getElementById("nav-custom");
        if(top >=550){
            element.classList.add("nav-custom");
        }
        else{
            element.classList.remove("nav-custom");
        }
    }
    window.onscroll = function (e) {
        console.log(window.scrollY); // Value of scroll Y in px
        var element = document.getElementById("nav-custom");
        
        if(window.scrollY >=550){
            element.classList.add("nav-custom");
        }
        else{
            element.classList.remove("nav-custom");
        }
    };
    return(
        <>
            <Helmet>
                <title>SquadTech | Home</title>
            </Helmet>
            <Navbar bg=" fixed-top" variant="dark" expand="lg" id="nav-custom">
                <Container>
                    <img className="d-block " src={logo} height="55" width="200"/>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/#/">Home</Nav.Link>
                        <Nav.Link href="/#/blogs">Blogs</Nav.Link>
                        <NavDropdown title="Product" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/">IOT</NavDropdown.Item>
                            <NavDropdown.Item href="blogs">Auto Industy</NavDropdown.Item>
                            <NavDropdown.Item href="contact">Wesite</NavDropdown.Item>
                            <NavDropdown.Divider />
                            {/* <NavDropdown.Item href="#">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                        <Nav.Link href="/#/contact">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Carousel fade >
                <Carousel.Item interval={3000}>
                    <img className="d-block w-100" src={bg1} height="640" />
                    <Carousel.Caption data-aos="fade-up">
                    <h1>First slide label</h1>
                    <h4>Nulla vitae elit libero, a pharetra augue mollis interdum.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img className="d-block w-100" src={bg2} height="640"  />
                    <Carousel.Caption data-aos="fade-up">
                    <h1>Second slide label</h1>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img className="d-block w-100" src={bg3} height="640"  />
                    <Carousel.Caption data-aos="fade-up">
                    <h1>Third slide label</h1>
                    <h4>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <section className="bg-light">
                <div className="container height-limit">
                    <div className="row center-border-4"> 
                        <div className="col-md-4 my-2 ">
                            <Card  className="center-item" style={{ width: '18rem' }}>
                                <img src={iot}  width="100" height="110"/>
                                <Card.Body data-aos="fade-up" >
                                    <Card.Title className="text-center">INTERNET OF THING</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="outline-primary">Detail</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 my-2">
                            <Card  className="center-item" style={{ width: '18rem' }}>
                                <img src={industrial}  width="100" height="110"/>
                                <Card.Body data-aos="fade-up" >
                                    <Card.Title className="text-center">AUTOMATION INDUSTRY</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="outline-primary">Detail</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 my-2">
                            <Card  className="center-item" style={{ width: '18rem' }}>
                                <img src={www}  width="100" height="110"/>
                                <Card.Body data-aos="fade-up" >
                                    <Card.Title className="text-center">WEBSITE</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="outline-primary">Detail</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
           
            <section className="bg-light-dark">
                <div className="container height-limit">
                    <div className="row">
                    <div className="col-md-5">
                       IMAGE
                    </div>
                    <div className="col-md-7 center-border-5" data-aos="fade-up">
                        <h1>Custom Your Device</h1>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit laborum doloremque commodi ut alias tempore, minima, soluta labore optio magnam recusandae dolore vero, saepe quod. Optio nam recusandae nemo reprehenderit!</p>
                    </div>
                    </div>
                </div>
            </section>
            <section className="bg-light">
                <div className="container height-limit">
                    <div className="row">
                    <div className="col-md-7 center-border-5" data-aos="fade-up">
                        <h1>Cloud Integration</h1>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit laborum doloremque commodi ut alias tempore, minima, soluta labore optio magnam recusandae dolore vero, saepe quod. Optio nam recusandae nemo reprehenderit!</p>
                    </div>
                    <div className="col-md-5">
                       IMAGE
                    </div>
                    
                    </div>
                </div>
            </section>
          
        </>
        
        )
  };
  
  export default Home;
  