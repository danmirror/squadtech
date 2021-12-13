import Carousel from 'react-bootstrap/Carousel';
import bg1 from "../image/bg1.jpg";
import bg2 from "../image/bg2.jpg";
import bg3 from "../image/bg3.jpg";
import "./home.css";

const Home = () => {
    return(
        <>
            <Carousel fade >
                <Carousel.Item interval={3000}>
                    <img className="d-block w-100" src={bg1}  />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img className="d-block w-100" src={bg2}  />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img className="d-block w-100" src={bg3}  />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
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
            <section className="bg-light-dark">
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
  