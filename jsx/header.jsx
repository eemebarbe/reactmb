import React from 'react';
import ReactDOM from 'react-dom';
import * as RB from 'react-bootstrap';
import $ from "jquery";

export class Header extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = { showModal: false };
  }

    close() {
    this.setState({ showModal: false });
  }

  	open() {
    this.setState({ showModal: true });
  }

  signUp() {
  	var signUpData = {
  		username : ReactDOM.findDOMNode(this.refs.username).value,
  		password : ReactDOM.findDOMNode(this.refs.password).value,
  		passwordVerify : ReactDOM.findDOMNode(this.refs.passwordVerify).value,
  		email : ReactDOM.findDOMNode(this.refs.email).value
  		};

  	if(signUpData.password != signUpData.passwordVerify) {
  		alert("passwords dont match");
  	} else {
    	$.post("/api/v1/newuser", signUpData);
    }

  }

	render() {

	var authRender = null;
	if( window.user == "" ) { 
 	authRender = 
 				<div>
  				<RB.Navbar.Form pullRight>
				<RB.ButtonGroup>
				      <RB.Button onClick={this.open.bind(this)}>Sign In</RB.Button>
				</RB.ButtonGroup>
				</RB.Navbar.Form>
				</div>;
  			} else {
 	authRender = 
 				<div>
  				<RB.Navbar.Form pullRight>
				<RB.ButtonGroup>
				      <RB.Button href="/logout">Sign Out</RB.Button>
				</RB.ButtonGroup>
				</RB.Navbar.Form>
  				<RB.Nav pullRight>
  				      <RB.NavItem eventKey={3} href="../submit">Submit</RB.NavItem>
				      <RB.NavItem eventKey={4} href="../profile">Profile</RB.NavItem>
				</RB.Nav>
				</div>;
  			}

		return (
			<div>

			<RB.Row>
			<RB.PageHeader>
  				ReactMB <small>Built on React and Node</small>
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
					{authRender}
  				</RB.Navbar>
			</RB.Row>



			<RB.Modal show={this.state.showModal} onHide={this.close.bind(this)}>
			      <RB.Modal.Header closeButton>
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
	        	<RB.FormControl ref="password" type="password" placeholder="password" />
	        	</RB.FormGroup>
	        	<RB.FormGroup>        	
	        	<RB.FormControl ref="passwordVerify" type="password" placeholder="verify password" />
	        	</RB.FormGroup>
	        	<RB.FormGroup>        	
	        	<RB.FormControl ref="email" type="text" placeholder="email" />
	        	</RB.FormGroup>
	        	</RB.Col>
	        	<RB.Col sm={6}>
	        	<h4>Sign In</h4>
	        	<RB.Form id="signInForm" action="/loginAuth" method="get">
	        	<RB.FormGroup>        	
	        	<RB.FormControl type="text" placeholder="username" name="username" />
	        	</RB.FormGroup>
	        	<RB.FormGroup>        	
	        	<RB.FormControl type="password" placeholder="password" name="password" />
	        	</RB.FormGroup>
	        	</RB.Form>
	        	</RB.Col>
        	</RB.Row>
      		</RB.Modal.Body>

      		<RB.Modal.Footer>
	      	<RB.Col sm={6}>
      		<RB.Button onClick={this.signUp.bind(this)}>Sign Up</RB.Button>
      		</RB.Col>
	      	<RB.Col sm={6}>
        	<RB.Button bsStyle="primary" type="submit" form="signInForm">Sign In</RB.Button>
        	</RB.Col>
      		</RB.Modal.Footer>
			</RB.Modal>

			</div>
		);}

}





