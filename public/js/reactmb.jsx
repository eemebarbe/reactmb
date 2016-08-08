
var RB = ReactBootstrap;

var SignIn = React.createClass({
	render: function(){
		return (
			<div id="signIn">
			<RB.Modal.Dialog>
			      <RB.Modal.Header>
        			<RB.Modal.Title>Enter your credentials</RB.Modal.Title>
      			  </RB.Modal.Header>

      		<RB.Modal.Body>
      		<RB.Row>
	      		<RB.Col md={6}>
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
	        	<RB.Col md={6}>
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
});


var Header = React.createClass({
	render: function(){
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
				      <RB.Button onClick={this.signIn}>Sign In</RB.Button>
				</RB.ButtonGroup>
				</RB.Navbar.Form>
  				</RB.Navbar>
			</RB.Row>

			
			<SignIn />

			</div>

			);
	},

	signUp: function() {
		window.location.href='../signUp/';
	},
	signIn: function() {
		$("#signIn").show();
	}

});

var SubmissionList = React.createClass({
	render: function(){
		return (
<RB.Row>
<RB.ListGroup>
  <RB.ListGroupItem header="Fuck">Cras justo odio</RB.ListGroupItem>
  <RB.ListGroupItem header="Mayo">Dapibus ac facilisis ine</RB.ListGroupItem>
  <RB.ListGroupItem header="It's all in">Morbi leo risus</RB.ListGroupItem>
  <RB.ListGroupItem header="How is the sky">Porta ac consectetur ac</RB.ListGroupItem>
  <RB.ListGroupItem header="Too many bananas">Vestibulum at eros</RB.ListGroupItem>
</RB.ListGroup>
<RB.Pagination next prev items={5} maxButtons={5} activePage={2}></RB.Pagination>
</RB.Row>

			);
	}
});


var Footer = React.createClass({
	render: function(){
		return (
			<RB.Row>
			<RB.Navbar fixedBottom>
			Footer
			</RB.Navbar>
			</RB.Row>
			);
	}
});

var SignUpForm = React.createClass({
	render: function(){
		return (
			<RB.Row>
			<RB.Form>
			</RB.Form>
			</RB.Row>
			);
	}
});

var FrontPage = React.createClass({
	render: function(){
		return (
			<RB.Grid>
			<Header />
			<SubmissionList />
			<Footer />
			</RB.Grid>
			);
	}
});


ReactDOM.render(<FrontPage />, document.getElementById('content'));

