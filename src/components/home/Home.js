import React from 'react'

import Reply from '../reply/Reply.js';
import Stories from '../stories/Stories.js';
import Story from '../story/Story.js';
import { FaCloud, FaCircle } from 'react-icons/fa';
import './home.css'

class Home extends React.Component {
	render(){
		//TODO: The reply,stories, and story should be here
		// Set by a condition in the state
		//<Reply/>
		return(
		<div className="home-container">
			<div className="home-cloud-center">
				<Story/>
			</div>
			<div className="home-sun-container">
				<div className="home-sun"><FaCircle size="45vh"/></div>
			</div> 
			<div className="home-cloud-container">
				<div className="home-cloud-left"><FaCloud size="70vh"/></div>
				<div className="home-cloud-right"><FaCloud size="70vh"/></div>
			</div>		
		</div>)
	}
}

export default Home