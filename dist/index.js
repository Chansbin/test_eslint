"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));
var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));
var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));
require("core-js");
/*
 * @Author: 陈绍斌 1748362428@qq.com
 * @Date: 2023-12-26 10:43:35
 * @LastEditors: 陈绍斌 1748362428@qq.com
 * @LastEditTime: 2023-12-26 14:00:49
 * @FilePath: \Babel\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

var add = function add(a, b) {
  return a + b;
};
var arr = [1, 2];
var hasThreee = (0, _includes["default"])(arr).call(arr, 3);
new _promise["default"](function (res) {
  return res(10);
}, function (rej) {
  return rej(0);
});
var Person = /*#__PURE__*/(0, _createClass2["default"])(function Person() {
  (0, _classCallCheck2["default"])(this, Person);
  (0, _defineProperty2["default"])(this, "name", 'morrain');
  (0, _defineProperty2["default"])(this, "age", 18);
});
(0, _defineProperty2["default"])(Person, "a", 1);
(0, _defineProperty2["default"])(Person, "b", void 0);