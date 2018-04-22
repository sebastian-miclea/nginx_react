import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { store } from './_helpers';
import { App } from './App';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';

render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={LoginPage} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('app')
);