'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

var _foxmanApi = require('foxman-api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ServerPlugin = function (_BasePlugin) {
  _inherits(ServerPlugin, _BasePlugin);

  function ServerPlugin() {
    _classCallCheck(this, ServerPlugin);

    return _possibleConstructorReturn(this, (ServerPlugin.__proto__ || Object.getPrototypeOf(ServerPlugin)).apply(this, arguments));
  }

  _createClass(ServerPlugin, [{
    key: 'beforeReady',
    value: function beforeReady() {
      this.complete();
    }
  }, {
    key: 'beforeMakeFile',
    value: function beforeMakeFile() {
      this.complete();
    }
  }, {
    key: 'beforeServerStart',
    value: function beforeServerStart() {
      this.complete();
    }
  }, {
    key: 'onServerStart',
    value: function onServerStart() {
      new _server2.default(this.options).createServer();
    }
  }]);

  return ServerPlugin;
}(_foxmanApi.BasePlugin);

exports.default = ServerPlugin;