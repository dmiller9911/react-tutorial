import React from 'react'
import { render } from 'react-dom'
import App from './App';
import { Router, Route, Link, browserHistory } from 'react-router'

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App} />
    </Router>
);
