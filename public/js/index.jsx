import * as formatting from './header.jsx';

var RB = ReactBootstrap;

class SubmissionList extends React.Component {
	render() {
		return (
<RB.Row>
<RB.ListGroup>
  <RB.ListGroupItem header="Duck">Cras justo odio</RB.ListGroupItem>
  <RB.ListGroupItem header="Mayo">Dapibus ac facilisis ine</RB.ListGroupItem>
  <RB.ListGroupItem header="It's all in">Morbi leo risus</RB.ListGroupItem>
  <RB.ListGroupItem header="How is the sky">Porta ac consectetur ac</RB.ListGroupItem>
  <RB.ListGroupItem header="Too many bananas">Vestibulum at eros</RB.ListGroupItem>
</RB.ListGroup>
<RB.Pagination next prev items={5} maxButtons={5} activePage={2}></RB.Pagination>
</RB.Row>

			);
	}
}

var FrontPage = React.createClass({
	render: function(){
		return (
			<RB.Grid>
			<formatting.Header />
			<SubmissionList />

			</RB.Grid>
			);
	}
});

ReactDOM.render(<FrontPage />, document.getElementById('content'));


