import React from 'react';
import ReactDOM from 'react-dom';
import * as RB from 'react-bootstrap';
import $ from "jquery";

export class Header extends React.Component {
	render() {
		return (
			<div>

			<RB.Row>
			<RB.PageHeader>
  				Example page header <small>Subtext for header</small>
			</RB.PageHeader>
			  	<RB.Navbar>
		    <RB.Navbar.Header>
		      <RB.Navbar.Brand>
		        <a href="/">ReactMB</a>
		      </RB.Navbar.Brand>
		    </RB.Navbar.Header>
  				<RB.Nav>
  				      <RB.NavItem eventKey={1} href="#">Popular</RB.NavItem>
				      <RB.NavItem eventKey={2} href="#">Newest</RB.NavItem>
				</RB.Nav>
				<RB.Navbar.Form pullRight>
				<RB.ButtonGroup>
				      <RB.Button onClick={this.signIn.bind(this)}>Sign In</RB.Button>
				</RB.ButtonGroup>
				</RB.Navbar.Form>
  				<RB.Nav pullRight>
  				      <RB.NavItem eventKey={3} href="submit">Submit</RB.NavItem>
				      <RB.NavItem eventKey={4} href="profile">Profile</RB.NavItem>
				</RB.Nav>
  				</RB.Navbar>
			</RB.Row>

			
			<SignIn />

			</div>
		);}

  signIn() {
		$("#signIn").show();
  }
}


export class SignIn extends React.Component {
	render() {
		return (
			<div id="signIn">
			<RB.Modal.Dialog>
			      <RB.Modal.Header>
        			<RB.Modal.Title>Enter your credentials</RB.Modal.Title>
      			  </RB.Modal.Header>

      		<RB.Modal.Body>
      		<RB.Row>
	      		<RB.Col sm={6}>
	      		<h4>Sign Up</h4>
	        	<RB.FormGroup>        	
	        	<RB.FormControl ref="username" type="text" placeholder="choose a username" />
	        	</RB.FormGroup>
	        	<RB.FormGroup>        	
	        	<RB.FormControl ref="password" type="text" placeholder="password" />
	        	</RB.FormGroup>
	        	<RB.FormGroup>        	
	        	<RB.FormControl ref="passwordVerify" type="text" placeholder="verify password" />
	        	</RB.FormGroup>
	        	<RB.FormGroup>        	
	        	<RB.FormControl ref="email" type="text" placeholder="email" />
	        	</RB.FormGroup>
	        	</RB.Col>
	        	<RB.Col sm={6}>
	        	<h4>Sign In</h4>
	        	<RB.FormGroup>        	
	        	<RB.FormControl type="text" placeholder="username" />
	        	</RB.FormGroup>
	        	<RB.FormGroup>        	
	        	<RB.FormControl type="text" placeholder="password" />
	        	</RB.FormGroup>
	        	</RB.Col>
        	</RB.Row>
      		</RB.Modal.Body>

      		<RB.Modal.Footer>
      		<RB.Button onClick={this.signUp.bind(this)}>Sign Up</RB.Button>
        	<RB.Button onClick={this.signInCancel.bind(this)}>Cancel</RB.Button>
        	<RB.Button bsStyle="primary">Sign In</RB.Button>
      		</RB.Modal.Footer>
			</RB.Modal.Dialog>
			</div>
			);}

  signInCancel() {
		$("#signIn").hide();
  }

  signUp() {
  	console.log(ReactDOM.findDOMNode(username).value);

  	var signUpData = [
  		{username : ReactDOM.findDOMNode(username).value},
  		{password : ReactDOM.findDOMNode(password).value},
  		{passwordVerify : ReactDOM.findDOMNode(passwordVerify).value},
  		{email : ReactDOM.findDOMNode(email).value}
  	];
  	console.log(signUpData);
    	$.post("/api/v1/newuser", {signUpData : signUpData});
  }

}



