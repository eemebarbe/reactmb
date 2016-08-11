export class Header {}
export class Footer {}

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
