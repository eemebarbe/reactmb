import React from 'react';
import update from 'react-addons-update';
import ReactDOM from 'react-dom';
import * as RB from 'react-bootstrap';
import $ from 'jquery';
import * as formatting from './header.jsx';


class PostDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: window.loopComments,
            numberOfComments: window.loopComments.length,
            commentSubmitted: false,
            thisComment: null,
            thisCommentIndex: null,
            showConfirm: null
        };
    }
    // when showConfirm is set to false, modal is not visible
    close() {
        this.setState({
            showConfirm: false
        });
    }
    // opens a pop-up that confirms that you would like to delete the selected comment
    open(comment, commentIndex) {
        this.setState({
            showConfirm: true,
            thisComment: comment,
            thisCommentIndex: commentIndex
        });
    }
    // posts comment to database
    postComment() {
        var self = this;
        var commentData = {
            comment: ReactDOM.findDOMNode(this.refs.submitComment).value,
            idposts: window.idposts,
            username: window.user,
        };

        $.post('../api/v1/newcomment', commentData, function(response) {
            // adds user's submitted comment to the DOM
            $.get('../api/v1/comments/' + idposts, function(response){
                self.setState({
                    comments: response
                })
            });
        });
        // when set to true, commentSubmitted removes the comment form and adds a thank-you message
        this.setState({
            commentSubmitted: true
        });
    }

    // deletes selected comment
    deleteComment() {
        var deletedComment = {
            comment: this.state.thisComment
        };
        $.post('../api/v1/deletecomment/', deletedComment, function() {
            this.setState({
                comments: update(this.state.comments, {
                    $splice: [
                        [this.state.thisCommentIndex, 1]
                    ]
                })
            });
        }.bind(this));
        // removes confirmation pop-up after ajax request is complete
        this.setState({
            showConfirm: false
        });
    }


    render() {

        var authRender = null;
        // if user is signed in and hasn't yet submitted a comment
        if (window.user !== '' && this.state.commentSubmitted == false) {
            authRender =
                <RB.Row className="addCommentForm">
						<h4>{this.state.numberOfComments} Comments</h4>
						<RB.FormGroup>        	
				        	<RB.FormControl ref='submitComment' componentClass='textarea' type='text'/>
				        </RB.FormGroup>
				        <RB.ButtonGroup>
							<RB.Button onClick={this.postComment.bind(this)}>Submit</RB.Button>
						</RB.ButtonGroup>
					</RB.Row>
        } else if (window.user !== '' && this.state.commentSubmitted == true) {  // if user is signed in and has submitted a comment
            authRender =
                <RB.Row>
			  			<h4>Thanks!</h4>
			  		</RB.Row>
        } else {  // if user is not signed in
            authRender =
                <RB.Row className="addCommentForm">
			  			<h4>{this.state.numberOfComments} Comments <b>(Please log in to comment!)</b></h4>
			  		</RB.Row>
        }
        // recieves state information and populates a list of comments on the post
        var finalComments = this.state.comments.map((commentsEntered) => {
            if (window.user == commentsEntered.username) {
                return (
                    <div>
						<RB.Row className='commentRow' onClick={this.open.bind(this, commentsEntered.idcomments, this.state.comments.indexOf(commentsEntered))}>
							<RB.Col xs={3} sm={2}>
								<RB.Image className='commentImg' src={ commentsEntered.avatar } responsive circle />
							</RB.Col>
							<RB.Col xs={9} sm={10}>
								<RB.Panel className='commentPanel' header={ commentsEntered.username }>
						      		{ commentsEntered.comment }
                                    <div className='commentDeletion'>
						      		  <RB.Glyphicon glyph='glyphicon glyphicon-remove'/>
                                    </div>
					    		</RB.Panel>
				    		</RB.Col>
			    		</RB.Row>
		    		</div>
                );
            } else {
                return (
                    <div>
						<RB.Row className='commentRow'>
							<RB.Col xs={3} sm={2}>
								<RB.Image className='commentImg' src={ commentsEntered.avatar } responsive circle />
							</RB.Col>
							<RB.Col xs={9} sm={10}>
								<RB.Panel className='commentPanel' header={ commentsEntered.username }>
					      		{ commentsEntered.comment }
				    		</RB.Panel>
				    		</RB.Col>
			    		</RB.Row>
		    		</div>
                );
            }
        });

        return (
            <div>
				<RB.Row>
                    <div className='postHeader'>
    					<h2>{ window.title }</h2>
                        <div>by { window.owner }</div>
                    </div>
					<div>{ window.article }</div>
				</RB.Row>
					{authRender}
				<RB.Row className='commentsBox'>
					{finalComments}
				</RB.Row>

	      		<RB.Modal show={this.state.showConfirm} onHide={this.close.bind(this)}>
					<RB.Modal.Header closeButton>
		      		</RB.Modal.Header>
		      		<RB.Modal.Body>
			      		<h4>Are you sure you would like to delete this comment?</h4>
			      		<RB.Button onClick={this.deleteComment.bind(this)}>Yes</RB.Button>
			      		<RB.Button onClick={this.close.bind(this)}>No</RB.Button>
		      		</RB.Modal.Body>
				</RB.Modal>
			</div>

        )
    }
}


class PostPage extends React.Component {

    render() {
        return (
            <RB.Grid>
				<formatting.Header />
				<PostDisplay />
			</RB.Grid>
        )
    }
}

ReactDOM.render(<PostPage />, document.getElementById('content'));
