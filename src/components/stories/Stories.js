import React from 'react'
import { FaCloud } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import './stories.css'

const Stories = (props) => {
	//<div className="stories-message-background">
	//			<Form.Group className="story-message" controlId="exampleForm.ControlTextarea1">
	//			   <Form.Control as="textarea" rows="3">Sucks to suck!</Form.Control>
	//			   <Button variant="Link">Reply to this user! <i class="em em-smiling_face_with_3_hearts" aria-role="presentation" aria-label="SMILING FACE WITH SMILING EYES AND THREE HEARTS"></i></Button>
	//			</Form.Group>
 	//		</div>

	return (
		<div>
			<p className="stories-greeting">Share <i className="em em-heartbeat" aria-label="BEATING HEART"></i> and Support!<br></br></p>
			<div className="stories-message-background">
				<div className="stories-content">Hearken is looking for someone to match <i>you</i> with!
				<br></br>
				Perhaps come back at a <b>better time</b>?
				<br></br>- Sincerely, The Hearken Algorithm </div>
 			</div>
		</div>
	)
}

export default Stories