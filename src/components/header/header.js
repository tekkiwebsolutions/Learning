import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../fonts/fonts.css';
import logo from '../../images/logo.png';
import { Link } from "gatsby";

const Header = () => (
	<header>
		<Container>
		    <Navbar expand="lg">
			  <Navbar.Brand><Link to="/"><img src={logo} alt="logo" /></Link></Navbar.Brand>
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse id="basic-navbar-nav">
			    <Nav className="">
			      <Link to="/study-support" activeClassName="active">Study Support</Link>
			      <Link to="/tutoring" activeClassName="active">Tutoring</Link>
			      <Link to="/" activeClassName="active">Online Courses</Link>
			      <Link to="/about" activeClassName="active">About Us</Link>
			    </Nav>
			  </Navbar.Collapse>
			  <div className="">
			 	<Link to="/" className="get-started-btn">Get Started</Link>
			  </div>
			</Navbar>
		</Container>
	</header>
 
)
export default Header
