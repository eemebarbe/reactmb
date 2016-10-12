import React from 'react';
import update from 'react-addons-update';
import ReactDOM from 'react-dom';
import * as RB from 'react-bootstrap';
import $ from "jquery";
import * as formatting from './header.jsx';


class ProfileOptions extends React.Component {

	constructor(props) {
    super(props);
    this.state = { 
    	posts : window.posts,
    	showConfirm : false
    };
  	}

	uploadImage() {

	}

	deletePost(post, postIndex) {
		var deletedPost = {post : post};
		$.post('/api/v1/deletepost/', deletedPost, function() {
			this.setState({ 
				 posts : update(this.state.posts, {$splice: [[postIndex, 1]]})
			});
		}.bind(this));
	}


	render() {

		var finalPosts = this.state.posts.map((posts) => {
			return (
				<div>
				<RB.Row className="postRow" onClick={this.deletePost.bind(this, posts.idposts, this.state.posts.indexOf(posts))}>
					<RB.Panel>
						{posts.title}
						{posts.postdate}
						<RB.Glyphicon glyph="glyphicon glyphicon-remove"/>
					</RB.Panel>
	    		</RB.Row>
	    		</div>
	        );
	    });

		return (
			<div>
				<RB.Row>
				<h4>Profile Image</h4>
	      		<RB.Image className="userImg" src="https://x.myspacecdn.com/new/common/images/user.png" responsive circle />
			    <RB.FormGroup id="formControlsFile">
			        <RB.FormControl type="file"/>
			    </RB.FormGroup>
				<RB.Button onClick={this.uploadImage.bind(this)}>Save</RB.Button>
				</RB.Row>
				<RB.Row>
	      		<h4>Posts</h4>
	      			{finalPosts}
	      		</RB.Row>
	      	</div>
			);
	}
}

class PostDeletionConfirm extends React.Component {

	constructor(props) {
    	super(props);
  	}

	render() {
		return (
			<RB.Modal show={this.props.showConfirm} onHide={this.props.close}>
				<RB.Modal.Header closeButton>
	      		</RB.Modal.Header>
	      		<h4>Are you sure you would like to delete this post?</h4>
	      		<RB.Button>Yes</RB.Button>
	      		<RB.Button>No</RB.Button>
			</RB.Modal>
		);
	}
}

class ProfilePage extends React.Component {
	render() {
		return (
			<RB.Grid>
			<formatting.Header />
			<ProfileOptions />
			<Modal showConfirm={this.state.showConfirm} onHide={this.close.bind(this)} close={this.close.bind(this)}/>
			</RB.Grid>
			);
	}
}


ReactDOM.render(<ProfilePage />, document.getElementById('content'));