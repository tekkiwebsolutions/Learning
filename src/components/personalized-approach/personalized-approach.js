import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../fonts/fonts.css';
// import sam from '../../images/sam.jpg';
import { Link, StaticQuery, graphql } from "gatsby";

export default function Approach() {
	return(
		<StaticQuery
			query={
				graphql`
				query Personalize {
					contentfulPersonalisedApproach {
					  personalizedApproachTitile
					  personalizedApproachSubTitile
					  personalizedApproachBoldSubtitle
					  personalizedApproachDescription {
						personalizedApproachDescription
					  }
					  personalizedApproachImage {
						fluid {
						  src
						  base64
						  sizes
						  tracedSVG
						}
					  }
					  personalizedApproachPlanOneTitle
					  personalizedApproachPlanTwoDescription {
						personalizedApproachPlanTwoDescription
					  }
					  personalizedApproachPlanThreeDescription {
						personalizedApproachPlanThreeDescription
					  }
					  personalizedApproachPlanTwoTitle
					  personalizedApproachPlanThreeTitle
					  personalizedApproachPlanOneDescription {
						personalizedApproachPlanOneDescription
					  }
					}
				  }
			`}
			render={
				data=>(
					<div className="sky-bg pt-9 mt-4 pb-30 approach">
						{console.log("PersonalizeData", data)}
					<Container>
						<Row>
							<Col md={6}>
								{/* <h5>PERSONALISED APPROACH</h5>
								<h2 className="bg-title mt-4 clearfix"><mark className="blue-bg">One-size-fits-all learning doesn’t work</mark></h2>
								<p><b>Instead, get a personalised approach that’s aligned with your student’s unique needs.</b></p>
								<p>Each student starts with a Student Success Strategy Session.</p>
								<p>In that initial conversation, we’ll discuss your student’s specific struggles, so we can map a personalised plan to reach his or her goals.</p> */}
										<div>
											<h5>{data.contentfulPersonalisedApproach.personalisedApproachTitle}</h5>
											<h2 className="bg-title mt-4 clearfix"><mark className="blue-bg">{data.contentfulPersonalisedApproach.personalizedApproachSubTitile}</mark></h2>
											<p><b>{data.contentfulPersonalisedApproach.personalizedApproachBoldSubtitle}</b></p>
											<p>{data.contentfulPersonalisedApproach.personalizedApproachDescription.personalizedApproachDescription}</p>
										</div>
							</Col>
							<Col md={6}>							
									<img src={data.contentfulPersonalisedApproach.personalizedApproachImage.fluid.src} className="img-fluid" alt="sam" />
							</Col> 
						</Row>
						<Row className="mt-5">
							<Col md={4} className="text-center">
							<h5 className="white-heading">{data.contentfulPersonalisedApproach.personalizedApproachPlanOneTitle}</h5>
							<p>{data.contentfulPersonalisedApproach.personalizedApproachPlanOneDescription.personalizedApproachPlanOneDescription}</p>
							</Col>
							<Col md={4} className="text-center">
							<h5 className="white-heading">{data.contentfulPersonalisedApproach.personalizedApproachPlanTwoTitle}</h5>
								<p>{data.contentfulPersonalisedApproach.personalizedApproachPlanTwoDescription.personalizedApproachPlanTwoDescription}</p>
							</Col>
							<Col md={4} className="text-center">
							<h5 className="white-heading">{data.contentfulPersonalisedApproach.personalizedApproachPlanThreeTitle}</h5>
								<p>{data.contentfulPersonalisedApproach.personalizedApproachPlanThreeDescription.personalizedApproachPlanThreeDescription}</p>
							</Col>
						</Row>
						<div className="text-center mt-5">
							<Link to="/" className="btn blue-btn">Get personalised help - Schedule a session</Link>
						</div>
					</Container>
				</div>
				)
			}
		
		/>
	)
}

