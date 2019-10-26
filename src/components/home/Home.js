import React from 'react'

//import HeaderCarousel from '../headercarousel/HeaderCarousel.js';
//import './body.css'
import Reply from '../reply/Reply.js';
import Stories from '../stories/Stories.js';
import Story from '../story/Story.js';

class Home extends React.Component {
	render(){
		//TODO: The reply,stories, and story should be here
		// Set by a condition in the state
		return(<div>Home Component
			(In home Component <Reply/> <Stories/> <Story/>)</div>)
	}
}

export default Home