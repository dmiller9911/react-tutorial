import React, { Component, PropTypes } from 'react';
import CommentBox from './components/CommentBox';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <CommentBox url="/api/comments" pollInterval={2000} />;
    }
}
