import React from 'react';
import GoogleIcon from './Google_G.svg';
import {connect} from 'react-redux';
import {login} from '../../flux/actions/root-actions';

import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';

class Login extends React.Component {
    onClickHandler = () => {
        this.props.login();
        this.props.history.push('/');
    }
    render(){
        return(
            <div className="login-container">
                <button className='login-google-button' type='button' onClick={this.props.login}>
                    <img src={GoogleIcon} alt='Google G'/>
                    <span>Login With Google</span>
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(login())
    }
} 

export default connect(mapStateToProps,mapDispatchToProps)(Login);