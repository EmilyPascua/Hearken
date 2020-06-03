import React from 'react'

import Reply from '../reply/Reply.js';
import Stories from '../stories/Stories.js';
import Story from '../story/Story.js';
import { FaCircle, FaCloud , FaSignOutAlt} from 'react-icons/fa';
import './home.css'

class Home extends React.Component {
	style = {
		homeContainer:this.props.theme,
	}

	render(){
		//TODO: The reply,stories, and story should be here
		// Set by a condition in the state
		//<Reply/>
		return(
		<div style={this.style.homeContainer}>
			<div className='home-exit-button-container' onClick={this.props.actions.signout}>
				<FaSignOutAlt color='white'/>
			</div>
			<div className="home-cloud-center">
				<Story user={this.props.user} message={this.props.greetingMessage} actions={this.props.actions}/>
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