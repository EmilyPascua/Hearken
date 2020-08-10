import React from 'react'
import Reply from '../reply/Reply.js';
import Stories from '../stories/Stories.js';
import Story from '../story/Story.js';
import { FaCircle, FaCloud , FaSignOutAlt} from 'react-icons/fa';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {signout} from '../../flux/actions/root-actions'

import './home.css'

class Home extends React.Component {
	state = {
		theme: {}
	}

	themes = {
		morning: {
			style: {
				height: '100vh',
				backgroundImage: 'linear-gradient(#6f0979,#ffebbd)',
				overflow: 'hidden',
				transition: '0.3s'
			},
			greeting: 'Good Morning, anything you want to tell me?'
		},
		afternoon: {
			style: {
				height: '100vh',
				backgroundImage: 'linear-gradient(#6f0979,#ffebbd)',
				overflow: 'hidden',
				transition: '0.3s'
			},
			greeting: 'Good Morning, anything you want to tell me?'
		},
		evening: {
			style: {
				height: '100vh',
				backgroundImage: 'linear-gradient(#6f0979,#ffebbd)',
				overflow: 'hidden',
				transition: '0.3s'
			},
			greeting: 'Good Morning, anything you want to tell me?'
		},
		night: {
			style: {
				height: '100vh',
				backgroundImage: 'linear-gradient(#6f0979,#ffebbd)',
				overflow: 'hidden',
				transition: '0.3s'
			},
			greeting: 'Good Morning, anything you want to tell me?'
		},
	}

	handleSignoutClick = () => {
		this.props.signout();
		this.props.history.push('/Login');
	}

	themeGreetingHandler = () => {
		setInterval(() => {
			//Get time to set the theme
			let today = new Date();

			// I'll leave this here for now, not really needed for this. May be needed in the future.
			// let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
			// let dateTime = date+' '+timeOfDay;
	
			const timeOfDay = today.getHours();
			
			if (timeOfDay >= 0 && timeOfDay < 12) this.setState({theme: this.themes.morning});
			if (timeOfDay >= 12 && timeOfDay < 16) this.setState({theme: this.themes.afternoon});
			if (timeOfDay >= 16 && timeOfDay < 21) this.setState({theme: this.themes.evening});
			if (timeOfDay >= 21 && timeOfDay < 24) this.setState({theme: this.themes.night});
			
		}, 60000);
	}

	componentDidMount() {
		const today = new Date();

		const timeOfDay = today.getHours();
			
		if (timeOfDay >= 0 && timeOfDay < 12) this.setState({theme: this.themes.morning});
		if (timeOfDay >= 12 && timeOfDay < 16) this.setState({theme: this.themes.afternoon});
		if (timeOfDay >= 16 && timeOfDay < 21) this.setState({theme: this.themes.evening});
		if (timeOfDay >= 21 && timeOfDay < 24) this.setState({theme: this.themes.night});

		this.themeGreetingHandler();
	}

	render(){
		//TODO: The reply,stories, and story should be here
		// Set by a condition in the state
		//<Reply/>
		return(
		<div style={this.state.theme.style}>
			<div className='home-exit-button-container' onClick={this.handleSignoutClick}>
				<FaSignOutAlt color='white'/>
			</div>
			<div className="home-cloud-center">
				<Story message={this.state.theme.greeting}/>
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

const mapStateToProps = state => {
	return {
		stories: state.stories
	}
}

const mapDispatchToProps = dispatch => {
	return {
		signout: () => dispatch(signout())
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Home));