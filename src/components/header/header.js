import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../fonts/fonts.css';
import logo from '../../images/logo.png'

const Header = () => (
	<header>
		<Container>
		    <Navbar expand="lg">
			  <Navbar.Brand href="#home"><img src={logo} alt="logo" /></Navbar.Brand>
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse id="basic-navbar-nav">
			    <Nav className="">
			      <Nav.Link href="#home">Study Support</Nav.Link>
			      <Nav.Link href="#link">Tutoring</Nav.Link>
			      <Nav.Link href="#home">Online Courses</Nav.Link>
			      <Nav.Link href="#link">About Us</Nav.Link>
			    </Nav>
			  </Navbar.Collapse>
			  <div className="">
	      		<Nav.Link href="#deets" className="get-started-btn">Get Started</Nav.Link>
			  </div>
			</Navbar>
		</Container>
	</header>
 
)
export default Header
