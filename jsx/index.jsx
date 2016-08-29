import React from 'react';
import ReactDOM from 'react-dom';
import * as RB from 'react-bootstrap';
import $ from "jquery";
import * as formatting from './header.jsx';



class SubmissionList extends React.Component {

	constructor(props) {
    super(props);
    this.state = { 	posts: [],
    				 };
  }

	getPosts() {
		var loopPosts = [];
		$.get("/api/v1/postrange/" + window.page, function(response) {
			for(var i=0; i<response.length; i++) {
				loopPosts.push(
					<RB.ListGroupItem href={"/post/" + response[i].idposts} header={response[i].title}>
					Submitted by {response[i].idusers} | Comments <b>(104)</b>
					</RB.ListGroupItem>
					);
			}
       this.setState({posts: loopPosts});
		}.bind(this));
	}

	componentDidMount() {
		this.getPosts();
  }


	render() {
		return (
			<RB.Row>
			<RB.ListGroup>

			 {this.state.posts}

			</RB.ListGroup>
			<RB.Pagination next prev items={5} maxButtons={5} activePage={2}></RB.Pagination>
			</RB.Row>

			);
	}
}

class FrontPage extends React.Component {
	render() {
		return (
			<RB.Grid>
			<formatting.Header />
			<SubmissionList />

			</RB.Grid>
			);
	}
}

ReactDOM.render(<FrontPage />, document.getElementById('content'));


