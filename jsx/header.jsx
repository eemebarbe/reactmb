import React from 'react';
import ReactDOM from 'react-dom';
import * as RB from 'react-bootstrap';
import $ from 'jquery';

//pop-up modal used for signing in or creating a new account
export class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signUpAlert: null,
            signInAlert: null
        };
    }
    //function used to submit new users
    signUp() {
        const self = this;
        const signUpData = {
            username: ReactDOM.findDOMNode(this.refs.username).value,
            password: ReactDOM.findDOMNode(this.refs.password).value,
            passwordVerify: ReactDOM.findDOMNode(this.refs.passwordVerify).value,
            email: ReactDOM.findDOMNode(this.refs.email).value
        };

        // verify all sign-up data before passing it to the server
        if (!signUpData.username) {
            this.setState({
                signUpAlert: 'Please enter a username!'
            });
        } else if (!signUpData.password) {
            this.setState({
                signUpAlert: 'Please enter a password!'
            });
        } else if (signUpData.password !== signUpData.passwordVerify) {
            this.setState({
                signUpAlert: 'Password entries don\'t match!'
            });
        } else if (!signUpData.email) {
            this.setState({
                signUpAlert: 'Please enter your email address!'
            });
        } else if (signUpData.email !== null || signUpData.email !== '') {
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(signUpData.email)) {
                this.setState({
                    signUpAlert: 'Not a valid email address!'
                });
            // if all form data passes, submit to the database
            } else {
                $.ajax({
                    type: 'POST',
                    url: '/api/v1/newuser',
                    data: signUpData,
                    success: () => {
                        $.post('/loginAuth', signUpData, function() {
                            window.location.href = '../';
                        });
                    },
                    error: () => {
                        self.setState({
                            signUpAlert: 'Either this email or this username is already in use!'
                        });
                    }
                });
            }
        }
    }

    // function used to pass user sign-in data through authentication and ultimately log the user in
    signIn() {
        const signInData = {
            username: ReactDOM.findDOMNode(this.refs.logInUser).value,
            password: ReactDOM.findDOMNode(this.refs.logInPass).value
        };

        $.ajax({
            type: 'POST',
            url: '/loginAuth',
            data: signInData,
            dataType: 'json',
            success: () => {
                window.location.href = '../';
            },
            error: () => {
                this.setState({
                    signInAlert: 'Username or password was entered incorrectly.'
                });
            }
        });
    }

    render() {
        // alert box for sign-up error
        const signUpPopUp = (
            <RB.Popover>
	    		{this.state.signUpAlert}
	  		</RB.Popover>
        );
        // alert box for sign-in error
        const signInPopUp = (
            <RB.Popover>
	    		{this.state.signInAlert}
	  		</RB.Popover>
        );

        return (
            <div>
				<RB.Modal show={this.props.showModal} onHide={this.props.close}>
				<RB.Modal.Header closeButton>
	        	<RB.Modal.Title>Enter your credentials {this.props.showModal}</RB.Modal.Title>
	      		</RB.Modal.Header>
	      		<RB.Modal.Body>
	      		<RB.Row>
		      		<RB.Col sm={6}>
			      		<h4>Sign Up</h4>
			        	<RB.FormGroup>        	
			        		<RB.FormControl ref='username' type='text' placeholder='choose a username' />
			        	</RB.FormGroup>
			        	<RB.FormGroup>        	
			        		<RB.FormControl ref='password' type='password' placeholder='password' />
			        	</RB.FormGroup>
			        	<RB.FormGroup>        	
			        		<RB.FormControl ref='passwordVerify' type='password' placeholder='verify password' />
			        	</RB.FormGroup>
			        	<RB.FormGroup>        	
			        		<RB.FormControl ref='email' type='text' placeholder='email' />
			        	</RB.FormGroup>
		        	</RB.Col>
		        	<RB.Col sm={6}>
			        	<h4>Sign In</h4>
			        	<RB.Form>
				        	<RB.FormGroup>        	
				        		<RB.FormControl type='text' ref='logInUser' placeholder='username' name='username' />
				        	</RB.FormGroup>
				        	<RB.FormGroup>        	
				        		<RB.FormControl type='password' ref='logInPass' placeholder='password' name='password' />
				        	</RB.FormGroup>
			        	</RB.Form>
		        	</RB.Col>
	        	</RB.Row>
	      		</RB.Modal.Body>

	      		<RB.Modal.Footer>
			      	<RB.Col sm={6}>
			      		<RB.OverlayTrigger trigger={this.state.signUpAlert !== null ? 'click' : null} placement='left' overlay={signUpPopUp}>
			      			<RB.Button onClick={this.signUp.bind(this)}>Sign Up</RB.Button>
    					</RB.OverlayTrigger>
		      		</RB.Col>
			      	<RB.Col sm={6}>
			      		<RB.OverlayTrigger trigger={this.state.signInAlert !== null ? 'click' : null} placement='left' overlay={signInPopUp}>
		        			<RB.Button bsStyle='primary' onClick={this.signIn.bind(this)}>Sign In</RB.Button>
	    				</RB.OverlayTrigger>
		        	</RB.Col>
	      		</RB.Modal.Footer>
				</RB.Modal>
			</div>
        );
    }
}


export class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }
    // when showModal is set to false, no modal is shown 
    close() {
        this.setState({
            showModal: false
        });
    }
    // when showModal is set to true, modal is shown
    open() {
        this.setState({
            showModal: true
        });
    }

    render() {
        var authRender = null;
        // if user is not signed in
        if (window.user === '') {
            authRender =
                <div>
					<RB.Navbar.Form pullRight>
						<RB.ButtonGroup>
					    	<RB.Button onClick={this.open.bind(this)}>Sign In</RB.Button>
						</RB.ButtonGroup>
					</RB.Navbar.Form>
				</div>;
        // if user is signed in
        } else {
            authRender =
                <div>
					<RB.Navbar.Form pullRight>
						<RB.ButtonGroup>
					    <RB.Button href='/logout'>Sign Out</RB.Button>
						</RB.ButtonGroup>
					</RB.Navbar.Form>
					<RB.Nav pullRight>
						<RB.NavItem eventKey={3} href='../submit'>Submit</RB.NavItem>
					    <RB.NavItem eventKey={4} href='../profile'>Profile</RB.NavItem>
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
						    	<a href='/'>ReactMB</a>
						    </RB.Navbar.Brand>
					    </RB.Navbar.Header>
						{authRender}
		  			</RB.Navbar>
				</RB.Row>

				<Modal showModal={this.state.showModal} onHide={this.close.bind(this)} close={this.close.bind(this)}/>
			</div>
        );
    }
}
