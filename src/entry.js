import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/CommentBox';


ReactDOM.render(
    <CommentBox url="/api/comments" />,
    document.getElementById('content')
);



//var data = [
//    {id: 1, author: "Pete Hunt", text: "This is one comment"},
//    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
//];
//
//class CommentBox extends React.Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            data: []
//        };
//    }
//
//    render() {
//        return (
//            <div className="commentBox">
//                <h1>Comments</h1>
//                <CommentList  data={this.state.data}/>
//                <CommentForm />
//            </div>
//        );
//    }
//
//    componentDidMount () {
//        $.ajax({
//            url: this.props.url,
//            dataType: 'json',
//            cache: false,
//            success: (data) => {
//                this.setState({data: data});
//            },
//            error: (xhr, status, err) => {
//                console.error(this.props.url, status, err.toString());
//            }
//        });
//    }
//}
//
//class CommentList extends React.Component {
//    render() {
//
//        var commentNodes = this.props.data.map(function(comment) {
//            return (
//                <Comment author={comment.author} key={comment.id}>
//                    {comment.text}
//                </Comment>
//            );
//        });
//        return (
//            <div className="commentList">
//                {commentNodes}
//            </div>
//        );
//    }
//}
//
//class CommentForm extends React.Component {
//    render() {
//        return (
//            <div className="commentForm">
//                Hello, world! I am a CommentForm.
//            </div>
//        )
//    }
//}
//
//class Comment extends React.Component {
//
//    rawMarkup () {
//        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
//        console.log(rawMarkup);
//        return { __html: rawMarkup };
//    }
//
//    render () {
//        return (
//            <div className="comment">
//                <h2 className="commentAuthor">
//                    {this.props.author}
//                </h2>
//                <span dangerouslySetInnerHTML={this.rawMarkup()} />
//            </div>
//        )
//    }
//}

