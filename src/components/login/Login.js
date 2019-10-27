import React from 'react'

// import Register from '../register/Register.js';

//import HeaderCarousel from '../headercarousel/HeaderCarousel.js';
//import './Login.scss'

class Login extends React.Component {
    constructor(props) {
		super(props);
		this.state = {};
	  }

	render(){
		return (
			<div className="inner-container">
			  <div className="header">
				Login
			  </div>
			  <div className="box">
	  
				<div className="input-group">
				  <label htmlFor="username">Username</label>
				  <input
					type="text"
					name="username"
					className="login-input"
					placeholder="Username"/>
				</div>
	  
				<div className="input-group">
				  <label htmlFor="password">Password</label>
				  <input
					type="password"
					name="password"
					className="login-input"
					placeholder="Password"/>
				</div>
	  
				<button
				  type="button"
				  className="login-btn"
				  onClick={this.props.actions.loginGoogle}>Login</button>
			  </div>
			</div>
		  );
	}
}

export default Login