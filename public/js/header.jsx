var RB = ReactBootstrap;

export class Header extends React.Component {
	render() {
		return (
			<div>

			<RB.Row>
			<RB.PageHeader>
  				Example page header <small>Subtext for header</small>
			</RB.PageHeader>
			  	<RB.Navbar>
  				<RB.Nav>
  				      <RB.NavItem eventKey={1} href="#">Links</RB.NavItem>
				      <RB.NavItem eventKey={2} href="#">Links</RB.NavItem>
				      <RB.NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
				        <RB.MenuItem eventKey={3.1}>Action</RB.MenuItem>
				        <RB.MenuItem eventKey={3.2}>Another action</RB.MenuItem>
				        <RB.MenuItem eventKey={3.3}>Something else here</RB.MenuItem>
				        <RB.MenuItem divider />
				        <RB.MenuItem eventKey={3.3}>Separated link</RB.MenuItem>
				      </RB.NavDropdown>
				</RB.Nav>
				<RB.Navbar.Form pullRight>
				<RB.ButtonGroup>
				      <RB.Button onClick={this.signIn.bind(this)}>Sign In</RB.Button>
				</RB.ButtonGroup>
				</RB.Navbar.Form>
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
	        	<RB.FormControl type="text" placeholder="choose a username" />
	        	</RB.FormGroup>
	        	<RB.FormGroup>        	
	        	<RB.FormControl type="text" placeholder="password" />
	        	</RB.FormGroup>
	        	<RB.FormGroup>        	
	        	<RB.FormControl type="text" placeholder="verify password" />
	        	</RB.FormGroup>
	        	<RB.FormGroup>        	
	        	<RB.FormControl type="text" placeholder="email" />
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
        	<RB.Button>Cancel</RB.Button>
        	<RB.Button bsStyle="primary">Sign In</RB.Button>
      		</RB.Modal.Footer>
			</RB.Modal.Dialog>
			</div>
			);
	}
}



