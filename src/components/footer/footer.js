import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../fonts/fonts.css';
import { Link } from "gatsby";
import footerlogo from '../../images/footer-logo.png'

const Footer = () => (
	<footer>
		<Container>
		    <Row>
		    	<Col xs={12} md={5}>
		    		<img src={footerlogo} className="mb-3" alt="footer-logo" />
		    		<p>ABN: 58 528 351 486 Copyright © Lesson Up.</p>
		    		<p>All Rights Reserved. The VCAA does not endorse and is not a!liated with LessonUP or lessonup.com.au. The VCAA provides the only o!cial, up to date versions of VCAA publications and information about courses including the VCE. VCE® is a registered trademark of the VCAA.</p>
		    	</Col>
		    	<Col xs={12} md={3}>
		    		<h4 className="mb-3">Navigation</h4>
		    		<ul>
		    			<li>
		    				<Link to='/study-support'>Study Support</Link>
		    			</li>
		    			<li>
		    				<Link to='/tutoring'>Tutoring</Link>
		    			</li>
		    			{/* <li>
		    				<Link to='/'>Online Courses</Link>
		    			</li> */}
		    			<li>
		    				<Link to='/about'>About Us</Link>
		    			</li>
		    		</ul>
		    	</Col>
		    	<Col xs={12} md={4}>
		    		<h4 className="mb-3">Contact Us</h4>
		    		<p>Phone:<a href='callto:0407 145 612'>0407 145 612</a></p>
		    		<p>Call us Monday to Friday between 3pm - 6pm or leave us a message and we'll call you back!</p>
		    		<p>Email:<a href='mailto:hello@lessonup.com.au'>hello@lessonup.com.au</a></p>
		    		<p>Address: We'd love to see you too, but we're only online! Our tutors meet students at homes and local libraries.</p>
		    	</Col>
		    </Row>
		</Container>
	</footer>
 
)
export default Footer
