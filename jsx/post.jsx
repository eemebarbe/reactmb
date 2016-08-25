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
					<RB.Panel header={ window.loopComments[i].iduser }>
		      		{ window.loopComments[i].comment }
		    		</RB.Panel>
					);
       this.setState({comments: finalComments, numberOfComments: loopComments.length});
		}
	}

	componentDidMount() {
		this.getComments();
	}

		render() {
		return (

			<div>
			<RB.Row>
				<h2>{ window.title }</h2>
				<div>{ window.article }</div>
			</RB.Row>
			<RB.Row>
				<h4>{this.state.numberOfComments} Comments</h4>
				<RB.FormGroup>        	
		        <RB.FormControl ref="submitComment" componentClass="textarea" type="text"/>
		        </RB.FormGroup>
		        <RB.ButtonGroup>
				<RB.Button>Submit</RB.Button>
				</RB.ButtonGroup>
			</RB.Row>
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