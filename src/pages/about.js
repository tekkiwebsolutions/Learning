import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../fonts/fonts.css';
import '../common.css';
import { Link } from "gatsby";
import Header from '../components/header/header.js';
import '../components/header/header.css';
import success from '../images/success.jpg';
import sam from '../images/sam.jpg';
import Footer from '../components/footer/footer.js';
import '../components/footer/footer.css';
import Approach from '../components/personalized-approach/personalized-approach.js';
import {Helmet} from "react-helmet";

const About = () => (
	<div>
		<Helmet>
            <body class='blue-header' />
        </Helmet>
		<Header></Header>
		<div className="sky-bg pt-9 pb-15">
			<Container>
				<h5>ABOUT US</h5>
				<h2 className="bg-title mt-4 clearfix"><mark className="blue-bg">When your student’s future is at stake, who you trust matters</mark></h2>
				<p>LessonUp isn’t your typical tutoring company. Our specialists use a dynamic and adaptive approach to learning that features scientifically proven strategies and tools. So your student gets the results you’re looking for even faster.</p>
				<Row className="mt-5 pb-6">
					<Col md={4} className="text-center">
						<h5 className="white-heading">EXPERIENCED SPECIALISTS</h5>
						<p>Unlike high school students and recent grads, you can trust that our learning specialists have the skills to teach.</p>
					</Col>
					<Col md={4} className="text-center">
						<h5 className="white-heading">PROVEN STUDY STRATEGIES</h5>
						<p>For us, learning isn’t a guessing game. We use scientifically proven learning strategies for more predictable results.</p>
					</Col>
					<Col md={4} className="text-center">
						<h5 className="white-heading">PERSONALISED APPROACH</h5>
						<p>Forget one-size-fits-all learning. Give your student the personalised support he or she needs to succeed in school.</p>
					</Col>
				</Row>
				<h3 className="blue-color text-center pb-5">Parents say LessonUp tutors “go the extra mile”</h3>
				<Row>
					<Col md={6}>
						<div className="mb-4">
							<p>“Jordan truly cares about his students and cares even more about getting them where they need to go.</p>
							<p>He doesn't watch the clock as some tutors do. And he provides extra support outside of lessons. It's clear he wants the child to fully understand and will go the extra mile for them.</p>
							<p>I highly recommend LessonUp if you are looking for that extra attention and care your child may need.”</p>
							<p>FIONA <br/>Parent</p>
						</div>
						<div className="mb-4">
							<p>“Jordan knows his stu!. I just learned the most amazing thing about how to study. No one has ever taught me that before. I am very grateful to have him and LessonUp.”</p>
							<p>SAM <br/>Student, Yr 11</p>
						</div>
					</Col>
					<Col md={6} className="position-right">
						<img src={success} className="img-fluid" alt="" />
						<div className="round-circle bottom-circle">
							<p className="mb-1">“I highly recommend Jordan! He's a really nice guy, easy to understand and communicate with! Not only helps you with questions, but also with study tips and basic knowledge - 10/10!”</p>
							<p>JULIE<br/>Student, Yr 12</p>
						</div>
					</Col>
			</Row>
			</Container>
		</div>
		<div className="text-center pt-6 pb-6">
			<Container>
				<h5>OUR MISSION</h5>
				<h2 className="bg-title mt-4 clearfix"><mark className="pink-bg">We teach students how to learn so that any challenge becomes easier to master</mark></h2>
				<p>At LessonUp, we believe students deserve more than “a little extra help” to survive the term. Our mission is to teach them the lifelong learning skills they need to thrive.</p>
				<p>Not only will students master critical concepts, get better marks on exams, and excel in the classroom, they’ll also have the skills to conquer any challenge that comes their way.</p>
				<p><b>Both in school and beyond.</b></p>
			</Container>
		</div>
		<div className="pink-bg pt-6 pb-6">
			<Container>
				<div className="text-center clearfix">
					<h5>WHY US</h5>
					<h2 className="bg-title mt-4 clearfix"><mark className="blue-bg">Work with learning specialists (not recent grads) with scientifically proven learning strategies</mark></h2>
				</div>
					<Row>
						<Col md={6}>
							<p><b>Other tutoring companies rely on high school students and recent graduates without any significant teaching background. Not us.</b></p>
							<p>At LessonUp, we use proven learning strategies that are supported by science.</p>
							<p>When you partner with our team, you get access to learning specialists who are armed with the knowledge and experience to help your student become a power learner.</p>
							<div className="text-center">
								<Link to="/" className="btn blue-btn">Work with the specialists</Link>
								<p className="mt-4">Next: Schedule your free Student Success Strategy Session.</p>
							</div>
						</Col>
					</Row>
				
			</Container>
		</div>
		<div className="pt-6 pb-6 text-center">
			<h4>Yes, all LessonUp tutors have a Working With Children Check</h4>
		</div>
		<Approach></Approach>
		<div className="pink-bg pt-6 pb-6">
			<Container>
				<div className="text-center mb-4 clearfix">
					<h5>THE RENAISSANCE METHOD</h5>
					<h2 className="bg-title mt-4 clearfix"><mark className="blue-bg">Here’s how we help students develop a critical thinking toolkit to tackle any learning challenge</mark></h2>
				</div>
				<Row className="align-items-center">
					<Col md={6}>
					   <p><b>The Renaissance Method is the foundation of LessonUp’s teaching approach.</b></p>
					  <p>With it, we help students develop the critical thinking skills they need to:</p>
					  <ul>
					  	<li>- decode key concepts</li>
					  	<li>- approach challenging problems</li>
					  	<li>- prepare for tough assessment periods, and</li>
					  	<li>- get better marks on exams.</li>
					  </ul>
					  <h4 className="mt-4 mb-4">How?</h4>
					  <p>We show them how to develop their own systems of evaluation, to learn how to enquire, and to build a toolkit of strategies and skills to select the most suitable approach for the task at hand.</p>
					 <p>As a result, students can finally take back control of their learning.</p>
					</Col>
					<Col md={6}>
						<img src={sam} className="img-fluid" alt="" />
					</Col>
				</Row>
			</Container>
		</div>
		<div className="pt-6 pb-6">
			<Container>
				<div className="text-center clearfix">
					<h5>OUR FOUNDERS</h5>
					<h2 className="bg-title mt-4 clearfix"><mark className="pink-bg">Meet the Maths & Science masterminds behind LessonUp’s learning approach</mark></h2>
				</div>
				<Row className="pt-6 founder align-items-center">
					<Col md={6}>
						<img src={success} className="img-fluid" alt="" />
						<div className="round-circle founder-round-circle right-circle">Jordan Moschovitis</div>
					</Col>
					<Col md={6} className="custom-pad">
						<p>Jordan holds a Master’s degree in Physics and a Diploma in Pure and Applied Mathematics.</p>
						<p>He has coached students at all skill levels on how to take charge of their learning and improve their grades in Maths & Science.</p>
						<p>Over the years, Jordan has developed a dynamic and adaptive approach to learning that features scientifically proven strategies and tools.</p>
						<p>This result-boosting method is now the backbone of LessonUp’s approach.</p>
					</Col>
				</Row>
				<Row className="pt-6 founder align-items-center">
					<Col md={6}>
						<p>Steven holds a Master’s degree in Mathematics from the University of Melbourne.</p>
						<p>He has nearly a decade of experience tutoring students both privately and professionally inside the university environment.</p>
						<p>Study hacks and metacognition are special interest areas for Steven. Both are passions he enthusiastically shares with his students.</p>
						<p>This result-boosting method is now the backbone of LessonUp’s approach.</p>
					</Col>
					<Col md={6} className="custom-pad">
						<img src={success} className="img-fluid" alt="" />
						<div className="round-circle founder-round-circle left-circle">Steven Maharaj</div>
					</Col>
				</Row>
			</Container>
		</div>
		<div className="sky-bg text-center pt-6 pb-6">
			<h2 className="blue-color mb-3">Want to join the LessonUp team?</h2>
			<p>Please send us an email at <a href="mailto:hello@lessonup.com.au">hello@lessonup.com.au</a></p>
		</div>
		<div className="pink-bg pt-15 pb-6 founder">
			<Container>
				<Row className="align-items-center">
					<Col md={6}>
						<img src={success} className="img-fluid" alt="" />
						<div className="round-circle smile-round right-circle">“The smile on my son’s face was priceless...”</div>
					</Col>
					<Col md={6} className="custom-pad">
						<p>“Seeing the smile on my son's face after the tutoring sessions was priceless.</p>
						<p>The tutor designed his lessons based on my child's needs after patiently going over every single issue.</p>
						<p>It is especially helpful that, as a parent, he responds so quickly to my messages.”</p>
						<p>CLAIRE<br/>Parent</p>
					</Col>
				</Row>
			</Container>
		</div>
		<div className="sky-bg text-center pt-6 pb-6">
			<Container>
				<h3 className="mb-3">Learning specialists, proven strategies AND a personalised approach. Now that’s a powerful combination!</h3>
				<p>Get your student started today. <br/> Schedule a free Student Success Strategy Session.</p>
				<div className="">
					<Link to="/" className="btn blue-btn">Get it all - Schedule a session</Link>
				</div>
			</Container>
		</div>
		<Footer></Footer>
	</div>
)
export default About
