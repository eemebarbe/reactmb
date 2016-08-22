import React from 'react';
import ReactDOM from 'react-dom';
import * as RB from 'react-bootstrap';
import $ from "jquery";
import * as formatting from './header.jsx';


class PostDisplay extends React.Component {

	constructor(props) {
    super(props);
  }

		render() {
		return (

			<div>
			<h2>{ window.title }</h2>
			<div>{ window.article }</div>
			<h4>Comments</h4>
			<div>{ window.loopComments }</div>
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
