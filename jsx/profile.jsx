import React from 'react';
import ReactDOM from 'react-dom';
import * as RB from 'react-bootstrap';
import $ from "jquery";
import * as formatting from './header.jsx';


class ProfileOptions extends React.Component {

	constructor(props) {
    super(props);
    this.state = { posts : window.posts };
  }

	uploadImage() {


	}

	render() {

		var finalPosts = this.state.posts.map((posts) => {
			return (
				<div>
				<RB.Row className="postRow">
					<RB.Panel>
						{posts.title}
						{posts.postdate}
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