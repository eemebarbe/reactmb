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
    	showConfirm : false,
    	deletePost : null,
    	deletePostIndex : null
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
  		var avatarData = ReactDOM.findDOMNode(this.refs.avatarPath).files[0],
  			avatarPath = ReactDOM.findDOMNode(this.refs.avatarPath).value,
  			data = new FormData(),
 			re = /(\.jpg|\.jpeg|\.bmp|\.gif|\.png)$/i;
 		data.append('avatar', avatarData);

		if(!re.exec(avatarPath))
		{
			alert("File extension not supported!");
		}
		else if(avatarData.size > 20000) {
			alert("File size is too big!");
		}
		else {
	  		$.ajax({
			  url: 'api/v1/avatar',
			  data: data,
			  processData: false,
			  contentType: false,
			  type: 'POST',
			  success: function(){
			    alert("success");
			  },
			  error: function(){
			  	alert("error");
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
				<RB.Row className="postRow" onClick={this.open.bind(this, posts.idposts, this.state.posts.indexOf(posts))}>
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
			    
			    
				<input type="file" ref="avatarPath" name="file"/>
				
			    
				<RB.Button onClick={this.uploadImage.bind(this)}>Save</RB.Button>
				</RB.Row>
				<RB.Row>
	      		<h4>Posts</h4>
	      			{finalPosts}
	      		</RB.Row>

	      		<RB.Modal show={this.state.showConfirm} onHide={this.close.bind(this)}>
				<RB.Modal.Header closeButton>
	      		</RB.Modal.Header>
	      		<RB.Modal.Body>
		      		<h4>Are you sure you would like to delete this post?</h4>
		      		<RB.Button onClick={this.deletePost.bind(this)}>Yes</RB.Button>
		      		<RB.Button>No</RB.Button>
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