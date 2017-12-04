import React, { Component } from 'react';
import './AuthComponent.css';

class AuthComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false,
            responseWaiting : false
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
                        () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                            }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid &&
                                    this.state.passwordValid});
    }

    signUp() {
        this.props.onSignUpClick(this.state.email, this.state.password);
    }

    signIn() {
        this.props.onSignInClick(this.state.email, this.state.password);
    }

    noop() {
        this.props.onNoopClick();
    }

    render() {
        return(
            <div className="auth_form">
                <div className="custom_input">
                    <div className="input_header">
                        <p>Email:</p>
                    </div>
                    <div className="input_textfield">
                        <input value={this.state.email} onChange={this.handleUserInput} name="email" type="text" size="255" />
                    </div>
                </div>
                <div className="custom_input">
                    <div className="input_header">
                        <p>Password:</p>
                    </div>
                    <div className="input_textfield secure">
                        <input value={this.state.password} onChange={this.handleUserInput} name="password" type="password" size="255" />
                    </div>
                </div>
                <div className="button_wrapper">
                    <div 
                        className={this.state.formValid && !this.state.responseWaiting ? 'sign_button' : 'locked_signin'}
                        onClick={this.state.formValid && !this.state.responseWaiting ? this.signIn.bind(this) : this.noop.bind(this)}
                    >
                
                        Sign In
                    </div>
                    <div 
                        className={this.state.formValid && !this.state.responseWaiting ? 'signup_button' : 'locked_signup'}
                        onClick={this.state.formValid && !this.state.responseWaiting ? this.signUp.bind(this) : this.noop.bind(this)}
                    >
                        Sign Up
                    </div>
                </div>
                
            </div>
        );
    }
}

export default AuthComponent;