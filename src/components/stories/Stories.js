import React from 'react'
import { FaCloud } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import './stories.css'

const Reply = (props) => {
	return (
		<div>
			<p className="stories-greeting">You've gotten a reply!<br></br></p>
			<div className="stories-message-background">
				<Form.Group className="story-message" controlId="exampleForm.ControlTextarea1">
				<Button variant="link">Your Question</Button> | <Button variant="link">Finished Reading</Button>
				   <Form.Control as="textarea" rows="3">Sucks to suck!</Form.Control>
				   - Sincerely, Anonymous
				</Form.Group>
 			

 			</div>
		</div>
	)
}

export default Reply