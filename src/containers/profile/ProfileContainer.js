import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileComponent from '../../components/profile/ProfileComponent';

const mapStateToProps = (state) => {
    return state.user;
};

const mapDispatchToProps = (dispatch) => {
    return {
        onProfileInit: () => {
            dispatch({type: "INIT_PROFILE"});
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileComponent);