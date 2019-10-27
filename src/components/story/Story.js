import React from 'react'
import { FaCloud } from 'react-icons/fa';
import './story.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const Story = (props) => {
	//TODO: Make the emojis animated and selectable.
	return (
		<div>
			<p className="story-greeting">{props.message}</p>
			<div className="story-message-background">
				<Form.Group className="story-message" controlId="exampleForm.ControlTextarea1">
				   <Form.Control as="textarea" rows="3"/>
				</Form.Group>
			    <input type="radio" className="story-radio-item" value="happy" name="item" id="radio1"/>
			    <label className="story-label-item" for="radio1"><i className="hvr-shrink story-padding em em-blush" aria-role="presentation" aria-label="SMILING FACE WITH SMILING EYES"></i></label>
			    
			    <input type="radio" className="story-radio-item" value="in-love" name="item" id="radio2"/>
			    <label className="story-label-item" for="radio2"> <i className="hvr-shrink story-padding em em-heart_eyes" aria-role="presentation" aria-label="SMILING FACE WITH HEART-SHAPED EYES"></i> </label>

			    <input type="radio" className="story-radio-item" value="sad" name="item" id="radio3"/>
			    <label className="story-label-item" for="radio3"> <i className="hvr-shrink story-padding em em-cold_sweat" aria-role="presentation" aria-label="FACE WITH OPEN MOUTH AND COLD SWEAT"></i>  </label>
			    
			    <input type="radio" className="story-radio-item" value="annoyed" name="item" id="radio4"/>
			    <label className="story-label-item" for="radio4"> <i className="hvr-shrink story-padding story-padding em em-unamused" aria-role="presentation" aria-label="UNAMUSED FACE"></i> </label>

			    <input type="radio" className="story-radio-item" value="angry" name="item" id="radio5"/>
			    <label className="story-label-item" for="radio5"><i className="hvr-shrink story-padding em em-angry" aria-role="presentation" aria-label="ANGRY FACE"></i>  </label>
			<Button className="story-padding story-button" variant="Link" size="sm">
      			Sincerely, Anonymous
 		   	</Button>
 			</div>
		</div>
	)
}

export default Story