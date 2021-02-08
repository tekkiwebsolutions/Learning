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
import edit from '../images/edit.jpg';
import notepad from '../images/notepad.jpg';
import calender from '../images/calender.jpg';
import tool from '../images/tool.jpg';
import search from '../images/search.jpg';
import Footer from '../components/footer/footer.js';
import '../components/footer/footer.css';
import Process from '../components/process/process.js';
import Students from '../components/successful-students/successful-students.js';
import Pricing from '../components/pricing/pricing.js';
import ContactForm from '../components/contactform/contactform.js';
import '../components/contactform/contactform.css';
import ScheduleSession from '../components/schedule-success-session/schedule-success-session.js';
import {Helmet} from "react-helmet";

const StudySupport = () => (
	<div>
		<Helmet>
            <body class='blue-header' />
        </Helmet>
		<Header></Header>
		<div className="sky-bg pt-9 pb-15">
			<Container>
				<h5>STUDY SUPPORT</h5>
				<h2 className="bg-title mt-4 clearfix"><mark className="blue-bg">The supercharged study skills your student needs to master coursework, prep for exams & get better marks</mark></h2>
				<p>Study skills often determine whether or not your student struggles or succeeds in school. Want better marks consistently? Work on study skills.</p>
				<p>Meet The Renaissance Method, a study support and coaching program designed to help students learn how to learn. You get:</p>
				<Row className="mt-5 pb-4">
					<Col md={4} className="text-center">
						<h5 className="white-heading">POWERFUL STUDY SKILLS</h5>
						<p>that your student needs to become a stronger learner</p>
					</Col>
					<Col md={4} className="text-center">
						<h5 className="white-heading">CUSTOM STUDY PLANS</h5>
						<p>based on scientifically proven learning strategies</p>
					</Col>
					<Col md={4} className="text-center">
						<h5 className="white-heading">PRIVATE EXAM COACHING</h5>
						<p>to plan and prep your student for assessments and exams.</p>
					</Col>
				</Row>
			</Container>
		</div>
		<div className="pink-bg">
			<Row>
				<Col xs={12} md={6} className="pl-0 mt-minus-100" >
					<img src={success} alt="" className="img-fluid" />
					<div className="round-circle middle-circle claire-parent box-shadow">
						<p className="mb-0">“I learned the most amazing things about how to study. No one has ever taught me that before. Jordan even helped me make a game plan for how I would complete my assignment.”</p>
						<p className="mb-0">SAM<br/>Student, Yr</p>
					</div>
				</Col>
			</Row>
			<div className="position-relative pt-20 pb-15">
				<Row className="justify-content-end">
					<Col xs={12} md={6} className="pr-0 mt-minus-100" >
						<img src={success} alt="" className="img-fluid" />
						<div className="round-circle claire-parent middle-left-circle box-shadow">
							<p className="mb-0">“I thank Steve very much for his help during VCE. He reviewed my incorrect answers from SACs, and went over past papers leading up to the final exam.”</p>
							<p className="mb-0">CATHERINE<br/>Student, Yr 12</p>
						</div>
					</Col>
				</Row>
			</div>
		</div>
		<div className="pt-6 pb-6">
			<Container>
				<div className="text-center clearfix">
					<h5>THE PROGRAM</h5>
					<h2 className="bg-title mt-4 clearfix"><mark className="pink-bg">Take your student from struggling to succeeding with our “learn how to learn” study support & coaching program</mark></h2>
					<p>Success in school requires more than going to class, completing assignments, and sitting for exams. To do well, your student also has to also have effective study skills.</p>
				</div>
				<Row className="pt-5">
					<Col md={6}>
						<h2>Savvy parents choose LessonUp’s Renaissance Method. Here’s why:</h2>
						<p className="mt-3">This study support and coaching program is designed to help students develop the critical thinking skills they need to:</p>
						<ul className="mb-3">
							<li>- decode key concepts</li>
							<li>- approach challenging problems</li>
							<li>- prepare for tough assessment periods, and</li>
							<li>- get better marks on exams.</li>
						</ul>
						<h4 className="mt-4 mb-4">How?</h4>
						<p>We help them develop their own systems of evaluation, learn how to enquire, and build a toolkit of strategies and skills to select the most suitable approach for the learning task at hand.</p>
					</Col>
					<Col md={6} className="position-right ">
						<img src={success} alt="" className="img-fluid" />
					</Col>
				</Row>
			</Container>
		</div>
		<div className="sky-bg pt-6 pb-6">
			<Container>
				<div className="text-center mb-3 clearfix">
					<h2 className="bg-title mt-4 clearfix"><mark className="blue-bg">With the right tools, your student could be a stronger learner. LessonUp’s study support is here</mark></h2>
				</div>
				<div className="">
					<p>Students learn skills and strategies to:</p>
					<ul className="mb-4">
						<li> ☑ identify and investigate their own learning weaknesses</li>
						<li> ☑ make smarter study plans to strengthen key skills</li>
						<li> ☑ be more resourceful, methodical, and critical when solving problems</li>
						<li> ☑ use better creative thinking techniques</li>
						<li> ☑ reduce extra dependence on tutors and teachers</li>
					</ul>
					<p>With the LessonUp study support program, your student can finally take full ownership over his or her learning — and at any age or ability level.</p>
				</div>
			</Container>
		</div>
		<div className="pink-bg pt-6 pb-6">
			<Container>
				<div className="text-center clearfix">
					<h5>THE STUDY SKILLS</h5>
					<h2 className="bg-title mt-4 clearfix"><mark className="blue-bg">To master coursework & conquer exams, we coach your student to improve these key areas:</mark></h2>
				</div>
				<div className="">
					<ul className="iconList">
						<li><img src={edit} alt="" className="" /><b>How to take notes in class to pinpoint key structure and content to be more efficient when studying</b></li>
						<li><img src={edit} alt="" className="" /><b>How to prepare notes at home to improve understanding, build knowledge & remember it for exams</b></li>
						<li><img src={notepad} alt="" className="" /><b>How to plan study time to best fit your course load and assignment schedule</b></li>
						<li><img src={calender} alt="" className="" /><b>How to schedule revision time to best prepare for test time</b></li>
						<li><img src={calender} alt="" className="" /><b>How to manage time to meet key course deadlines most effectively</b></li>
						<li><img src={tool} alt="" className="" /><b>How to approach and solve challenging problems using frameworks and self-teaching tools</b></li>
						<li><img src={search} alt="" className="" /><b>How to self-evaluate learning weaknesses and make a plan to strengthen them</b></li>
					</ul>
				</div>
				<div className="text-center pt-5">
					<Link to="/" className="btn blue-btn">Coach my student</Link>
					<p className="mt-4">Next: Schedule your free Student Success Strategy Session.</p>
				</div>
			</Container>
		</div>
		<div className="pt-6 pb-6">
			<Container>
				<div className="text-center mb-5 clearfix">
					<h5>PROVEN STRATEGIES</h5>
					<h2 className="bg-title mt-4 clearfix"><mark className="blue-bg">Study support works because we use scientifically proven study strategies</mark></h2>
				</div>
				<Row>
					<Col md={6}>
						<p>This isn’t just about surviving the school year.</p>
						<p>At LessonUp, we specialise in the science of learning. Our mission is to strengthen your student’s learning skills, so he or she can:</p>
						<ul className="mb-3">
							<li>master critical concepts</li>
							<li>keep up with lessons</li>
							<li>get better marks on exams</li>
							<li>and gain confidence in the classroom</li>
						</ul>
						<p>We use scientifically proven learning strategies, structure sessions with measurable goals, monitor progress regularly, and personalise the approach to support your student’s unique needs.</p>
						<p>We’re not just tutors, we’re learning specialists armed with the knowledge and experience to unlock your student’s learning superpowers.</p>
						<div className="text-center mt-4">
							<Link to="/" className="btn blue-btn">Give me proven strategies</Link>
							<p className="mt-4">Next: Schedule your free Student Success Strategy Session.</p>
						</div>
					</Col>
					<Col md={6} className="position-right">
						<img src={success} alt="" className="img-fluid" />
					</Col>
				</Row>
			</Container>
		</div>
		<div className="sky-bg pt-6 pb-6">
			<Container>
				<div className="text-center mb-3 clearfix">
					<h2 className="bg-title mt-4 clearfix"><mark className="blue-bg">With LessonUp, students can finally take back control of their marks</mark></h2>
				</div>
				<div className="">
					<p className="mb-4">Students get the full spectrum of study support, including:</p>
					<h4 className="blue-color mb-3">Study coaching sessions for extra support whenever it’s needed</h4>
					<p>We help your student stay on top of weekly lessons, prepare for upcoming exams, and thrive during intense assessment periods.</p>
					<h4 className="blue-color mb-3">Note-taking strategies for maximum understanding and recall</h4>
					<p>We teach students how to take notes so that they focus, grasp concepts, make connections, and can later remember learnings at test time.</p>
					<h4 className="blue-color mb-3">Study AI that predicts your student’s best study strategy</h4>
					<p>Our software helps students effectively plan study time for exams, so you get the confidence that the study schedule supports your student’s goals.</p>
					<h4 className="blue-color mb-3">Proven approach that’s supported by science</h4>
					<p>We use a dynamic and adaptive approach to learning that’s backed by scientific studies so that your student becomes a stronger learner in the shortest time possible.</p>
					<h4 className="blue-color mb-3">Custom study & revision plans to fit course load & test timelines</h4>
					<p>We guide students to customise a study approach that’s aligned with current course loads. This way, they meet assignment deadlines and are fully prepared at test time.</p>
					<h4 className="blue-color mb-3">Flexible meetups that suit your schedule</h4>
					<p>We o!er study support both in-person and online. Your student can meet his or her study coach at home, at your local library, or on a Zoom video call.</p>
				</div>
			</Container>
		</div>
		<div className="pink-bg pt-6 pb-6">
			<Container>
				<div className="text-center mb-4 clearfix">
					<h4>“Study AI? What is it?“</h4>
					<h2 className="bg-title mt-4 clearfix"><mark className="blue-bg">Students get a custom study schedule that best supports their course load, test timelines & skill level</mark></h2>
				</div>
				<Row>
					<Col md={6}>
						<p>When planning an effective study plan, there’s so much to consider.</p>
						<ul className="mb-4">
							<li>- What assignments are coming up?</li>
							<li>- What subjects does your student struggle with the most?</li>
							<li>- Which lessons require more attention?</li>
							<li>- When are exams scheduled?</li>
                            <li>- How much study time is available each week and on what days?</li>
						</ul>
						<p>You’ll love our Study AI.</p>
						<p>The Study AI software program can propose your student’s best study and time management plan based on the course load, test timeline, di"culty level, available study time, and other preferences.</p>
						<p>With a Study AI plan, you get the confidence that your student will be fully prepared at test time.</p>
						<div className="text-center pt-4">
							<Link to="/" className="btn blue-btn">Show me the best study plan</Link>
							<p className="mt-4">Next: Schedule your free Student Success Strategy Session.</p>
						</div>
					</Col>
					<Col md={6}>
						<img src={success} alt="" className="img-fluid" />
					</Col>
				</Row>
			</Container>
		</div>
		<Process></Process>
		<div className="sky-bg">
			<Students></Students>
		</div>
		<Pricing></Pricing>
		<div className="pink-bg text-center pt-6 pb-6">
			<Container>
				<h2 className="bg-title mt-4 clearfix"><mark className="blue-bg">Get your student started today with a free Student Success Strategy Session</mark></h2>
				<p>During your consultation, we’ll discuss your student’s specific learning needs, so we can make a personalised plan to reach his or her goals.</p>
				<ContactForm></ContactForm>
			</Container>
		</div>
		<div className="pt-6 pb-6">
			<Container>
				<div className="text-center clearfix">
					<h5>FAQS</h5>
					<h2 className="bg-title mt-4 mb-4 clearfix"><mark className="blue-bg">“This sounds amazing! How do you…”</mark></h2>
				</div>
				<p>These are a few smart questions concerned parents asked before scheduling a free Student Success Strategy Session.</p>
				<h4 className="mb-3">What is Study AI?</h4>
				<p>Study AI is a software program that proposes the best study and time management plan based on your student’s course load, test timeline, difficulty level, available study time, and other preferences.</p>
				<p>By following the recommended study plan, you and your student can work through the term with the confidence that he or she will be fully prepared at test time.</p>
				<h4 className="mb-3">Can you help us create a custom study plan?</h4>
				<p>Yes, we always tailor study support to your student’s needs. Book a free Student Success Strategy Session to discuss those goals with us.</p>
				<h4 className="mb-3">How can you make a di!erence when the teacher can’t?</h4>
				<p>We teach students to become more e"ective learners. As a result, they reach a greater fundamental understanding of the subject material, feel less anxious or overwhelmed, and perform better on exams.</p>
				<h4 className="mb-3">How can you help my student get better marks on exams?</h4>
				<p>We assess learning needs and pinpoint the most prominent obstacles preventing your student from performing well on tests. Then we craft a personalised strategy, continuously coach the student, and closely monitor progress.</p>
				<p>Plus! As students better grasp and master their coursework, they reduce stress and gain confidence. Both of which are helpful when sitting for an exam.</p>
				<h4 className="mb-3">What’s the di!erence between tutoring and study support?</h4>
				<p>Study support programs teach study skills (like how to take notes, plan study time, and prepare for exams) for more e"ective learning. Tutoring focuses on mastering concepts and solving problems in a specific subject.</p>
				<p>They complement each other. For the best results, we recommend both.</p>
				<div className="text-center pt-4 pb-4">
					<p><b>More questions?</b> Please contact us.</p>
				</div>
			</Container>
		</div>
		<div className="sky-bg pt-6 pb-6">
			<div className="text-center clearfix">
				<Container>
					<h5>Your student’s supercharged study skills await...</h5>
					<h2 className="bg-title mt-4 mb-4 clearfix"><mark className="blue-bg">“I learned the most amazing things about how to study. No one has ever taught me that before.”</mark></h2>
					<p><b>Schools don’t always teach study skills. But we do.</b> Schedule a free Student Success Strategy Session today to speak with our study specialists.</p>
				</Container>
			</div>
		</div>
		<ScheduleSession></ScheduleSession>
		<Footer></Footer>
	</div>
)
export default StudySupport
