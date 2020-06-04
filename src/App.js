import React from 'react';
import Home from './components/home/Home.js';
import Login from './components/login/Login.js';
import {connect} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import {updateUser} from './actions/root-actions'

import './App.css';

class App extends React.Component {
    componentDidMount() {
        const firebase = this.props.firebase;

        firebase.auth().onAuthStateChanged((user) => {
            console.log('state changed');
            if (user) {
                const {displayName,email,emailVerified,photoURL,uid} = user
                    ,userObj = {
                        displayName: displayName,
                        email: email,
                        emailVerified: emailVerified,
                        photoURL: photoURL,
                        uid: uid
                    }
                this.props.updateUser(userObj);
                console.log('returning authorized user');
            }
        });
    }

    render(){
		return (
            <BrowserRouter>
                <Route exact path='/home' render={() => this.props.user && <Home />}/>
                {!this.props.user && <Login />}
            </BrowserRouter>
		)
    }
}
//properties from redux store state is mapped to App
const mapStateToProps = state => {
    return {
        firebase: state.firebase,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: user => dispatch(updateUser(user))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);