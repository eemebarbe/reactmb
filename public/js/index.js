webpackJsonp([0],[
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

	var SubmissionList = function (_React$Component) {
		_inherits(SubmissionList, _React$Component);

		function SubmissionList() {
			_classCallCheck(this, SubmissionList);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(SubmissionList).apply(this, arguments));
		}

		_createClass(SubmissionList, [{
			key: 'render',
			value: function render() {
				return React.createElement(
					RB.Row,
					null,
					React.createElement(
						RB.ListGroup,
						null,
						React.createElement(
							RB.ListGroupItem,
							{ header: 'Duck' },
							'Cras justo odio'
						),
						React.createElement(
							RB.ListGroupItem,
							{ header: 'Mayo' },
							'Dapibus ac facilisis ine'
						),
						React.createElement(
							RB.ListGroupItem,
							{ header: 'It\'s all in' },
							'Morbi leo risus'
						),
						React.createElement(
							RB.ListGroupItem,
							{ header: 'How is the sky' },
							'Porta ac consectetur ac'
						),
						React.createElement(
							RB.ListGroupItem,
							{ header: 'Too many bananas' },
							'Vestibulum at eros'
						)
					),
					React.createElement(RB.Pagination, { next: true, prev: true, items: 5, maxButtons: 5, activePage: 2 })
				);
			}
		}]);

		return SubmissionList;
	}(React.Component);

	var FrontPage = function (_React$Component2) {
		_inherits(FrontPage, _React$Component2);

		function FrontPage() {
			_classCallCheck(this, FrontPage);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(FrontPage).apply(this, arguments));
		}

		_createClass(FrontPage, [{
			key: 'render',
			value: function render() {
				return React.createElement(
					RB.Grid,
					null,
					React.createElement(formatting.Header, null),
					React.createElement(SubmissionList, null)
				);
			}
		}]);

		return FrontPage;
	}(React.Component);

	ReactDOM.render(React.createElement(FrontPage, null), document.getElementById('content'));

/***/ }
]);