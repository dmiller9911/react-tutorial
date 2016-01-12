import React, { Component, PropTypes } from 'react';
import oboe from 'oboe';
import CommentList from './../CommentList';
import CommentForm from './../CommentForm';



export default class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };

        //Binding Methods to this
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    }

    componentDidMount() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    }

    handleCommentSubmit (comment) {
        oboe({
            url: this.props.url,
            method: "POST",
            body: comment,
        })
        .done((data) => {
            this.setState({data: data});
        })
        .fail((err) => {
            console.error(this.props.url, err.statusCode, err.body)
        })
    }

    loadCommentsFromServer () {
        oboe(this.props.url)
            .done((data) => {
                this.setState({data: data});
            })
            .fail(() => {
                console.log('Oboe Error');
            });
    }

    render () {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
}
