import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../fonts/fonts.css';
import '../common.css';
/*import { Link } from "gatsby";*/
import Header from '../components/header/header.js';
import '../components/header/header.css';
import success from '../images/success.jpg';
/*import sam from '../images/sam.jpg';*/
import Footer from '../components/footer/footer.js';
import '../components/footer/footer.css';

import ContactForm from '../components/contactform/contactform.js';
import '../components/contactform/contactform.css';
import {Helmet} from "react-helmet";

const Contact = () => (
	<div>
		<Helmet>
            <title>Contact</title>
            <body class='blue-header' />
        </Helmet>
		<Header></Header>
		<div className="sky-bg pt-9 pb-15">
			<Container>
				<h5>CONTACT US</h5>
				<h2 className="bg-title mt-4 clearfix"><mark className="blue-bg">Discuss your student’s goals with our experienced learning specialists</mark></h2>
				<p><b>Ready to unleash your student’s learning superpowers?</b> Let’s chat. Please schedule a free Student Success Strategy Session below.</p>
				<p><b>Have other questions?</b> We also welcome your calls and emails. You’ll find all the contact info you need below.</p>
				<div className="text-center pt-5">
					<h2 className="contact-heading blue-color">Schedule your free Student Success <br/> Strategy Session:</h2>
					<p className="pt-4">You can expect a response from our team within 48 hours or on the next business day.</p>
					<ContactForm></ContactForm>
				</div>
			</Container>
		</div>
		<div className="pink-bg pt-20 pb-15">
			<Row className="align-items-baseline">
				<Col md={6} className="pl-0">
					<img src={success} alt="" className="img-fluid" />
					<div className="round-circle right-circle">“Seeing the smile on my son's face after the tutoring sessions was priceless...</div>
				</Col>
				<Col md={6}>
					<p>The tutor designed his lessons based on my child's needs after patiently going over every single issue.</p>
					<p>It is especially helpful that, as a parent, he responds so quickly to my messages.”</p>
					<p>CLAIRE<br/> Parent</p>
				</Col>
			</Row>
		</div>
		<div className="pt-6 pb-6">
			<Container>
				<p><b>Phone:</b> 0407 145 612</p>
				<p>You can reach us by phone during office hours Monday - Friday, 3 pm - 6 pm.<br/>
					Leave us a message anytime, and we'll call you back.</p>

				<p><b>Email:</b> hello@lessonup.com.au</p>
				<p><b>Address:</b> We'd like to see you too, but our o!ce is entirely virtual. LessonUp tutors and coaches meet students at their homes, local libraries, and online via Zoom.</p>
				<p><b>Locations:</b> Because learning skills transcend city limits, provincial, and country borders...</p>
				<ul>
					<li>Online sessions are available to all of Australia and beyond.</li>
					<li>In-person sessions are available in metropolitan Melbourne.</li>
				</ul>
			</Container>
		</div>
		<div className="sky-bg pt-6 pb-6">
			<Container>
				<h2 className="blue-color text-center">Students say: “I highly recommend - 10/10!”</h2>
				<Row className="pt-6">
					<Col md={6}>
						<p>“I highly recommend Jordan! He's a really nice guy, easy to understand and communicate with! Not only helps you with questions, but also with study tips and basic knowledge - 10/10!”</p>
						<p>JULIE<br/>Student, Yr 12</p>
					</Col>
					<Col md={6}>
						<p>“I thank Steve very much for his assistance during VCE, such as reviewing incorrect answers from SACs, and referring to past papers leading up to the final exam.”</p>
						<p>CATHERINE<br/>Student, Yr 12</p>
					</Col>
				</Row>
			</Container>
		</div>
		<Footer></Footer>
	</div>
)
export default Contact
