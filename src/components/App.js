import React from 'react';
import Home from './home/Home.js';
import Login from './login/Login.js';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Route,Switch } from 'react-router-dom';
import { updateUser } from '../flux/actions/root-actions';
import { withRouter } from 'react-router-dom';

class App extends React.Component {
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

const enhance = compose(
    connect(
        state => {

        },
        dispatch => {

        }
    )
)

export default enhance(App);