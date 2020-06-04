import React from 'react'

// import Reply from '../reply/Reply.js';
// import Stories from '../stories/Stories.js';
import Story from '../story/Story.js';
import {connect} from 'react-redux';
import {signout,updateTheme,updateGreeting} from '../../actions/root-actions';
import { FaCircle, FaCloud , FaSignOutAlt} from 'react-icons/fa';
import './home.css'

class Home extends React.Component {
	componentDidMount() {
		setInterval( () => {
			const today = new Date();

			let timeOfDay = today.getHours()
				,theme = {
					height: "100vh",
					backgroundImage: null,
					overflow: "hidden",
					transition: '1s'
				}
				,greeting;
			
			if (timeOfDay >= 0 && timeOfDay < 12){
				theme.backgroundImage = 'linear-gradient("#6f0979","#ffebbd")'
				greeting = "Good Morning, anything you want to tell me?";
			}
			else if (timeOfDay >= 12 && timeOfDay < 16){
				theme.backgroundImage = 'linear-gradient("#425891","#acd9da")';
				greeting = "Good Day! How's it going?";
			}
			else if (timeOfDay >= 16 && timeOfDay < 21){
				theme.backgroundImage = 'linear-gradient("#872458","#f78300")';
				greeting = "Good Afternoon - let's talk about it!";
			}
			else if (timeOfDay >= 21 && timeOfDay < 24){
				theme.backgroundImage = 'linear-gradient("#151416","#564379")';
				greeting = "Good Evening, anything you want to tell me?";
			}

			this.props.updateTheme(theme);
			this.props.updateGreeting(greeting);
		  },60000)
	}

	render(){
		//TODO: The reply,stories, and story should be here
		// Set by a condition in the state
		//<Reply/>
		return(
		<div style={this.props.theme}>
			<div className='home-exit-button-container' onClick={this.props.actions.signout}>
				<FaSignOutAlt color='white'/>
			</div>
			<div className="home-cloud-center">
				<Story message={this.props.greeting}/>
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

const mapStateToProps = (state) => {
	return {
		theme: state.theme,
		greeting: state.greeting
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateTheme: (theme) => dispatch(updateTheme(theme)),
		updateGreeting: (greeting) => dispatch(updateGreeting(greeting)),
		signout: () => dispatch(signout())
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)