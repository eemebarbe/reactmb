
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
});


var ProfileOptions = React.createClass({
	render: function(){
		return (

	      		<h4>Preferences</h4>
			);
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

var ProfilePage = React.createClass({
	render: function(){
		return (
			<RB.Grid>
			<Header />
			<ProfileOptions />
			<Footer />
			</RB.Grid>
			);
	}
});


ReactDOM.render(<ProfilePage />, document.getElementById('content'));