webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsUpdate = __webpack_require__(427);

	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

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

	// user preference panel, used to change avatar or delete user's posts
	var ProfileOptions = function (_React$Component) {
	    _inherits(ProfileOptions, _React$Component);

	    function ProfileOptions(props) {
	        _classCallCheck(this, ProfileOptions);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProfileOptions).call(this, props));

	        _this.state = {
	            posts: window.posts,
	            avatar: window.avatar,
	            showConfirm: false,
	            deletePost: null,
	            deletePostIndex: null,
	            isLoading: false
	        };
	        return _this;
	    }
	    // when showConfirm is set to false, no confirmation pop-up is shown


	    _createClass(ProfileOptions, [{
	        key: 'close',
	        value: function close() {
	            this.setState({
	                showConfirm: false
	            });
	        }
	        // opens up a prompt to confirm that the user would like to delete the selected post

	    }, {
	        key: 'open',
	        value: function open(post, postIndex) {
	            this.setState({
	                showConfirm: true,
	                deletePost: post,
	                deletePostIndex: postIndex
	            });
	        }
	        // uploads avatar image to file directory

	    }, {
	        key: 'uploadImage',
	        value: function uploadImage() {
	            var self = this;
	            this.setState({
	                isLoading: true
	            });

	            var avatarData = _reactDom2.default.findDOMNode(this.refs.avatarPath).files[0],
	                avatarPath = _reactDom2.default.findDOMNode(this.refs.avatarPath).value,
	                data = new FormData(),
	                re = /(\.jpg|\.jpeg|\.bmp|\.gif|\.png)$/i;
	            data.append('avatar', avatarData);

	            if (!re.exec(avatarPath)) {
	                alert('File extension not supported!');
	            } else if (avatarData.size > 20000) {
	                alert('File size is too big!');
	            } else {
	                _jquery2.default.ajax({
	                    url: 'api/v1/avatar',
	                    data: data,
	                    processData: false,
	                    contentType: false,
	                    type: 'POST',
	                    success: function success() {
	                        self.setState({
	                            isLoading: false,
	                            avatar: '../uploads/avatars/' + window.user
	                        });
	                    },
	                    error: function error() {
	                        self.setState({
	                            isLoading: false
	                        });
	                    }
	                });
	            }
	        }
	        // deletes selected post

	    }, {
	        key: 'deletePost',
	        value: function deletePost() {
	            var _this2 = this;

	            var deletedPost = {
	                post: this.state.deletePost
	            };
	            _jquery2.default.post('/api/v1/deletepost/', deletedPost, function () {
	                _this2.setState({
	                    posts: (0, _reactAddonsUpdate2.default)(_this2.state.posts, {
	                        $splice: [[_this2.statedeletePostIndex, 1]]
	                    })
	                });
	            });
	            // when showConfirm is set to false, deletion prompt is removed
	            this.setState({
	                showConfirm: false
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            var finalPosts = this.state.posts.map(function (posts) {
	                return _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        RB.Row,
	                        { className: 'postRow', onClick: _this3.open.bind(_this3, posts.idposts, _this3.state.posts.indexOf(posts)) },
	                        _react2.default.createElement(
	                            RB.Panel,
	                            null,
	                            posts.title,
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'postDeletion' },
	                                posts.postdate,
	                                _react2.default.createElement(RB.Glyphicon, { className: 'glyphSpace', glyph: 'glyphicon glyphicon-remove' })
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
	                        RB.Col,
	                        { xs: 12, sm: 6 },
	                        _react2.default.createElement(
	                            'h4',
	                            null,
	                            'Profile Image'
	                        ),
	                        _react2.default.createElement(RB.Image, { className: 'userImg', src: this.state.avatar, responsive: true, circle: true })
	                    ),
	                    _react2.default.createElement(
	                        RB.Col,
	                        { xs: 12, sm: 6 },
	                        _react2.default.createElement(
	                            'h4',
	                            null,
	                            'Upload New Profile Image'
	                        ),
	                        _react2.default.createElement(
	                            RB.Well,
	                            null,
	                            _react2.default.createElement(
	                                RB.FormGroup,
	                                null,
	                                _react2.default.createElement('input', { type: 'file', ref: 'avatarPath', name: 'file' })
	                            ),
	                            _react2.default.createElement(
	                                RB.Button,
	                                { disabled: this.state.isLoading, onClick: this.uploadImage.bind(this) },
	                                this.state.isLoading ? 'Loading...' : 'Save'
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    RB.Row,
	                    null,
	                    _react2.default.createElement(
	                        'h4',
	                        null,
	                        'Posts'
	                    )
	                ),
	                finalPosts,
	                _react2.default.createElement(
	                    RB.Modal,
	                    { show: this.state.showConfirm, onHide: this.close.bind(this) },
	                    _react2.default.createElement(RB.Modal.Header, { closeButton: true }),
	                    _react2.default.createElement(
	                        RB.Modal.Body,
	                        null,
	                        _react2.default.createElement(
	                            'h4',
	                            null,
	                            'Are you sure you would like to delete this post?'
	                        ),
	                        _react2.default.createElement(
	                            RB.Button,
	                            { onClick: this.deletePost.bind(this) },
	                            'Yes'
	                        ),
	                        _react2.default.createElement(
	                            RB.Button,
	                            { onClick: this.close.bind(this) },
	                            'No'
	                        )
	                    )
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

/***/ },

/***/ 427:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(428);

/***/ },

/***/ 428:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule update
	 */

	/* global hasOwnProperty:true */

	'use strict';

	var _prodInvariant = __webpack_require__(7),
	    _assign = __webpack_require__(4);

	var keyOf = __webpack_require__(25);
	var invariant = __webpack_require__(8);
	var hasOwnProperty = {}.hasOwnProperty;

	function shallowCopy(x) {
	  if (Array.isArray(x)) {
	    return x.concat();
	  } else if (x && typeof x === 'object') {
	    return _assign(new x.constructor(), x);
	  } else {
	    return x;
	  }
	}

	var COMMAND_PUSH = keyOf({ $push: null });
	var COMMAND_UNSHIFT = keyOf({ $unshift: null });
	var COMMAND_SPLICE = keyOf({ $splice: null });
	var COMMAND_SET = keyOf({ $set: null });
	var COMMAND_MERGE = keyOf({ $merge: null });
	var COMMAND_APPLY = keyOf({ $apply: null });

	var ALL_COMMANDS_LIST = [COMMAND_PUSH, COMMAND_UNSHIFT, COMMAND_SPLICE, COMMAND_SET, COMMAND_MERGE, COMMAND_APPLY];

	var ALL_COMMANDS_SET = {};

	ALL_COMMANDS_LIST.forEach(function (command) {
	  ALL_COMMANDS_SET[command] = true;
	});

	function invariantArrayCase(value, spec, command) {
	  !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected target of %s to be an array; got %s.', command, value) : _prodInvariant('1', command, value) : void 0;
	  var specValue = spec[command];
	  !Array.isArray(specValue) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?', command, specValue) : _prodInvariant('2', command, specValue) : void 0;
	}

	/**
	 * Returns a updated shallow copy of an object without mutating the original.
	 * See https://facebook.github.io/react/docs/update.html for details.
	 */
	function update(value, spec) {
	  !(typeof spec === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): You provided a key path to update() that did not contain one of %s. Did you forget to include {%s: ...}?', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : _prodInvariant('3', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : void 0;

	  if (hasOwnProperty.call(spec, COMMAND_SET)) {
	    !(Object.keys(spec).length === 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot have more than one key in an object with %s', COMMAND_SET) : _prodInvariant('4', COMMAND_SET) : void 0;

	    return spec[COMMAND_SET];
	  }

	  var nextValue = shallowCopy(value);

	  if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
	    var mergeObj = spec[COMMAND_MERGE];
	    !(mergeObj && typeof mergeObj === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a spec of type \'object\'; got %s', COMMAND_MERGE, mergeObj) : _prodInvariant('5', COMMAND_MERGE, mergeObj) : void 0;
	    !(nextValue && typeof nextValue === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a target of type \'object\'; got %s', COMMAND_MERGE, nextValue) : _prodInvariant('6', COMMAND_MERGE, nextValue) : void 0;
	    _assign(nextValue, spec[COMMAND_MERGE]);
	  }

	  if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
	    invariantArrayCase(value, spec, COMMAND_PUSH);
	    spec[COMMAND_PUSH].forEach(function (item) {
	      nextValue.push(item);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
	    invariantArrayCase(value, spec, COMMAND_UNSHIFT);
	    spec[COMMAND_UNSHIFT].forEach(function (item) {
	      nextValue.unshift(item);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
	    !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected %s target to be an array; got %s', COMMAND_SPLICE, value) : _prodInvariant('7', COMMAND_SPLICE, value) : void 0;
	    !Array.isArray(spec[COMMAND_SPLICE]) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : _prodInvariant('8', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : void 0;
	    spec[COMMAND_SPLICE].forEach(function (args) {
	      !Array.isArray(args) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : _prodInvariant('8', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : void 0;
	      nextValue.splice.apply(nextValue, args);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
	    !(typeof spec[COMMAND_APPLY] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be a function; got %s.', COMMAND_APPLY, spec[COMMAND_APPLY]) : _prodInvariant('9', COMMAND_APPLY, spec[COMMAND_APPLY]) : void 0;
	    nextValue = spec[COMMAND_APPLY](nextValue);
	  }

	  for (var k in spec) {
	    if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
	      nextValue[k] = update(value[k], spec[k]);
	    }
	  }

	  return nextValue;
	}

	module.exports = update;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }

});