import React from 'react';
import ReactDOM from 'react-dom';
import * as RB from 'react-bootstrap';
import $ from "jquery";
import * as formatting from './header.jsx';


class PostDisplay extends React.Component {

	constructor(props) {
    super(props);
    this.state = { comments: [],
    				numberOfComments: null };
  }

	getComments() {
		var finalComments = [];
			for(var i=0; i<loopComments.length; i++) {
				finalComments.push(
					<div>
					<RB.Row className="commentRow">
					<RB.Col xs={3} sm={2}>
        			<RB.Image className="commentImg" src="https://x.myspacecdn.com/new/common/images/user.png" responsive circle />
      				</RB.Col>
      				<RB.Col xs={9} sm={10} >
					<RB.Panel className="commentPanel" header={ window.loopComments[i].iduser }>
		      		{ window.loopComments[i].comment }
		    		</RB.Panel>
		    		</RB.Col>
		    		</RB.Row>
		    		</div>
					);
       this.setState({comments: finalComments, numberOfComments: loopComments.length});
		}
	}

	postComment() {

	var commentData = {
  		comment : ReactDOM.findDOMNode(this.refs.submitComment).value,
  		idposts : window.idposts,
  		idusers : window.user
  		};

		$.post("../api/v1/newcomment", commentData);


	}

	componentDidMount() {
		this.getComments();
	}

		render() {

		var authRender = null;
		if( window.user !== "" ) { 
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
	  } else {
	  authRender = <h4>Please sign in to comment!</h4>;
	  }

		return (

			<div>
			<RB.Row>
				<h2>{ window.title }</h2>
				<div>{ window.article }</div>
			</RB.Row>
			{authRender}
			<RB.Row>
				{this.state.comments}
			</RB.Row>
			</div>

			)}
}

class PostPage extends React.Component {

		render() {
		return (
			<RB.Grid>
			<formatting.Header />
			<PostDisplay />
			</RB.Grid>
			)}

}

ReactDOM.render(<PostPage />, document.getElementById('content'));
