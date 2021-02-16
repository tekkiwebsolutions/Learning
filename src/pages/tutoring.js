import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../fonts/fonts.css';
import '../common.css';
import { Link } from "gatsby";
import Header from '../components/header/header.js';
import '../components/header/header.css';
import success from '../images/success.jpg';
/*import sam from '../images/sam.jpg';*/
import Footer from '../components/footer/footer.js';
import Process from '../components/process/process.js';
import '../components/footer/footer.css';
import Students from '../components/successful-students/successful-students.js';
import ContactForm from '../components/contactform/contactform.js';
import Pricing from '../components/pricing/pricing.js';
import ScheduleSession from '../components/schedule-success-session/schedule-success-session.js';
import '../components/contactform/contactform.css';
import {Helmet} from "react-helmet";
import image1 from '../images/img1.jpg';
import scrollTo from 'gatsby-plugin-smoothscroll';
const Tutoring = () => (
	<div>
		<Helmet>
            <body class='blue-header tutoring-page' />
        </Helmet>
		<Header></Header>
		<div className="sky-bg pt-9 pb-30">
			<Container>
				<h5>PRIVATE TUTORING</h5>
				<h2 className="bg-title mt-4 clearfix"><mark className="blue-bg">The Maths & Science tutoring your student needs to solve problems confidently</mark></h2>
				<p>Struggling in school is stressful. Private tutoring helps students master coursework, get better marks, and regain confidence in the classroom.</p>
				<p>LessonUp gives your student extra Maths and Science support, so they can catch up, stay on track, and even propel themselves to the top of the class. You get:</p>
				<Row className="mt-5 pb-4">
					<Col md={4} className="text-center">
						<h5 className="white-heading">PERSONALISED PLANS</h5>
						<p>aligned to fit your student’s unique learning needs</p>
					</Col>
					<Col md={4} className="text-center">
						<h5 className="white-heading">EXPERIENCED TOURS</h5>
						<p>who use scientifically proven learning strategies and tools</p>
					</Col>
					<Col md={4} className="text-center">
						<h5 className="white-heading">STRUCTURED SESSIONS</h5>
						<p>with specific goals to measure progress and support learning.</p>
					</Col>
				</Row>
			</Container>
		</div>
		<div className="pink-bg position-relative">
			<Row className="align-items-center">
				<Col xs={12} lg={3} className="pt-5">
					<p>“Jordan knows his stuff.</p>
					<p>He answers questions you thought you had. Then he adds and builds the information so that you learn much more than you expected.</p>
					<p>He even helped me make a game plan for how I would complete my assignment!</p>
					<p>I learned the most amazing things about how to study. No one has ever taught me that before.</p>
					<p>SAM <br/>Student, Yr 11</p>
				</Col>
				<Col xs={12} lg={9} className="pr-0 mt-minus-100" >
					<img src={success} alt="" className="img-fluid full-width" />
					<div className="round-circle plr-5 custom-tutoring-round box-shadow">
						<p className="mb-0">“I learned the most amazing things about how to study. No one has ever taught me that before.”</p>
					</div>
				</Col>
			</Row>
			<Container>
				<div className="text-center pt-6 clearfix">
					<h5>TUTORING AREAS</h5>
					<h2 className="bg-title mt-4 clearfix"><mark className="blue-bg">The extra Maths & Science skills your student needs to master assignments and conquer exams</mark></h2>
				</div>
				<Row className="mt-5 pb-15">
					<Col xs={12} md={4}>
						<h5 className="mb-3">IN MATHS:</h5>
						<p>Yr 10: General and Extension Math<br/> VCE: Further, Methods, Specialist University: Applied Mathematics (Calculus, Di!erential Equations, Complex Analysis), Stochastic Modelling, and Probability Maths tutoring for Biomedicine</p>
					</Col>
					<Col xs={12} md={4}>
						<h5 className="mb-3">IN SCIENCE:</h5>
						<p>Physics tutoring VCE and University Physics tutoring for Biomedicine Pre-VCE Science for Enquiring Minds (a physical science introduction to better prepare for VCE Chemistry & Physics)</p>
					</Col>
					<Col xs={12} md={4}>
						<h5 className="mb-3">OTHER AREAS:</h5>
						<p>High School Business Management Essay Writing Proofreading & Editing</p>
					</Col>
				</Row>
			</Container>
		</div>
		<div className="mt-minus-100">
			<Row>
				<Col xs={12} md={7} className="pl-0">
					<img src={image1} className="img-fluid" alt="" />
				</Col>
			</Row>
		</div>
		<Row className="justify-content-end pb-6 pr-5">
			<Col md={8}>
				<div className="mt-minus-140">
					<h2 className="bg-title mt-4 mb-5 clearfix"><mark className="pink-bg">Get better marks faster because we use scientifically proven learning strategies</mark></h2>
				</div>
				<p>At LessonUp, we specialise in the science of learning. Our mission is to strengthen your student’s learning skills, so he or she can:</p>
				<ul className="mb-2">
					<li>-master critical concepts</li>
					<li>-keep up with lessons</li>
					<li>-get better marks on exams</li>
					<li>-and gain confidence in the classroom</li>
				</ul>
				<p>That’s why we use scientifically proven learning strategies, structure sessions with measurable goals, monitor progress regularly, and personalise the approach to support your student’s unique needs.</p>
				<p>We’re not just tutors, we’re learning specialists — armed with the knowledge and experience to unlock your student’s learning superpowers.</p>
				<button onClick={() => scrollTo('#session')} className="btn blue-btn mb-3">Give better marks faster</button>
				<p>Next: Schedule your free Student Success Strategy Session.</p>
			</Col>
		</Row>
		<div className="sky-bg pt-6 pb-6">
			<Container>
				<div className="text-center">
			        <h5>TUTORING ADVANTAGES</h5>
			    	<h2 className="bg-title mt-4 mb-5 clearfix"><mark className="blue-bg">When your student understands how to learn, any subject becomes easier to master</mark></h2>
				</div>
				<div className="col-lg-8 offset-lg-2">
					<p className="pr5">It doesn’t matter if your student’s goal is to catch up, stay on track, or excel in the classroom. Improvement is possible. Here’s how we do it:</p>
					<h4 className="blue-color mb-2">Personalised tutoring aligned with your student’s needs</h4> 
					<p className="pr5">We personalise each tutoring program to meet your student’s individual strengths, weaknesses, and learning style.</p>
					<h4 className="blue-color mb-2">Structured sessions with specific goals</h4>
					<p className="pr5">We personalise each tutoring program to meet your student’s individual strengths, weaknesses, and learning style.</p>
					<h4 className="blue-color mb-2">Proven approach that’s supported by science</h4>
					<p className="pr5">Unlike less experienced tutors who just show up and explain things, we use a dynamic and adaptive approach to learning that’s backed by scientific studies.</p>
					<h4 className="blue-color mb-2">Teaching supports that help students learn more e!ectively</h4>
					<p className="pr5">Our tutors show up prepared with lesson plans, study time templates, note-taking tips, and exam success strategies.</p>
					<h4 className="blue-color mb-2">Flexible meetups that suit your schedule</h4>
					<p className="pr5">We offer tutoring both in-person and online, so your student can meet his or her tutor at home, at the local library, or on a Zoom video call.</p>
					<h4 className="blue-color mb-2">All-day question support between sessions</h4>
					<p className="pr5">Your student gets access to his or her tutor almost 24/7. Get same-day support on unexpected questions without having to wait for the next tutoring session.</p>
				</div>
			</Container>
		</div>
		<Process></Process>
		<div className="pink-bg pb-6">
			<Students></Students>
		</div>
		<Pricing></Pricing>
		<div className="pink-bg text-center pt-6 pb-6" id="session">
			<Container>
				<div className="clearfix">
					<h2 className="bg-title mt-4 mb-5 clearfix"><mark className="blue-bg">Get your student started today with a free Student Success Strategy Session</mark></h2>
					<p>During your consultation, we’ll discuss your student’s specific learning needs, so we can make a personalised plan to reach his or her goals.</p>
					<ContactForm></ContactForm>
				</div>
			</Container>
		</div>
		<div className="pt-6 pb-6">
			<Container>
				<div className="text-center clearfix">
					<h5>FAQS</h5>
					<h2 className="bg-title mt-4 mb-5 clearfix"><mark className="pink-bg">“This sounds amazing! How do you…”</mark></h2>
				</div>
				<p>These are a few smart questions concerned parents asked before scheduling a free Student Success Strategy Session.</p>
				<h4 className="mb-3">Do you offer tutoring in other subjects?</h4>
				<p>Occasionally, yes, we o!er tutoring support in other areas on a caseby-case basis. Please contact us to discuss your student’s specific needs.</p>
				<h4 className="mb-3">Do you provide a plan or follow what’s done in class?</h4>
				<p>We develop a plan to support your student’s learning needs — whether that’s to support the classroom curriculum or something else entirely.</p>
				<p>If you want to focus on what’s done in class, that’s where we’ll start. That said, we may see the need to pull in extra materials and work more in-depth than what’s covered in class to meet our objectives.</p>
				<p>Our approach is adaptive and flexible. It’s always guided by your student’s goals.</p>
				<h4 className="mb-3">Can you help us create a custom study plan?</h4>
				<p>Yes, we always tailor tutoring support to your student’s needs. Book a free Student Success Strategy Session to discuss those with us.</p>
				<h4 className="mb-3">How can you make a di!erence when the teacher can’t?</h4>
				<p>Teachers can’t always give students the extra time, support, or attention for di"cult-to-grasp lessons. That’s where we come in.</p>
				<p>We teach students to become more effective learners. This involves helping them resolve confusion in a structured way, using the most suitable learning strategies, and providing explanations aligned with your student’s skill level.</p>
				<p>As a result, students reach a greater fundamental understanding of the subject material and feel less anxious or overwhelmed. As a result, students reach a greater fundamental understanding of the subject material and feel less anxious or overwhelmed.</p>
				<h4 className="mb-3">How can you help my student get better marks on exams?</h4>
				<p>We assess learning needs and pinpoint the most prominent obstacles preventing your student from performing well on tests. Then we craft a personalised strategy, continuously coach the student, and closely monitor progress.</p>
				<p>Plus! As students better grasp and master their coursework, they reduce stress and gain confidence. Both of which are helpful when sitting for an exam.</p>
				<h4 className="mb-3">What’s the difference between tutoring and study support?</h4>
				<p>Tutoring focuses on mastering concepts and solving problems in a specific subject. Study support programs teach study skills (like how to take notes, plan study time, and prepare for exams) for more effective learning.</p>
				<p>They complement each other. For the best results, we recommend both.</p>
				<div className="text-center pt-5">
					<p><b>More questions?</b> Please contact us.</p>
				</div>
			</Container>
		</div>
		<div className="sky-bg pt-6 pb-6">
			<Container>
				<div className="text-center clearfix">
					<h2 className="bg-title mt-4 mb-5 clearfix"><mark className="pink-bg">“With LessonUp, her grades skyrocketed and her confidence did too. What a turnaround!” — the future</mark></h2>
					<p>Progress is possible. It all starts with private tutoring. Schedule a free Student Success Strategy Session today to speak with our specialists.</p>
				</div>
			</Container>
		</div>
		<ScheduleSession></ScheduleSession>
		<Footer></Footer>
	</div>
)
export default Tutoring
