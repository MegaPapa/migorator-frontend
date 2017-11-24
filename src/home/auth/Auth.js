import React, { Component } from 'react';
import './Auth.css'

class Auth extends Component {

    render() {
        return(
            <div className="auth_form">
                <div className="custom_input">
                    <div className="input_header">
                        <p>Email:</p>
                    </div>
                    <div className="input_textfield">
                        <input type="text" size="255" />
                    </div>
                </div>
                <div className="custom_input">
                    <div className="input_header">
                        <p>Password:</p>
                    </div>
                    <div className="input_textfield secure">
                        <input type="password" size="255" />
                    </div>
                </div>
                <div className="sign_button">
                
                </div>
                <div className="sign_button">

                </div>
            </div>
        );
    }
}

export default Auth;