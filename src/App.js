import React from 'react';
import Home from './components/home/Home.js';
import Login from './components/login/Login.js';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {updateUser} from './actions/root-actions';
import {withRouter} from 'react-router-dom';

import './App.css';

class App extends React.Component {
    handleAuth = () => {
        const firebase = this.props.firebase;

        firebase.auth().onAuthStateChanged((user) => {
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
                this.props.history.push('/');
                console.log('returning authorized user');
            }
            else {
                this.props.history.push('/login');
            }
        });
    }

    componentDidMount() {
        if (this.props.user) {
            this.props.history.push('/');
        }
        else {
            this.props.history.push('/login');
        }
        this.handleAuth();
    }

    render(){
		return (
            <div>
                {console.log(this.props.user)}
                <Switch>
                    <Route exact path='/' render={() => <Home />}/>
                    <Route path='/login' render={() => <Login />}/>
                </Switch>
            </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(App));