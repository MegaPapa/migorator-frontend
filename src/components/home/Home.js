import React, { Component } from 'react';
import './Home.css'
import AuthContainer from "../../containers/auth/AuthContainer";

class Home extends Component {

    render() {
        return(
            <div className="home_background">
                <div className="auth_header">
                    <p>Sign In to Continue</p>
                </div>
                <AuthContainer />
            </div>
        );
    }
}

export default Home;