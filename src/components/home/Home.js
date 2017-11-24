import React, { Component } from 'react';
import './Home.css'
import Auth from './auth/Auth.js'

class Home extends Component {

    render() {
        return(
            <div className="home_background">
                <div className="auth_header">
                    <p>Sign In to Continue</p>
                </div>
                <Auth />
            </div>
        );
    }
}

export default Home;