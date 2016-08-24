webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactBootstrap = __webpack_require__(159);

	var RB = _interopRequireWildcard(_reactBootstrap);

	var _jquery = __webpack_require__(412);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _header = __webpack_require__(413);

	var formatting = _interopRequireWildcard(_header);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SubmissionList = function (_React$Component) {
		_inherits(SubmissionList, _React$Component);

		function SubmissionList(props) {
			_classCallCheck(this, SubmissionList);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SubmissionList).call(this, props));

			_this.state = { posts: [] };
			return _this;
		}

		_createClass(SubmissionList, [{
			key: 'getPosts',
			value: function getPosts() {
				var loopPosts = [];
				_jquery2.default.get("api/v1/posts/", function (response) {
					for (var i = 0; i < response.length; i++) {
						loopPosts.push(_react2.default.createElement(
							RB.ListGroupItem,
							{ href: "/post/" + response[i].idposts, header: response[i].title },
							'Submitted by ',
							response[i].idusers,
							' | Comments ',
							_react2.default.createElement(
								'b',
								null,
								'(104)'
							)
						));
					}
					this.setState({ posts: loopPosts });
				}.bind(this));
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.getPosts();
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					RB.Row,
					null,
					_react2.default.createElement(
						RB.ListGroup,
						null,
						this.state.posts
					),
					_react2.default.createElement(RB.Pagination, { next: true, prev: true, items: 5, maxButtons: 5, activePage: 2 })
				);
			}
		}]);

		return SubmissionList;
	}(_react2.default.Component);

	var FrontPage = function (_React$Component2) {
		_inherits(FrontPage, _React$Component2);

		function FrontPage() {
			_classCallCheck(this, FrontPage);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(FrontPage).apply(this, arguments));
		}

		_createClass(FrontPage, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					RB.Grid,
					null,
					_react2.default.createElement(formatting.Header, null),
					_react2.default.createElement(SubmissionList, null)
				);
			}
		}]);

		return FrontPage;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(FrontPage, null), document.getElementById('content'));

/***/ }
]);