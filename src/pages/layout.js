import { Outlet, Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Layout = () => {
  return (
    <>
        <Navbar bg="primary fixed-top" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React SquadTech</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/#/">Home</Nav.Link>
                    <Nav.Link href="/#/blogs">Blogs</Nav.Link>
                    <NavDropdown title="product" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/">Home</NavDropdown.Item>
                        <NavDropdown.Item href="blogs">Blogs</NavDropdown.Item>
                        <NavDropdown.Item href="contact">Contact</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/#/contact">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
      <Outlet />
    </>
  )
};


// const Layout = () => {
//     return (
//       <>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/blogs">Blogs</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </nav>
  
//         <Outlet />
//       </>
//     )
//   };

export default Layout;
