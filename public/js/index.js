webpackJsonp([0],[
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

	// list of posts that appears on index
	var SubmissionList = function (_React$Component) {
	    _inherits(SubmissionList, _React$Component);

	    function SubmissionList(props) {
	        _classCallCheck(this, SubmissionList);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SubmissionList).call(this, props));

	        _this.state = {
	            posts: [],
	            currentPage: 1,
	            numberOfPages: null
	        };
	        return _this;
	    }

	    // populates the list of posts. function passes a 'page' argument to the query so when a user selects a page, the correct range is displayed


	    _createClass(SubmissionList, [{
	        key: 'getPosts',
	        value: function getPosts(page) {
	            var loopPosts = [];
	            var pageRange = 3;
	            // get the total number of posts so the pagination displays the correct number of pages
	            _jquery2.default.get('/api/v1/postcount/', function (response) {
	                var math = Math.ceil(response[0].count / pageRange);
	                this.setState({
	                    numberOfPages: math
	                });
	            }.bind(this));
	            // page value is passed to a database query and the appropriate range of posts are returned
	            _jquery2.default.get('/api/v1/postrange?page=' + page + '&pageRange=' + pageRange, function (response) {
	                if (response !== null) {
	                    for (var i = 0; i < response.length; i++) {
	                        // if the comment amount comes out as null in the query, pass '0' to avoid an error
	                        var commentAmount = null;
	                        if (response[i].comments == null) {
	                            commentAmount = '0';
	                        } else {
	                            commentAmount = response[i].comments;
	                        }
	                        loopPosts.push(_react2.default.createElement(
	                            RB.ListGroupItem,
	                            { href: '/post/' + response[i].idposts, header: response[i].title },
	                            'Submitted by ',
	                            response[i].idusers,
	                            ' | Comments ',
	                            _react2.default.createElement(
	                                'b',
	                                null,
	                                '(',
	                                commentAmount,
	                                ')'
	                            )
	                        ));
	                    }
	                } else {
	                    loopPosts = _react2.default.createElement(
	                        'div',
	                        null,
	                        'No More Posts'
	                    );
	                }
	                this.setState({
	                    posts: loopPosts
	                });
	            }.bind(this));
	        }

	        // eventKey is a react-bootstrap value that passes along the selected page from the pagination component.
	        // this function sets the currentPage to the eventKey value and also triggers the getPosts function, passing eventKey along

	    }, {
	        key: 'handleSelect',
	        value: function handleSelect(eventKey) {
	            this.setState({
	                currentPage: eventKey
	            });
	            this.getPosts(eventKey);
	        }

	        // on page load, trigger getPosts

	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.getPosts(this.state.currentPage);
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
	                _react2.default.createElement(RB.Pagination, { next: true, prev: true, first: true, last: true, items: this.state.numberOfPages, maxButtons: 5, onSelect: this.handleSelect.bind(this), activePage: this.state.currentPage })
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