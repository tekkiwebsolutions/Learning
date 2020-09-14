import React from "react";
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../fonts/fonts.css';
import '../../common.css';


const ContactForm = () => (
<div className="contact-form">
	<Container>
		<h4 className="mt-4">Please fill in the form below:</h4>
	 	<div className="contact-bg mt-5">
	 		<Form.Group>
			  <Form.Row>
			    <Form.Label column lg={5}>
			      First & Last Name
			    </Form.Label>
			    <Col>
			      <Form.Control type="text" placeholder="" />
			    </Col>
			  </Form.Row>
			 <Form.Row>
			    <Form.Label column lg={5}>
			      I’m a(n)
			    </Form.Label>
			    <Col>
			      <Form.Control type="text" placeholder="" />
			    </Col>
			  </Form.Row>
			 <Form.Row>
			    <Form.Label column lg={5}>
			      Email address
			    </Form.Label>
			    <Col>
			      <Form.Control type="email" placeholder="" />
			    </Col>
			  </Form.Row>
			 <Form.Row>
			    <Form.Label column lg={5}>
			      Phone number
			    </Form.Label>
			    <Col>
			      <Form.Control type="number" placeholder="" />
			    </Col>
			  </Form.Row>
			  <Form.Row>
			    <Form.Label column lg={5}>
			      Please contact me by
			    </Form.Label>
			    <Col>
			      <Form.Control type="text" placeholder="" />
			    </Col>
			  </Form.Row>
			  <Form.Row>
			    <Form.Label column lg={5}>
			      I’m interested in
			    </Form.Label>
			    <Col>
			      <Form.Control type="text" placeholder="" />
			    </Col>
			  </Form.Row>
			  <Form.Row>
			    <Form.Label column lg={5}>
			      I’m looking for support in
			    </Form.Label>
			    <Col>
			      <Form.Control type="text" placeholder="" />
			    </Col>
			  </Form.Row>
			  <Form.Row>
			    <Form.Label column lg={5}>
			      Is there anything else we should know?
			    </Form.Label>
			    <Col>
			      <Form.Control type="text" placeholder="" />
			    </Col>
			  </Form.Row>
			  <Button type="submit" className="btn blue-btn">Submit form to schedule session</Button>
			</Form.Group>
	 	</div>
	</Container>
 </div>
)
export default ContactForm
