import React from 'react';
import ReactDOM from 'react-dom';
import * as RB from 'react-bootstrap';
import $ from "jquery";
import * as formatting from './header.jsx';



class SubmissionList extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = { 	
	    	posts: [],
	    	currentPage : 1,
	    	numberOfPages: null
	    };
	  }

	getPosts(page) {
		var loopPosts = [];
		var pageRange = 3;
		$.get("/api/v1/postcount/", function(response) {
			var math = Math.ceil(response[0].count / pageRange);
       		this.setState({ numberOfPages: math });
		}.bind(this));

		$.get("/api/v1/postrange/" + page, function(response) {

			if(response !== null){

				for(var i=0; i<response.length; i++) {

// if the comment number comes out as null in the query, pass "0" so that it isn't blank
				var commentAmount = null;
				if(response[i].comments == null) {
					commentAmount = "0";
				} else {
					commentAmount = response[i].comments;
				}

					loopPosts.push(
						<RB.ListGroupItem href={"/post/" + response[i].idposts} header={response[i].title}>
						Submitted by {response[i].idusers} | Comments <b>({commentAmount})</b>
						</RB.ListGroupItem>
						);
				}

			} else {
			loopPosts = <div>No More Posts</div>;
			}

       this.setState({posts: loopPosts});
		}.bind(this));
	}


  	handleSelect(eventKey) {
    	this.setState({
     	currentPage: eventKey
    });
    	this.getPosts(eventKey);
  }


	componentDidMount() {
		this.getPosts(this.state.currentPage);
  }

	render() {
		return (
			<RB.Row>
			<RB.ListGroup>

			 {this.state.posts}

			</RB.ListGroup>
			<RB.Pagination next prev items={this.state.numberOfPages} maxButtons={5} onSelect={this.handleSelect.bind(this)} activePage={this.state.currentPage} />
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


