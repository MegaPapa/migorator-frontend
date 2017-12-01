import React, { Component } from 'react';
import axios from 'axios';
import './Auth.css';
import AuthContainer from '../../../containers/auth/AuthContainer';

class Auth extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
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

    signin = (e) => {
        var body = `username=${encodeURIComponent(this.state.email)}&password=${encodeURIComponent(this.state.password)}&grant_type=password`
        var request_instance = axios.create({
            baseURL: 'http://localhost:8080/oauth/token',
            headers: {'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(`migorator-frontend:secret`)}
        });
        request_instance.post("http://localhost:8080/oauth/token", body)
        .then(function(response) {
            console.log("response was succ");
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    signup = (e) => {
        var user = {
            email : this.state.email,
            password : this.state.password
        }
        axios.post("http://localhost:8080/signup", user)
        .then(function(response) {
            if (response.status == 200) {
                alert("Registration was succesful!");
            }
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    noop = (e) => {
        console.log("NOOP");
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
                        className={this.state.formValid ? 'sign_button' : 'locked_signin'}
                        onClick={this.state.formValid ? this.signin : this.noop}
                    >
                
                        Sign In
                    </div>
                    <div 
                        className={this.state.formValid ? 'signup_button' : 'locked_signup'}
                        onClick={this.state.formValid ? this.signup : this.noop}
                    >
                        Sign Up
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Auth;