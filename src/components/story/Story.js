import React from 'react'
import { FaCloud } from 'react-icons/fa';
import './story.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const Story = (props) => {
	return (
		<div>
			<p className="story-greeting">Good Morning, how's your day so far?</p>
			<div className="story-message-background">
				<Form.Group className="story-message" controlId="exampleForm.ControlTextarea1">
				   <Form.Control as="textarea" rows="8" cols="45" />
				</Form.Group>
				<i className="story-padding em em-blush" aria-role="presentation" aria-label="SMILING FACE WITH SMILING EYES"></i> 
				<i className="story-padding em em-heart_eyes" aria-role="presentation" aria-label="SMILING FACE WITH HEART-SHAPED EYES"></i>
				<i className="story-padding em em-cold_sweat" aria-role="presentation" aria-label="FACE WITH OPEN MOUTH AND COLD SWEAT"></i> 
				<i className="story-padding story-padding em em-unamused" aria-role="presentation" aria-label="UNAMUSED FACE"></i> 
				<i className="story-padding em em-angry" aria-role="presentation" aria-label="ANGRY FACE"></i> 
			<Button className="story-padding story-button"variant="primary" size="sm">
      		Sincerely, Anonymous
 		   	</Button>
 			</div>
		</div>
	)
}

export default Story