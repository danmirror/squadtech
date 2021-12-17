import "./footer.css";
import logo from "../image/logo.png";
import Darkmode from 'darkmode-js';

const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();
  

const Footer = () => {
    return (
    <>
        <section className="footer description-model-foot">
            <div className=" bg-light-dark px-3 py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <img className="d-block " src={logo} height="100" width="300" alt=""/>
                    {/* <h4>SquadTech</h4> */}
                    <p>
                    Squad Technology indonesia adalah platform yang digunakan untuk IOT(Internet Of Things), platform ini digunakan untuk melakukan monitoring, control dan berbagai kebutuhan tentang era technology berbasis internet saat ini 
                    </p>
                    </div>
                    <div className="col-md-3">
                    <div className="row  mb-4">
                        <div className="col-md-12 mb-2">
                            Product:
                        </div>
                        <div className="col-md-12">
                            <ul className="list-group font-format">
                                <li className="list-group-item bg-transparent d-flex border-0 py-1 px-0"> 
                                   <a href="#">IOT Device</a>
                                </li>
                                <li className="list-group-item bg-transparent d-flex border-0 py-1 px-0"> 
                                   <a href="#">Industy Automation</a>
                                </li>
                                <li className="list-group-item bg-transparent d-flex border-0 py-1 px-0"> 
                                   <a href="#">Website</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="row  mb-4">
                        <div className="col-md-12 mb-2">
                            Contact:
                        </div>
                        <div className="col-md-12">
                        <div className="logo-contact">
                        <a href="" className="mx-2 my-2">
                        <svg className="icon whatsapp" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
                        </svg>
                        </a>
                        <a href="" className="mx-2 my-2">
                        <svg className="icon email" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M19.07 13.88L13 19.94V22H15.06L21.12 15.93M22.7 13.58L21.42 12.3C21.32 12.19 21.18 12.13 21.04 12.13C20.89 12.14 20.75 12.19 20.65 12.3L19.65 13.3L21.7 15.3L22.7 14.3C22.89 14.1 22.89 13.78 22.7 13.58M11 18H4V8L12 13L20 8V10H22V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H11V18M20 6L12 11L4 6H20Z" />
                        </svg>
                        </a>
                        <a href="" className="mx-2 my-2">
                        <svg className="icon maps" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 4C14.2 4 16 5.8 16 8C16 10.1 13.9 13.5 12 15.9C10.1 13.4 8 10.1 8 8C8 5.8 9.8 4 12 4M12 2C8.7 2 6 4.7 6 8C6 12.5 12 19 12 19S18 12.4 18 8C18 4.7 15.3 2 12 2M12 6C10.9 6 10 6.9 10 8S10.9 10 12 10 14 9.1 14 8 13.1 6 12 6M20 19C20 21.2 16.4 23 12 23S4 21.2 4 19C4 17.7 5.2 16.6 7.1 15.8L7.7 16.7C6.7 17.2 6 17.8 6 18.5C6 19.9 8.7 21 12 21S18 19.9 18 18.5C18 17.8 17.3 17.2 16.2 16.7L16.8 15.8C18.8 16.6 20 17.7 20 19Z" />
                        </svg>
                        </a>
                        <a href="" className="mx-2 my-2">
                        <svg className="icon linkedin" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                        </svg>
                        </a>
                        
                    </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="container-foot">
                <div className="row">
                    <div className="col-sm-12 text-center my-2" >
                        <p> &copy;Copyright | SquadTech 2018-2021</p>
                    </div>
                    
                </div>
            </div>
        <button click="toggle()" className="darktoggle"></button>
        </section>
        
    </>
    )
  };
  
  export default Footer;
  