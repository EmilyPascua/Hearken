import React from 'react';
import Home from './Home';
import Login from './Login';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Route,Switch } from 'react-router-dom';
import { firestoreConnect,isLoaded } from 'react-redux-firebase';

const App = ({ stories }) => {
	if (!isLoaded(stories)) {
		return <div>Loading...</div>
	}
	return (
		<Switch>
			<Route exact path='/' render={() => <Home />}/>
			<Route path='/login' render={() => <Login />}/>
		</Switch>
	)
}

const enhance = compose(
	firestoreConnect([{
		collection: 'stories'
	}]),
	connect(
		state => ({
			stories: state.firestore.data.stories
		}),
		dispatch => ({})
	)
)

export default enhance(App);