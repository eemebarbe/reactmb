webpackJsonp([1],[
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

	var ProfileOptions = function (_React$Component) {
		_inherits(ProfileOptions, _React$Component);

		function ProfileOptions() {
			_classCallCheck(this, ProfileOptions);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(ProfileOptions).apply(this, arguments));
		}

		_createClass(ProfileOptions, [{
			key: 'render',
			value: function render() {
				return React.createElement(
					'h4',
					null,
					'Preferences'
				);
			}
		}]);

		return ProfileOptions;
	}(React.Component);

	var ProfilePage = function (_React$Component2) {
		_inherits(ProfilePage, _React$Component2);

		function ProfilePage() {
			_classCallCheck(this, ProfilePage);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(ProfilePage).apply(this, arguments));
		}

		_createClass(ProfilePage, [{
			key: 'render',
			value: function render() {
				return React.createElement(
					RB.Grid,
					null,
					React.createElement(formatting.Header, null),
					React.createElement(ProfileOptions, null)
				);
			}
		}]);

		return ProfilePage;
	}(React.Component);

	ReactDOM.render(React.createElement(ProfilePage, null), document.getElementById('content'));

/***/ }
]);