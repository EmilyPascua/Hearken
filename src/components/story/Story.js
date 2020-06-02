import React from 'react'
import { FaCloud } from 'react-icons/fa';
import './story.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

export default class Story extends React.Component {
	state = {
		id: null,
		story: null,
		created: null,
		mood: null
	}

	updateStory = (e) => {
		this.setState({story: e.target.value})
	}

	sendStory = (e) => {
		if (e.keyCode == 13 && e.target.value.length > 0) {
			this.props.actions.sendMessage(this.state,this.props.room.details.id)
			this.setState({message: ''})
		}
	}
	
	handleOnClick = (e) => {
		const val = e.target.value;

		console.log(val)

		this.setState({mood: val});
	}

	//TODO: Make the emojis animated and selectable.
	render() {
		return (
			<div>
				<p className="story-greeting">{this.props.message}</p>
				<div className="story-message-background">
					<Form.Group className="story-message" controlId="exampleForm.ControlTextarea1">
						<Form.Control as="textarea" rows="3" value={this.state.story} onChange={this.updateStory}/>
						<input type="radio" className="story-radio-item" value="happy" name='item' id='1' onClick={this.handleOnClick}/>
						<label className="story-label-item" for="1"><i className="hvr-shrink story-padding em em-blush" aria-role="presentation" aria-label="SMILING FACE WITH SMILING EYES"></i></label>
	
						<input type="radio" className="story-radio-item" value="love" name='item' id='2' onClick={this.handleOnClick}/>
						<label className="story-label-item" for="2"> <i className="hvr-shrink story-padding em em-heart_eyes" aria-role="presentation" aria-label="SMILING FACE WITH HEART-SHAPED EYES"></i> </label>
	
						<input type="radio" className="story-radio-item" value="sad" name='item' id='3' onClick={this.handleOnClick}/>
						<label className="story-label-item" for="3"> <i className="hvr-shrink story-padding em em-cold_sweat" aria-role="presentation" aria-label="FACE WITH OPEN MOUTH AND COLD SWEAT"></i>  </label>
	
						<input type="radio" className="story-radio-item" value="annoyed" name='item' id='4' onClick={this.handleOnClick}/>
						<label className="story-label-item" for="4"> <i className="hvr-shrink story-padding story-padding em em-unamused" aria-role="presentation" aria-label="UNAMUSED FACE"></i> </label>
	
						<input type="radio" className="story-radio-item" value="angry" name='item' id='5' onClick={this.handleOnClick}/>
						<label className="story-label-item" for="5"><i className="hvr-shrink story-padding em em-angry" aria-role="presentation" aria-label="ANGRY FACE"></i>  </label>
						
						<Button className="story-padding story-button" type='button' variant="Link" size="sm" onClick={this.sendStory}>
							Sincerely, Anonymous
						</Button>
					</Form.Group>
	
				 </div>
			</div>
		)	
	}
}