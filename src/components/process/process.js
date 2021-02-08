import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../fonts/fonts.css';
import tutorImg from '../../images/lessonup-process.png';
import { Link } from "gatsby";

const Process = () => (
	<Container className="pt-6 pb-6">
		<div className="text-center clearfix">
			<h5>THE PROCESS</h5>
			<h2 className="bg-title mt-4 mb-5 clearfix"><mark className="pink-bg">Unlock supercharged Maths & Science skills with a more personalised approach</mark></h2>
		</div>
		<p>Here’s how we customise your student’s learning</p>
		<Row>
			<Col md={6}>
				<h4 className="mb-2 mt-3">Step 1: Goals & Gaps</h4>
				<p>Success is reverse-engineered. We begin by discussing your student’s key goals and what they’re struggling with in the classroom, so we  can design a plan to get your student to the finish line.</p>
				<h4 className="mb-2 mt-3">Step 2: Starting Skills</h4>
				<p>Success is reverse-engineered. We begin by discussing your student’s key goals and what they’re struggling with in the classroom, so we  can design a plan to get your student to the finish line.</p>
				<h4 className="mb-2 mt-3">Step 3: Learning Language</h4>
				<p>Students respond di!erently to various teaching styles. We factor in likes and dislikes towards the subject and general schooling, so we can match your student with the most suitable learning</p>
				<h4 className="mb-2 mt-3">Step 4: Study Habits</h4>
				<p>Strong learners have great study skills. We assess your student’s study habits, so we can correct bad behaviors and introduce more e!ective methods to support supercharged learning.</p>
				<h4 className="mb-2 mt-3">Step 5: Personalised Plan</h4>
				<p>These insights allow us to design a success strategy, personalised plan, and study schedule that’s aligned specifically with your student’s goals, skill gaps, and learning preferences.</p>
				<Link to="/" className="btn blue-btn mb-3">Get my personalised plan</Link>
				<p>Next: Schedule your free Student Success Strategy Session.</p>
			</Col>
			<Col md={6} className="position-right">
				<img src={tutorImg} className="img-fluid" alt="" />
			</Col>
		</Row>
	</Container>

)
export default Process
