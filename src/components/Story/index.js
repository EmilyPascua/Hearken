import React from 'react'
import StoryForm from './StoryForm';
import { connect } from 'react-redux';
import { compose } from 'recompose';

const Story = ({submit}) => {
	// const sendStory = (e) => {
	// 	if (e.keyCode == 13 && e.target.value.length > 0) {
	// 		this.props.actions.sendMessage(this.state,this.props.room.details.id)
	// 		this.setState({message: ''})
	// 	}
	// }
	
	// const handleOnClick = (e) => {
	// 	const val = e.target.value;

	// 	console.log(val)

	// 	this.setState({mood: val});
	// }
	return (
		<div className='story'>
      <div className='story-cloud'>
        <StoryForm id={''} onSubmit={submit}/>
      </div>
		</div>
	)
}

const enhance = compose(
	connect(
		state => ({}),
		dispatch => ({})
	)
)

export default enhance(Story);