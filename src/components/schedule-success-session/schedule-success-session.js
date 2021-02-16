import React from "react";
/*import { Container, Row, Col } from 'react-bootstrap';*/
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../fonts/fonts.css';
/*import sam from '../../images/sam.jpg';*/
// import { Link } from "gatsby";
import scrollTo from 'gatsby-plugin-smoothscroll';
const ScheduleSession = () => (
	<div className="schedule-my-success">
		<div className="text-center">
			<button onClick={() => scrollTo('#session')} className="btn blue-btn">Schedule my success session</button>
		</div>
	</div>

)
export default ScheduleSession
