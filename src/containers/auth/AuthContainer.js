import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthComponent from '../../components/home/auth/AuthComponent';

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSignInClick: (email, password) => {
            dispatch({type: "SIGN_IN", email, password});
        },
        onSignUpClick: (email, password) => {
            dispatch({type: "SIGN_UP", email, password});
        },
        onNoopClick: () => {
            dispatch({type: "NOOP"});
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthComponent);