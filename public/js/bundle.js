/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************************************!*\
  !*** ../reactmb/public/js/reactmb.jsx ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _header = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./header.jsx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var RB = ReactBootstrap;
	
	var SignIn = React.createClass({
		displayName: "SignIn",
	
		render: function render() {
			return React.createElement(
				"div",
				{ id: "signIn" },
				React.createElement(
					RB.Modal.Dialog,
					null,
					React.createElement(
						RB.Modal.Header,
						null,
						React.createElement(
							RB.Modal.Title,
							null,
							"Enter your credentials"
						)
					),
					React.createElement(
						RB.Modal.Body,
						null,
						React.createElement(
							RB.Row,
							null,
							React.createElement(
								RB.Col,
								{ sm: 6 },
								React.createElement(
									"h4",
									null,
									"Sign Up"
								),
								React.createElement(
									RB.FormGroup,
									null,
									React.createElement(RB.FormControl, { type: "text", placeholder: "choose a username" })
								),
								React.createElement(
									RB.FormGroup,
									null,
									React.createElement(RB.FormControl, { type: "text", placeholder: "password" })
								),
								React.createElement(
									RB.FormGroup,
									null,
									React.createElement(RB.FormControl, { type: "text", placeholder: "verify password" })
								),
								React.createElement(
									RB.FormGroup,
									null,
									React.createElement(RB.FormControl, { type: "text", placeholder: "email" })
								)
							),
							React.createElement(
								RB.Col,
								{ sm: 6 },
								React.createElement(
									"h4",
									null,
									"Sign In"
								),
								React.createElement(
									RB.FormGroup,
									null,
									React.createElement(RB.FormControl, { type: "text", placeholder: "username" })
								),
								React.createElement(
									RB.FormGroup,
									null,
									React.createElement(RB.FormControl, { type: "text", placeholder: "password" })
								)
							)
						)
					),
					React.createElement(
						RB.Modal.Footer,
						null,
						React.createElement(
							RB.Button,
							null,
							"Cancel"
						),
						React.createElement(
							RB.Button,
							{ bsStyle: "primary" },
							"Sign In"
						)
					)
				)
			);
		}
	});
	
	var SubmissionList = React.createClass({
		displayName: "SubmissionList",
	
		render: function render() {
			return React.createElement(
				RB.Row,
				null,
				React.createElement(
					RB.ListGroup,
					null,
					React.createElement(
						RB.ListGroupItem,
						{ header: "Fuck" },
						"Cras justo odio"
					),
					React.createElement(
						RB.ListGroupItem,
						{ header: "Mayo" },
						"Dapibus ac facilisis ine"
					),
					React.createElement(
						RB.ListGroupItem,
						{ header: "It's all in" },
						"Morbi leo risus"
					),
					React.createElement(
						RB.ListGroupItem,
						{ header: "How is the sky" },
						"Porta ac consectetur ac"
					),
					React.createElement(
						RB.ListGroupItem,
						{ header: "Too many bananas" },
						"Vestibulum at eros"
					)
				),
				React.createElement(RB.Pagination, { next: true, prev: true, items: 5, maxButtons: 5, activePage: 2 })
			);
		}
	});
	
	var SignUpForm = React.createClass({
		displayName: "SignUpForm",
	
		render: function render() {
			return React.createElement(
				RB.Row,
				null,
				React.createElement(RB.Form, null)
			);
		}
	});
	
	var FrontPage = React.createClass({
		displayName: "FrontPage",
	
		render: function render() {
			return React.createElement(
				RB.Grid,
				null,
				React.createElement(Header, null),
				React.createElement(SubmissionList, null),
				React.createElement(_header.Footer, null)
			);
		}
	});
	
	ReactDOM.render(React.createElement(FrontPage, null), document.getElementById('content'));

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map