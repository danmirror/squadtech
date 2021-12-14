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
        <section className="footer">
            <div className=" bg-light-dark px-3 py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <img className="d-block " src={logo} height="100" width="300"/>
                    {/* <h4>SquadTech</h4> */}
                    <p>
                    Squad Technology indonesia adalah platform yang digunakan untuk IOT(Internet Of Things), platform ini digunakan untuk melakukan monitoring, control dan berbagai kebutuhan tentang era technology berbasis internet saat ini 
                    </p>
                    </div>
                    <div className="col-md-3">
                    <div className="row">
                        <div className="col-md-12 mb-3">
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
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            Contact:
                        </div>
                        <div className="col-md-12">
                            <ul className="list-group font-format">
                                <li className="list-group-item bg-transparent d-flex border-0 py-1 px-0"> 
                                    <svg width="24px" height="24px" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z" />
                                    </svg>
                                    +62 812-7103-5056 
                                </li>
                                <li className="list-group-item bg-transparent d-flex border-0 py-1 px-0"> 
                                    <svg width="40px" height="24px" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M12 4C14.2 4 16 5.8 16 8C16 10.1 13.9 13.5 12 15.9C10.1 13.4 8 10.1 8 8C8 5.8 9.8 4 12 4M12 2C8.7 2 6 4.7 6 8C6 12.5 12 19 12 19S18 12.4 18 8C18 4.7 15.3 2 12 2M12 6C10.9 6 10 6.9 10 8S10.9 10 12 10 14 9.1 14 8 13.1 6 12 6M20 19C20 21.2 16.4 23 12 23S4 21.2 4 19C4 17.7 5.2 16.6 7.1 15.8L7.7 16.7C6.7 17.2 6 17.8 6 18.5C6 19.9 8.7 21 12 21S18 19.9 18 18.5C18 17.8 17.3 17.2 16.2 16.7L16.8 15.8C18.8 16.6 20 17.7 20 19Z" />
                                    </svg>
                                    Gg. nangka, NO 2, Sewon, Bantul, D.I. yogyakarta 55188
                                </li>
                            </ul>
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
  