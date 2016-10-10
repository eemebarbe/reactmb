webpackJsonp([1],[
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

	var PostDisplay = function (_React$Component) {
		_inherits(PostDisplay, _React$Component);

		function PostDisplay(props) {
			_classCallCheck(this, PostDisplay);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PostDisplay).call(this, props));

			_this.state = { comments: window.loopComments,
				numberOfComments: window.loopComments.length,
				commentSubmitted: false };
			return _this;
		}

		_createClass(PostDisplay, [{
			key: 'postComment',
			value: function postComment() {
				var commentData = {
					comment: _reactDom2.default.findDOMNode(this.refs.submitComment).value,
					idposts: window.idposts,
					idusers: window.user
				};

				_jquery2.default.post("../api/v1/newcomment", commentData, function (response) {
					this.setState({ comments: this.state.comments.concat(commentData) });
				}.bind(this));

				this.setState({ commentSubmitted: true });
			}
		}, {
			key: 'deleteComment',
			value: function deleteComment(comment, commentIndex) {
				var deletedComment = { comment: comment };
				console.log(this.state.comments);
				_jquery2.default.post('../api/v1/deletecomment/', deletedComment, function () {
					this.setState({
						comments: this.state.comments.splice(commentIndex, 1) });
				}.bind(this));
				console.log(this.state.comments);
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				var authRender = null;
				if (window.user !== "" && this.state.commentSubmitted == false) {
					authRender = _react2.default.createElement(
						RB.Row,
						null,
						_react2.default.createElement(
							'h4',
							null,
							this.state.numberOfComments,
							' Comments'
						),
						_react2.default.createElement(
							RB.FormGroup,
							null,
							_react2.default.createElement(RB.FormControl, { ref: 'submitComment', componentClass: 'textarea', type: 'text' })
						),
						_react2.default.createElement(
							RB.ButtonGroup,
							null,
							_react2.default.createElement(
								RB.Button,
								{ onClick: this.postComment.bind(this) },
								'Submit'
							)
						)
					);
				} else if (window.user !== "" && this.state.commentSubmitted == true) {
					authRender = _react2.default.createElement(
						RB.Row,
						null,
						_react2.default.createElement(
							'h4',
							null,
							'Thanks!'
						)
					);
				} else {
					authRender = _react2.default.createElement(
						RB.Row,
						null,
						_react2.default.createElement(
							'h4',
							null,
							this.state.numberOfComments,
							' Comments ',
							_react2.default.createElement(
								'b',
								null,
								'(Please log in to comment!)'
							)
						)
					);
				}

				var finalComments = this.state.comments.map(function (commentsEntered) {
					return _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							RB.Row,
							{ className: 'commentRow', onClick: _this2.deleteComment.bind(_this2, commentsEntered.idcomments, _this2.state.comments.indexOf(commentsEntered)) },
							_react2.default.createElement(
								RB.Col,
								{ xs: 3, sm: 2 },
								_react2.default.createElement(RB.Image, { className: 'commentImg', src: 'https://x.myspacecdn.com/new/common/images/user.png', responsive: true, circle: true })
							),
							_react2.default.createElement(
								RB.Col,
								{ xs: 9, sm: 10 },
								_react2.default.createElement(
									RB.Panel,
									{ className: 'commentPanel', header: commentsEntered.iduser },
									commentsEntered.comment,
									_react2.default.createElement(RB.Glyphicon, { glyph: 'glyphicon glyphicon-remove' })
								)
							)
						)
					);
				});

				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						RB.Row,
						null,
						_react2.default.createElement(
							'h2',
							null,
							window.title
						),
						_react2.default.createElement(
							'div',
							null,
							window.article
						)
					),
					authRender,
					_react2.default.createElement(
						RB.Row,
						null,
						finalComments
					)
				);
			}
		}]);

		return PostDisplay;
	}(_react2.default.Component);

	var PostPage = function (_React$Component2) {
		_inherits(PostPage, _React$Component2);

		function PostPage() {
			_classCallCheck(this, PostPage);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(PostPage).apply(this, arguments));
		}

		_createClass(PostPage, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					RB.Grid,
					null,
					_react2.default.createElement(formatting.Header, null),
					_react2.default.createElement(PostDisplay, null)
				);
			}
		}]);

		return PostPage;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(PostPage, null), document.getElementById('content'));

/***/ }
]);