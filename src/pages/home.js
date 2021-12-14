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

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// useEffect(() => {
//     AOS.init({
//       duration : 2000
//     });
//   }, []);
  

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration : 1600
          });
        AOS.refresh();
      }, []);
    return(
        <>
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
                    <div className="row">
                        <div className="col-md-4 ">
                            <div className="center-border-4" >
                            <Card  className="center-item" style={{ width: '18rem' }}>
                                <img src={iot}  width="100" height="100"/>
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
                        </div>
                        <div className="col-md-4">
                            <div className="center-border-4">
                            <Card  className="center-item" style={{ width: '18rem' }}>
                                <img src={industrial}  width="100" height="100"/>
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
                        </div>
                        <div className="col-md-4">
                            <div className="center-border-4" >
                            <Card  className="center-item" style={{ width: '18rem' }}>
                                <img src={www}  width="100" height="100"/>
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
                </div>
            </section>
            <section className="bg-light-dark">
                <div className="container height-limit">
                    <div className="row">
                    <div className="col-md-5">
                       IMAGE
                    </div>
                    <div className="col-md-7 center-border-3" data-aos="fade-up">
                        <h1>Custom Your Device</h1>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit laborum doloremque commodi ut alias tempore, minima, soluta labore optio magnam recusandae dolore vero, saepe quod. Optio nam recusandae nemo reprehenderit!</p>
                    </div>
                    </div>
                </div>
            </section>
            <section className="bg-light">
                <div className="container height-limit">
                    <div className="row">
                    <div className="col-md">
                        HELLOW
                    </div>
                    <div className="col-md">
                        HELLOW
                    </div>
                    </div>
                </div>
            </section>


        </>
        
        )
  };
  
  export default Home;
  