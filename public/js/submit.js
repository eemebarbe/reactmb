webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reactBootstrap = __webpack_require__(1);

	var RB = _interopRequireWildcard(_reactBootstrap);

	var _header = __webpack_require__(412);

	var formatting = _interopRequireWildcard(_header);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SubmitForm = function (_React$Component) {
		_inherits(SubmitForm, _React$Component);

		function SubmitForm() {
			_classCallCheck(this, SubmitForm);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(SubmitForm).apply(this, arguments));
		}

		_createClass(SubmitForm, [{
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					null,
					React.createElement(
						'h4',
						null,
						'Title'
					),
					React.createElement(
						RB.FormGroup,
						null,
						React.createElement(RB.FormControl, { type: 'text' })
					),
					React.createElement(
						'h4',
						null,
						'Content'
					),
					React.createElement(
						RB.FormGroup,
						null,
						React.createElement(RB.FormControl, { componentClass: 'textarea', type: 'text' })
					),
					React.createElement(
						RB.ButtonGroup,
						null,
						React.createElement(
							RB.Button,
							null,
							'Submit'
						)
					)
				);
			}
		}]);

		return SubmitForm;
	}(React.Component);

	var SubmitPage = function (_React$Component2) {
		_inherits(SubmitPage, _React$Component2);

		function SubmitPage() {
			_classCallCheck(this, SubmitPage);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(SubmitPage).apply(this, arguments));
		}

		_createClass(SubmitPage, [{
			key: 'render',
			value: function render() {
				return React.createElement(
					RB.Grid,
					null,
					React.createElement(formatting.Header, null),
					React.createElement(SubmitForm, null)
				);
			}
		}]);

		return SubmitPage;
	}(React.Component);

	ReactDOM.render(React.createElement(SubmitPage, null), document.getElementById('content'));

/***/ }
]);