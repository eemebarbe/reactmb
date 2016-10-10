import React from 'react';
import ReactDOM from 'react-dom';
import * as RB from 'react-bootstrap';
import $ from "jquery";
import * as formatting from './header.jsx';


class PostDisplay extends React.Component {

	constructor(props) {
    super(props);
    this.state = { comments: window.loopComments,
    				numberOfComments: window.loopComments.length,
    				commentSubmitted: false };
  	}

	postComment() {
		var commentData = {
	  		comment : ReactDOM.findDOMNode(this.refs.submitComment).value,
	  		idposts : window.idposts,
	  		idusers : window.user
	  		};

			$.post("../api/v1/newcomment", commentData, function(response) {
				this.setState({ comments : this.state.comments.concat(commentData)});
			}.bind(this));

			this.setState({ commentSubmitted : true });
	}


	deleteComment(comment, commentIndex) {
		var deletedComment = {comment : comment};
		console.log(this.state.comments);
		$.post('../api/v1/deletecomment/', deletedComment, function() {
			this.setState({ 
				 comments : this.state.comments.splice(commentIndex, 1)});
		}.bind(this));
	}


	render() {

		var authRender = null;
			if( window.user !== "" && this.state.commentSubmitted == false ) { 
			 	authRender = 
					<RB.Row>
						<h4>{this.state.numberOfComments} Comments</h4>
						<RB.FormGroup>        	
				        <RB.FormControl ref="submitComment" componentClass="textarea" type="text"/>
				        </RB.FormGroup>
				        <RB.ButtonGroup>
						<RB.Button onClick={this.postComment.bind(this)}>Submit</RB.Button>
						</RB.ButtonGroup>
					</RB.Row>
		  	} else if ( window.user !== "" && this.state.commentSubmitted == true ) {
			  	authRender = 
			  		<RB.Row>
			  			<h4>Thanks!</h4>
			  		</RB.Row>					
		  	} else {
			  	authRender = 
			  		<RB.Row>
			  			<h4>{this.state.numberOfComments} Comments <b>(Please log in to comment!)</b></h4>
			  		</RB.Row>
			}

		var	finalComments = this.state.comments.map((commentsEntered) => {
	        return (
				<div>
				<RB.Row className="commentRow" onClick={this.deleteComment.bind(this, commentsEntered.idcomments, this.state.comments.indexOf(commentsEntered))}>
				<RB.Col xs={3} sm={2}>
				<RB.Image className="commentImg" src="https://x.myspacecdn.com/new/common/images/user.png" responsive circle />
					</RB.Col>
					<RB.Col xs={9} sm={10} >
				<RB.Panel className="commentPanel" header={ commentsEntered.iduser }>
	      		{ commentsEntered.comment }
	      		<RB.Glyphicon glyph="glyphicon glyphicon-remove"/>
	    		</RB.Panel>
	    		</RB.Col>
	    		</RB.Row>
	    		</div>
	        );
	    });

		return (
			<div>
			<RB.Row>
				<h2>{ window.title }</h2>
				<div>{ window.article }</div>
			</RB.Row>
				{authRender}
			<RB.Row>
				{finalComments}
			</RB.Row>
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
