import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../fonts/fonts.css';
import '../common.css';
import { Link } from "gatsby";
import Header from '../components/header/header.js';
import '../components/header/header.css';
import girlsuperpower from '../images/girl-superpower.png';
import boysuperpower from '../images/boy-superpower.png';
import dummyImg from '../images/dummy-img.png';
import sam from '../images/sam.jpg';
import success from '../images/success.jpg';
import Footer from '../components/footer/footer.js';
import '../components/footer/footer.css';
import Approach from '../components/personalized-approach/personalized-approach.js';
import Students from '../components/successful-students/successful-students.js';

const Home = () => (
	<div>
		<Header></Header>
		<div className="main-content pink-bg pb-5">
			<Container>
				<div className="position-relative">
					<img src={girlsuperpower} alt="girlsuperpower" className="girlsuperpower" />
					<img src={boysuperpower} alt="boysuperpower" className="boysuperpower" />
					<div className="center">
						<h4>Finally, defeat your schoolwork struggles.</h4>
						<h2 className="bg-title mt-4 clearfix"><mark className="blue-bg">Unleash your student’s learning superpowers with LessonUp</mark></h2>
						<p>With our help, you can give your student the critical thinking and study skills they need to succeed in Maths & Science — no matter their current skill level.</p>
						<p>Schedule a free Student Success Strategy Session to discuss your student’s goals and get a custom learning plan:</p>
						<div className="mt-3">
							<Link to="/" className="btn white-btn">Unleash my student’s superpowers</Link>
						</div>
					</div>
				</div>
				<Row className="pt-9">
				    <Col xs={12} md={4}>
				      <Link to="/" className="white-box">
				      	<img src={dummyImg} alt="dummyImg" className="img-fluid" />
				      	<h4 className="mt-3 mb-2">PERSONALISED LEARNING</h4>
				      	<p>You get study plans that are aligned with your student’s unique needs and learning style.</p>
				      </Link>
				    </Col>
				    <Col xs={12} md={4}>
				      <Link to="/" className="white-box">
				      	<img src={dummyImg} alt="dummyImg" className="img-fluid" />
				      	<h4 className="mt-3 mb-2">PROVEN STUDY STRATEGIES</h4>
				      	<p>You get study plans that are aligned with your student’s unique needs and learning style.</p>
				      </Link>
				    </Col>
				    <Col xs={12} md={4}>
				      <Link to="/" className="white-box">
				      	<img src={dummyImg} alt="dummyImg" className="img-fluid" />
				      	<h4 className="mt-3 mb-2">EXPERIENCED TUTORS</h4>
				      	<p>You get study plans that are aligned with your student’s unique needs and learning style.</p>
				      </Link>
				    </Col>
				</Row>
			</Container>
			<div className="mt-4 pt-9">
				<Row className="ml-0 mr-0">
				    <Col xs={12} md={6}>
				    	<img src={sam} className="" alt="sam" />
					      <div className="round-circle">
					      	<p>“I’ve learned the most amazing things about how to study. No one has ever taught me that before.”</p>
					      </div>
				    </Col>
				    <Col xs={12} md={6}>
				      <p>“Jordan answers questions you thought you had. Then he adds and builds on the information so that you learn much more than you expected.</p>
				      <p>He even helped me make a game plan for how to complete my assignment!</p>
				      <p>I’ve learned the most amazing things about how to study. No one has ever taught me that before. I am very grateful to have him and LessonUp.”</p>
				      <p>SAM<br/>Student, Yr 11</p>
				    </Col>
				</Row>
			</div>
		</div>
		<Container>
			<h2 className="bg-title mt-5 clearfix"><mark className="pink-bg">The supercharged skills your student needs to master coursework, conquer exams & become a superhero in the classroom</mark></h2>
			<h4 className="mb-3">Most students struggle in school because they don’t truly understand how to learn.</h4>
			<p>LessonUp changes that. We teach students the skills and strategies they need to grasp key concepts, solve problems, keep up with lessons, study, and perform well on exams.</p>
			<Row className="mt-3 mb-5">
			    <Col xs={12} md={4} className="text-center">
			    	<div className="dummy-circle-img">
				    </div>
				    <h4 className="mb-2">PRIVATE TUTORING</h4>
				    <p>The extra math & science support your student needs to solve problems confidently</p>
				    <div className="">
							<Link to="/" className="btn blue-btn">Get tutoring</Link>
					</div>
			    </Col>
			    <Col xs={12} md={4} className="text-center">
			    	<div className="dummy-circle-img">
				    </div>
				    <h4 className="mb-2">STUDY SUPPORT</h4>
				    <p>The study skills your student needs to plan and prep for assignments and exams</p>
				    <div className="">
						<Link to="/" className="btn blue-btn">Get study skills</Link>
					</div>
			    </Col>
			    <Col xs={12} md={4} className="text-center">
			    	<div className="dummy-circle-img">
				    </div>
				    <h4 className="mb-2">ONLINE COURSES</h4>
				    <p>The self-paced courses your student needs to master fundamental math skills</p>
				    <div className="">
						<Link to="/" className="btn blue-btn">See all courses</Link>
					</div>
			    </Col>
			</Row>
			<div className="text-center">
				<p className="mb-1"><b>Not sure exactly what you need?</b> Let us help.</p>
				<p>Click here to schedule a free Student Success Strategy session.</p>
			</div>
		</Container>
		<Approach></Approach>
		<div className="pink-bg position-relative pb-30">
			<Row>
				<Col xs={12} md={9} className="pl-0 mt-minus-100" >
					<img src={success} alt="" className="img-fluid" />
					<div className="round-circle claire-parent">
						<p className="mb-0">“Jordan designed his lessons based on my child's needs after patiently going over every single issue. Seeing the smile on my son's face after the tutoring was priceless.”</p>
						<p className="mb-0">CLAIRE</p>
					</div>
				</Col>
			</Row>
		</div>
	<div className="pt-9 pb-30">
		<Container>
			<Row>
				<Col md={6}>
					<h5>EXPERIENCED TUTORS, PROVEN STRATEGIES</h5>
					<h2 className="bg-title mt-4 clearfix"><mark className="pink-bg">Work with learning specialists (not recent grads) with scientifically proven study strategies</mark></h2>
					<p><b>Other tutoring companies rely on high school students and recent graduates without any significant teaching background. Not us.</b></p>
					<p>At LessonUp, we use proven learning strategies that are supported by science.</p>
					<p>When you partner with our team, you get access to learning specialists who are armed with the knowledge and experience to help your student</p>
				</Col>
				<Col md={6} className="position-right mt-minus-250">
					<img src={success} className="img-fluid" alt="" />
				</Col>
			</Row>
		</Container>
	</div>
	<div className="sky-bg position-relative pb-6">
		<Row className="justify-content-end">
			<Col xs={12} md={9} className="pr-0 mt-minus-100" >
				<img src={success} alt="" className="img-fluid" />
				<div className="round-circle claire-parent success-student">
					<p className="mb-0">“Now I worry less about the numbers and more focus more on the concepts and how to connect the concepts.</p>
					<p className="mb-0">Jordan’s very passionate about maths. And it makes him an awesome tutor.”</p>
				</div>
			</Col>
		</Row>
		
		<Students></Students>
	</div>
	<div className="pink-bg pt-9 pb-6 success-session">
		<Container>
			<h3 className="blue-color mb-3">“Within minutes, he helped me understand a concept I’d been struggling with for weeks.”<span>- Superpowers activated.</span></h3>
			<p><b>Give your student the supercharged skills and strategies to succeed in
			school.</b></p>
			<p>How would it feel to hear your student say “I did it, Mom!”? To watch the confidence shine through as they tackle a challenging set of problems? Or to see them proudly wave their exam results in the air?</p>
			<p>This future can be your student’s new reality.</p>
			<p>Get started today with a free Student Success Strategy Session. We’ll discuss your student’s goals. And you’ll get a personalised learning plan.</p>
			<div className="mb-5 mt-4">
				<Link to="/" className="btn blue-btn">Schedule our success session</Link>
			</div>	
			<div className="text-center mb-5">
				<img src={success} alt="" className="img-fluid" />
			</div>	
		</Container>
	</div>
	<Footer></Footer>
	</div> 
)
export default Home
