import React from 'react';
import ReactDOM from 'react-dom';
import * as RB from 'react-bootstrap';
import $ from 'jquery';
import * as formatting from './header.jsx';


class SubmitForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: []
        };
    }

    // submits post to database
    postArticle() {
        const articleData = {
            title: ReactDOM.findDOMNode(this.refs.title).value,
            article: ReactDOM.findDOMNode(this.refs.article).value,
            idusers: window.user
        };
        $.post('api/v1/newpost', articleData);
    }


    render() {
        return (
            <div>
		      		<h4>Title</h4>
		        	<RB.FormGroup>        	
		        		<RB.FormControl ref='title' type='text'/>
		        	</RB.FormGroup>
		        	<h4>Content</h4>
		        	<RB.FormGroup>        	
		        		<RB.FormControl ref='article' componentClass='textarea' type='text'/>
		        	</RB.FormGroup>
		        	<RB.ButtonGroup>
						<RB.Button onClick={this.postArticle.bind(this)} href='./'>Submit</RB.Button>
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
