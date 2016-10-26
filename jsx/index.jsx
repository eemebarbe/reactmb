import React from 'react';
import ReactDOM from 'react-dom';
import * as RB from 'react-bootstrap';
import $ from 'jquery';
import * as formatting from './header.jsx';

// list of posts that appears on index
class SubmissionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            currentPage: 1,
            numberOfPages: null
        };
    }

    // populates the list of posts. function passes a 'page' argument to the query so when a user selects a page, the correct range is displayed
    getPosts(page) {
        var loopPosts = [];
        var pageRange = 3;
        // get the total number of posts so the pagination displays the correct number of pages
        $.get('/api/v1/postcount/', function(response) {
            var math = Math.ceil(response[0].count / pageRange);
            this.setState({
                numberOfPages: math
            });
        }.bind(this));
        // page value is passed to a database query and the appropriate range of posts are returned
        $.get('/api/v1/postrange?page=' + page + '&pageRange=' + pageRange, function(response) {
            if (response !== null) {
                for (var i = 0; i < response.length; i++) {
                    // if the comment amount comes out as null in the query, pass '0' to avoid an error
                    var commentAmount = null;
                    if (response[i].comments == null) {
                        commentAmount = '0';
                    } else {
                        commentAmount = response[i].comments;
                    }
                    loopPosts.push(
                        <RB.ListGroupItem href={'/post/' + response[i].idposts} header={response[i].title}>
								Submitted by {response[i].idusers} | Comments <b>({commentAmount})</b>
							</RB.ListGroupItem>
                    );
                }
            } else {
                loopPosts = <div>No More Posts</div>;
            }
            this.setState({
                posts: loopPosts
            });
        }.bind(this));
    }

    // eventKey is a react-bootstrap value that passes along the selected page from the pagination component.
    // this function sets the currentPage to the eventKey value and also triggers the getPosts function, passing eventKey along
    handleSelect(eventKey) {
        this.setState({
            currentPage: eventKey
        });
        this.getPosts(eventKey);
    }

    // on page load, trigger getPosts
    componentDidMount() {
        this.getPosts(this.state.currentPage);
    }

    render() {
        return (
            <RB.Row>
				<RB.ListGroup
					{this.state.posts}
				</RB.ListGroup>
				<RB.Pagination next prev first last items={this.state.numberOfPages} maxButtons={5} onSelect={this.handleSelect.bind(this)} activePage={this.state.currentPage} />
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