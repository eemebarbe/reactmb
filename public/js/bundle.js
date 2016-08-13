/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _header = __webpack_require__(1);

	var _header2 = _interopRequireDefault(_header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RB = ReactBootstrap;

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
						{ header: "Duck" },
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

	var FrontPage = React.createClass({
		displayName: "FrontPage",

		render: function render() {
			return React.createElement(
				RB.Grid,
				null,
				React.createElement(_header2.default, null),
				React.createElement(SubmissionList, null)
			);
		}
	});

	ReactDOM.render(React.createElement(FrontPage, null), document.getElementById('content'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RB = ReactBootstrap;

	var Header = function (_React$Component) {
		_inherits(Header, _React$Component);

		function Header() {
			_classCallCheck(this, Header);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
		}

		_createClass(Header, [{
			key: "render",
			value: function render() {
				return React.createElement(
					"div",
					null,
					React.createElement(
						RB.Row,
						null,
						React.createElement(
							RB.PageHeader,
							null,
							"Example page header ",
							React.createElement(
								"small",
								null,
								"Subtext for header"
							)
						),
						React.createElement(
							RB.Navbar,
							null,
							React.createElement(
								RB.Nav,
								null,
								React.createElement(
									RB.NavItem,
									{ eventKey: 1, href: "#" },
									"Links"
								),
								React.createElement(
									RB.NavItem,
									{ eventKey: 2, href: "#" },
									"Links"
								),
								React.createElement(
									RB.NavDropdown,
									{ eventKey: 3, title: "Dropdown", id: "basic-nav-dropdown" },
									React.createElement(
										RB.MenuItem,
										{ eventKey: 3.1 },
										"Action"
									),
									React.createElement(
										RB.MenuItem,
										{ eventKey: 3.2 },
										"Another action"
									),
									React.createElement(
										RB.MenuItem,
										{ eventKey: 3.3 },
										"Something else here"
									),
									React.createElement(RB.MenuItem, { divider: true }),
									React.createElement(
										RB.MenuItem,
										{ eventKey: 3.3 },
										"Separated link"
									)
								)
							),
							React.createElement(
								RB.Navbar.Form,
								{ pullRight: true },
								React.createElement(
									RB.ButtonGroup,
									null,
									React.createElement(
										RB.Button,
										{ onClick: this.signIn.bind(this) },
										"Sign In"
									)
								)
							)
						)
					),
					React.createElement(SignIn, null)
				);
			}
		}, {
			key: "signIn",
			value: function signIn() {
				$("#signIn").show();
			}
		}]);

		return Header;
	}(React.Component);

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

	exports.default = Header;

/***/ }
/******/ ]);