import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../fonts/fonts.css';
/*import sam from '../../images/sam.jpg';*/
/*import { Link } from "gatsby";*/

const Students = () => (
	<Container>
		<div class="text-center pt-6 clearfix">
			<h5 className="mb-5">All LessonUp tutors have a Working With Children</h5>
			<h4>SUCCESSFUL STUDENTS</h4>
			<h2 className="bg-title mt-4 clearfix"><mark className="blue-bg">When your student’s future is at stake, who you trust matters</mark></h2>
		</div>
		<Row className="mt-5">
			<Col xs={12} md={6} className="mb-5" >
				<p><b>“I highly recommend Jordan! He's a really nice guy, easy to understand and communicate with! Not only helps you with questions, but also with study tips and basic knowledge - 10/10!”</b></p>
				<p>JULIE<br/>Student, Yr 12</p>
			</Col>
			<Col xs={12} md={6} className="mb-5" >
				<p><b>“Jordan has helped me get a better understanding than I’ve had all year with my current teacher. Within minutes, he helped me understand a concept I’d been struggling with for weeks.”</b></p>
				<p>MATT<br/>Student, Yr 10</p>
			</Col>
			<Col xs={12} md={6} className="mb-5">
				<p><b>“Seeing the smile on my son's face after the tutoring was priceless. Jordan designed his lessons based on my child's needs after patiently going over every single issue.”</b></p>
				<p>CLAIRE<br/>Parent</p>
			</Col>
			<Col xs={12} md={6} className="mb-5">
				<p><b>“Jordan gives the extra attention and care that many children need. He doesn't watch the clock as some tutors do. And he provides extra support outside of lessons.”</b></p>
				<p>FIONA<br/>Parent</p>
			</Col>
		</Row>
	</Container>

)
export default Students
