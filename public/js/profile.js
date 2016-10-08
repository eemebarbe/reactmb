webpackJsonp([2],[
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

	var ProfileOptions = function (_React$Component) {
		_inherits(ProfileOptions, _React$Component);

		function ProfileOptions(props) {
			_classCallCheck(this, ProfileOptions);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProfileOptions).call(this, props));

			_this.state = { posts: window.posts };
			return _this;
		}

		_createClass(ProfileOptions, [{
			key: 'uploadImage',
			value: function uploadImage() {}
		}, {
			key: 'deletePost',
			value: function deletePost(post, postIndex) {
				var deletedPost = { post: post };
				_jquery2.default.post('/api/v1/deletepost/', deletedPost, function () {
					this.setState({
						posts: this.state.posts.splice(postIndex, 1) });
				}.bind(this));
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				var finalPosts = this.state.posts.map(function (posts) {
					return _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							RB.Row,
							{ className: 'postRow', onClick: _this2.deletePost.bind(null, posts.idposts, _this2.state.posts.indexOf(posts)) },
							_react2.default.createElement(
								RB.Panel,
								null,
								posts.title,
								posts.postdate,
								_react2.default.createElement(RB.Glyphicon, { glyph: 'glyphicon glyphicon-remove' })
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
							'h4',
							null,
							'Profile Image'
						),
						_react2.default.createElement(RB.Image, { className: 'userImg', src: 'https://x.myspacecdn.com/new/common/images/user.png', responsive: true, circle: true }),
						_react2.default.createElement(
							RB.FormGroup,
							{ id: 'formControlsFile' },
							_react2.default.createElement(RB.FormControl, { type: 'file' })
						),
						_react2.default.createElement(
							RB.Button,
							{ onClick: this.uploadImage.bind(this) },
							'Save'
						)
					),
					_react2.default.createElement(
						RB.Row,
						null,
						_react2.default.createElement(
							'h4',
							null,
							'Posts'
						),
						finalPosts
					)
				);
			}
		}]);

		return ProfileOptions;
	}(_react2.default.Component);

	var ProfilePage = function (_React$Component2) {
		_inherits(ProfilePage, _React$Component2);

		function ProfilePage() {
			_classCallCheck(this, ProfilePage);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(ProfilePage).apply(this, arguments));
		}

		_createClass(ProfilePage, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					RB.Grid,
					null,
					_react2.default.createElement(formatting.Header, null),
					_react2.default.createElement(ProfileOptions, null)
				);
			}
		}]);

		return ProfilePage;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(ProfilePage, null), document.getElementById('content'));

/***/ }
]);