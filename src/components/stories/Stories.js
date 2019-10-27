import React from 'react'
import { FaCloud } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import './stories.css'

const Stories = (props) => {

	return (
		<div>
			<p className="stories-greeting">Share <i class="em em-heartbeat" aria-role="presentation" aria-label="BEATING HEART"></i> and Support!<br></br></p>
			<div className="stories-message-background">
				<Form.Group className="story-message" controlId="exampleForm.ControlTextarea1">
				   <Form.Control as="textarea" rows="3">Sucks to suck!</Form.Control>
				   <Button variant="Link">Reply to this user! <i class="em em-smiling_face_with_3_hearts" aria-role="presentation" aria-label="SMILING FACE WITH SMILING EYES AND THREE HEARTS"></i></Button>
				</Form.Group>
 			</div>
		</div>
	)
}

export default Stories