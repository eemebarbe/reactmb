import React from 'react';
import ReactDOM from 'react-dom';
import * as RB from 'react-bootstrap';
import $ from "jquery";
import * as formatting from './header.jsx';


class PostDisplay extends React.Component {

	constructor(props) {
    super(props);
    this.state = { title : [], article : [] };
  }

		render() {
		return (

			<div>
			<h2>Dummy Title</h2>
			<div>Words words words Words words words
			 Words words words Words words words Words words words</div>
			</div>

			);
	}
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
