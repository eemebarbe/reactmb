import React from 'react';
import update from 'react-addons-update';
import ReactDOM from 'react-dom';
import * as RB from 'react-bootstrap';
import $ from 'jquery';
import * as formatting from './header.jsx';



class ProfileOptions extends React.Component {

	constructor(props) {
    super(props);
    this.state = { 
    	posts : window.posts,
    	avatar : window.avatar,
    	showConfirm : false,
    	deletePost : null,
    	deletePostIndex : null,
    	isLoading : false
    };
  	}

    close() {
    	this.setState({ showConfirm: false });
  	}

  	open(post, postIndex) {
    	this.setState({ showConfirm: true,
    					deletePost : post,
    					deletePostIndex : postIndex });
  	}

  	uploadImage() {
  		var self = this;
  		this.setState({ isLoading : true });

  		var avatarData = ReactDOM.findDOMNode(this.refs.avatarPath).files[0],
  			avatarPath = ReactDOM.findDOMNode(this.refs.avatarPath).value,
  			data = new FormData(),
 			re = /(\.jpg|\.jpeg|\.bmp|\.gif|\.png)$/i;
 		data.append('avatar', avatarData);

		if(!re.exec(avatarPath))
		{
			alert('File extension not supported!');
		}
		else if(avatarData.size > 20000) {
			alert('File size is too big!');
		}
		else {
	  		$.ajax({
			  url: 'api/v1/avatar',
			  data: data,
			  processData: false,
			  contentType: false,
			  type: 'POST',
			  success: function(){
			    self.setState({ isLoading : false, avatar : '../uploads/avatars/' + window.user });
			  },
			  error: function(){
			  	self.setState({ isLoading : false });
			  }
			});
		}
  	}

	deletePost() {
		var deletedPost = {post : this.state.deletePost};
		$.post('/api/v1/deletepost/', deletedPost, function() {
			this.setState({ 
				 posts : update(this.state.posts, {$splice: [[this.statedeletePostIndex, 1]]})
			});
		}.bind(this));
		this.setState({ showConfirm: false });
	}


	render() {

		var finalPosts = this.state.posts.map((posts) => {
			return (
				<div>
				<RB.Row className='postRow' onClick={this.open.bind(this, posts.idposts, this.state.posts.indexOf(posts))}>
					<RB.Panel>
						{posts.title}
						{posts.postdate}
						<RB.Glyphicon glyph='glyphicon glyphicon-remove'/>
					</RB.Panel>
	    		</RB.Row>
	    		</div>
	        );
	    });

		return (
			<div>
				<RB.Row>
					<RB.Col xs={12} sm={6}>
						<h4>Profile Image</h4>
			      		<RB.Image className='userImg' src={ this.state.avatar } responsive circle />
				    </RB.Col>
				    <RB.Col xs={12} sm={6}>
						<h4>Upload New Profile Image</h4>
					    <RB.Well>
					    	<RB.FormGroup>
								<input type='file' ref='avatarPath' name='file'/>
							</RB.FormGroup>
							<RB.Button disabled={this.state.isLoading} onClick={this.uploadImage.bind(this)}>{ this.state.isLoading ? 'Loading...' : 'Save' }</RB.Button>
						</RB.Well>
					</RB.Col>
				</RB.Row>

				<RB.Row>
			      	<h4>Posts</h4>
			   	</RB.Row>
			      	{finalPosts}

	      		<RB.Modal show={this.state.showConfirm} onHide={this.close.bind(this)}>
				<RB.Modal.Header closeButton>
	      		</RB.Modal.Header>
	      		<RB.Modal.Body>
		      		<h4>Are you sure you would like to delete this post?</h4>
		      		<RB.Button onClick={this.deletePost.bind(this)}>Yes</RB.Button>
		      		<RB.Button onClick={this.close.bind(this)}>No</RB.Button>
	      		</RB.Modal.Body>
				</RB.Modal>
	      	</div>

			);
	}
}


class ProfilePage extends React.Component {
	render() {
		return (
			<RB.Grid>
			<formatting.Header />
			<ProfileOptions />
			</RB.Grid>
			);
	}
}


ReactDOM.render(<ProfilePage />, document.getElementById('content'));