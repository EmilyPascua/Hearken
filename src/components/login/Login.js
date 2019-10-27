import React from 'react'

import Register from '../register/Register.js';

//import HeaderCarousel from '../headercarousel/HeaderCarousel.js';
//import './body.css'

class Login extends React.Component {
	render(){
		//TODO: The reply,stories, and story should be here
		// Set by a condition in the state
		return(
			<div>
				<button onClick={this.props.actions.login}>
					Press Me To Log In!
				</button>
				{/*Login Component (<Register/> in the login component)*/}
			</div>
		)
	}
}

export default Login