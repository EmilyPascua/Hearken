import React from 'react';
import firebase from 'firebase'
import fire from './fire'
import Home from './components/home/Home.js';
import Login from './components/login/Login.js';
import Register from './components/register/Register.js';
import Reply from './components/reply/Reply.js';
import Settings from './components/settings/Settings.js';
import Stories from './components/stories/Stories.js';
import Story from './components/story/Story.js';

import './App.css';

const db = fire.database()

class App extends React.Component {
	state = {
		user: null,
		settingsVisible: false
	}

	actions = {
		login: () => {
			const provider = new firebase.auth.GoogleAuthProvider()

			firebase.auth().signInWithPopup(provider)
                .then((u) => {
                	const token = u.credential.accessToken
                	const user = u.user

                	this.setState({user: user})
                    console.log('Successfully Logged In' + ' ' + user);
                })
                .catch((err) => {
                    console.log('Error: ' + err.toString())
                })
		},
		singout: () => {
			firebase.auth().signOut()
				.then((u) => {
						console.log(u.user.name)
						this.setState({user: null})
					}
				)
				.catch((err) => {console.log('Error: ' + err.toString())})
		}	
	}

	render(){
		return (
			<div>
				{this.state.user && !this.state.settingsVisible && <Home/>}
				{!this.state.user && !this.state.settingsVisible && <Login actions={this.actions}/>}
				{this.state.settingsVisible && <Settings/>}
			</div>
		)
	}
}

export default App;