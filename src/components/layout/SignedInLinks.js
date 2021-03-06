import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import {signOut} from '../../store/actions/authActions';

const SignedInLinks  = (props) => {
    const {auth} = props
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
    <li><NavLink to='/' className="btn btn-floating pink lighten-1">{auth.initial}</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.profile
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignedInLinks);