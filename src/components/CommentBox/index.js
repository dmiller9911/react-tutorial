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
    }

    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm />
            </div>
        );
    }

    componentDidMount() {
        oboe(this.props.url)
            .done((data) => {
                this.setState({data: data});
            })
            .fail(() => {
                console.log('Oboe Error');
            });
    }
}
