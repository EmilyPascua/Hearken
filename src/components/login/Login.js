import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';
import GoogleIcon from './64px-Google.svg';

export default class login extends React.Component {
    state = {
        googleLogin: true,
        emailInput: '',
        passwordInput: ''
    }

    login = () => {
        this.props.actions.login(this.state.emailInput,this.state.passwordInput)
        this.setState({emailInput: '',passwordInput: ''})
    }

    handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            this.login()
        }
    }

    updateEmailInput = (e) =>  {
        this.setState({emailInput: e.target.value})
    }

    updatePasswordInput = (e) => {
        this.setState({passwordInput: e.target.value})
    }

    createAccount = () => {
        this.props.actions.createAccount(this.state.emailInput,this.state.passwordInput)
        this.setState({emailInput: '', passwordInput: ''})
    }

    render(){
        return(
            <div className="login-container">
                {this.state.googleLogin &&
                    <button className='login-google-button' type='button' onClick={this.props.actions.googleLogin}>
                        <img src={GoogleIcon} alt='Google G'/>
                        <span>Login With Google</span>
                    </button>
                }
            </div>
        )
    }
}