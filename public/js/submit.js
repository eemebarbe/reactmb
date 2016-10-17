webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactBootstrap = __webpack_require__(172);

	var RB = _interopRequireWildcard(_reactBootstrap);

	var _jquery = __webpack_require__(425);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _header = __webpack_require__(426);

	var formatting = _interopRequireWildcard(_header);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SubmitForm = function (_React$Component) {
		_inherits(SubmitForm, _React$Component);

		function SubmitForm(props) {
			_classCallCheck(this, SubmitForm);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SubmitForm).call(this, props));

			_this.state = { article: [] };
			return _this;
		}

		_createClass(SubmitForm, [{
			key: 'postArticle',
			value: function postArticle() {

				var articleData = {
					title: _reactDom2.default.findDOMNode(this.refs.title).value,
					article: _reactDom2.default.findDOMNode(this.refs.article).value,
					idusers: window.user
				};

				_jquery2.default.post('api/v1/newpost', articleData);
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h4',
						null,
						'Title'
					),
					_react2.default.createElement(
						RB.FormGroup,
						null,
						_react2.default.createElement(RB.FormControl, { ref: 'title', type: 'text' })
					),
					_react2.default.createElement(
						'h4',
						null,
						'Content'
					),
					_react2.default.createElement(
						RB.FormGroup,
						null,
						_react2.default.createElement(RB.FormControl, { ref: 'article', componentClass: 'textarea', type: 'text' })
					),
					_react2.default.createElement(
						RB.ButtonGroup,
						null,
						_react2.default.createElement(
							RB.Button,
							{ onClick: this.postArticle.bind(this), href: './' },
							'Submit'
						)
					)
				);
			}
		}]);

		return SubmitForm;
	}(_react2.default.Component);

	var SubmitPage = function (_React$Component2) {
		_inherits(SubmitPage, _React$Component2);

		function SubmitPage() {
			_classCallCheck(this, SubmitPage);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(SubmitPage).apply(this, arguments));
		}

		_createClass(SubmitPage, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					RB.Grid,
					null,
					_react2.default.createElement(formatting.Header, null),
					_react2.default.createElement(SubmitForm, null)
				);
			}
		}]);

		return SubmitPage;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(SubmitPage, null), document.getElementById('content'));

/***/ }
]);