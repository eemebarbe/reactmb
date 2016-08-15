import React from 'react';
import ReactDOM from 'react-dom';
import * as RB from 'react-bootstrap';
import $ from "jquery";
import * as formatting from './header.jsx';


class ProfileOptions extends React.Component {
	render() {
		return (

	      		<h4>Preferences</h4>
			);
	}
}

class ProfilePage extends React.Component {
	render() {
		return (
			<RB.Grid>
			<formatting.Header />
			<ProfileOptions />

			</RB.Grid>
			);
	}
}


ReactDOM.render(<ProfilePage />, document.getElementById('content'));