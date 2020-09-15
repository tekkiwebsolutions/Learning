import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../fonts/fonts.css';
/*import success from '../../images/success.jpg';*/
import { Link } from "gatsby";

const Pricing = () => (
	<div className="">
		<div className="pt-6 pb-6">
			<Container>
				<div className="text-center clearfix">
					<h5>PRICING</h5>
					<h2 className="bg-title mt-4 mb-5 clearfix"><mark className="pink-bg">Give the gift of priceless, lifelong learning skills at a price that’s easily adordable</mark></h2>
				</div>
				<Row>
					<Col md={6}>
						<p>The next time your student makes better marks on a challenging exam, the happiness might make you feel like a million bucks, but...</p>
						<p><b>It doesn’t have to cost a million bucks.</b></p>
						<p>With LessonUp, study support is an adordable investment in your student’s future.</p>
					</Col>
					<Col md={6}>
						<div className="blue-bg p-4">
							<h5 className="text-center">PRIVATE TUTORING</h5>
							<p className="text-center">in-person or online, including:</p>
							<ul>
								<li>-Personalised plans</li>
								<li>-Structured sessions</li>
								<li>-Instructional supports</li>
								<li>-Scientifically proven study strategies</li>
								<li>-Regular monitoring & assessment</li>
								<li>-Access to learning specialists</li>
								<li>-Academic coaching & mentoring</li>
								<li>-All-day question support</li>
							</ul>
							<h4 className="text-center mt-3">$70 per hour</h4>
						</div>
						<div className="text-center">
							<Link to="/" className="btn pink-btn mt-5">Get tutoring support</Link>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
		<div className="sky-bg text-center pt-6 pb-6">
			<Container>
				<p><b>BEST VALUE!</b> Hourly packages are available at a bundled price. Please ask about packages during your free Student Success Strategy Session.</p>
			</Container>
		</div>	
	</div>

)
export default Pricing
