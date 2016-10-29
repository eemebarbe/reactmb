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
        var pageRange = 3;
        var self = this;
        // get the total number of posts so the pagination displays the correct number of pages
        $.get('/api/v1/postcount/', (response) => {
            var math = Math.ceil(response[0].count / pageRange);
            this.setState({
                numberOfPages: math
            });
        });
        // page value is passed to a database query and the appropriate range of posts are returned
        $.get('/api/v1/postrange?page=' + page + '&pageRange=' + pageRange, (response) => {
            this.setState({
                posts: response
            });
        });
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
// loop through posts and render list
        if(this.state.posts !== null) {
            var self = this;
            var loopPosts = this.state.posts.map((postsEntered) => {
                return (
                <RB.ListGroupItem href={'/post/' + postsEntered.idposts} header={postsEntered.title}>
                        Submitted by {postsEntered.idusers} | Comments <b>({postsEntered.comments})</b>
                    </RB.ListGroupItem>
                );
            });
        } else {
            var loopPosts = <div>No more posts!</div>
        }

        return (
            <RB.Row>
				<RB.ListGroup>
					{loopPosts}
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