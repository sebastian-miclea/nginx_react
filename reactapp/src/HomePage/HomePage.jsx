import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';

class HomePage extends React.Component {

    render() {
        return (
            <div>
                <div>Hello world </div>
                <Link to="/login">Login</Link>
            </div>
        );
    }
}

export { HomePage };