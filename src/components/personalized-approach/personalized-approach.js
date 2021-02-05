import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../fonts/fonts.css';
import sam from '../../images/sam.jpg';
import { Link } from "gatsby";

const Approach = () => (
<div className="sky-bg pt-9 mt-4 pb-30 approach">
	<Container>
		<Row>
			<Col md={6}>
				<h5>PERSONALISED APPROACH</h5>
				<h2 className="bg-title mt-4 clearfix"><mark className="blue-bg">One-size-fits-all learning doesn’t work</mark></h2>
				<p><b>Instead, get a personalised approach that’s aligned with your student’s unique needs.</b></p>
				<p>Each student starts with a Student Success Strategy Session.</p>
				<p>In that initial conversation, we’ll discuss your student’s specific struggles, so we can map a personalised plan to reach his or her goals.</p>
			</Col>
			<Col md={6} className="position-right">
				<img src={sam} className="img-fluid" alt="sam" />
			</Col> 
		</Row>
		<Row className="mt-5">
			<Col md={4} className="text-center">
				<h5 className="white-heading">CUSTOM PLANS</h5>
				<p>We provide study, revision, and time management plans that are aligned with your student’s unique needs and learning style.</p>
			</Col>
			<Col md={4} className="text-center">
				<h5 className="white-heading">STRUCTURED SESSIONS</h5>
				<p>You can’t improve what isn’t measurable. Together we set clear, specific, and measurable goals for each session.</p>
			</Col>
			<Col md={4} className="text-center">
				<h5 className="white-heading">PROGRESS ASSESSMENT</h5>
				<p>Progress is monitored and assessed regularly so that we can adapt the plan to support even deeper learning.</p>
			</Col>
		</Row>
		<div className="text-center mt-5">
			<Link to="/" className="btn blue-btn">Get personalised help - Schedule a session</Link>
		</div>
	</Container>
 </div>
)
export default Approach
