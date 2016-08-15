import React from 'react';
import ReactDOM from 'react-dom';
import * as RB from 'react-bootstrap';
import $ from "jquery";
import * as formatting from './header.jsx';


class SubmissionList extends React.Component {

	constructor(props) {
    super(props);
    this.state = {posts: []};

   this.getPosts = this.getPosts.bind(this);
  }

	getPosts() {
    var self = this;
    var posts = [];
		$.get("api/v1/posts/", function(response) {
			for(var i=0; i<response.length; i++) {
				posts.push(<RB.ListGroupItem header={response[i].title}>{response[i].article}</RB.ListGroupItem>);
			}
       self.setState({posts: posts});
		});
	}

	render() {
		return (
			<RB.Row>
			<RB.ListGroup>
			  <RB.ListGroupItem header="Duck">Cras justo odio</RB.ListGroupItem>

			  <RB.Button onClick={this.getPosts}>clcik</RB.Button>
			  <div>{this.state.posts}</div>

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


