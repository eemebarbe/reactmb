import * as RB from 'react-bootstrap';
import * as formatting from './header.jsx';


class SubmitForm extends React.Component {
	render() {
		return (
				<div>
	      		<h4>Title</h4>
	        	<RB.FormGroup>        	
	        	<RB.FormControl type="text"/>
	        	</RB.FormGroup>
	        	<h4>Content</h4>
	        	<RB.FormGroup>        	
	        	<RB.FormControl componentClass="textarea" type="text"/>
	        	</RB.FormGroup>
	        	<RB.ButtonGroup>
				<RB.Button>Submit</RB.Button>
				</RB.ButtonGroup>
	        	</div>
			);
	}
}


class SubmitPage extends React.Component {
	render() {
		return (
			<RB.Grid>
			<formatting.Header />
			<SubmitForm />
			</RB.Grid>
			);
	}
}


ReactDOM.render(<SubmitPage />, document.getElementById('content'));

