// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"ir7B":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vector = void 0;

var Vector = /*#__PURE__*/function () {
  function Vector(x, y) {
    _classCallCheck(this, Vector);

    this.x = x;
    this.y = y;
  }

  _createClass(Vector, [{
    key: "getX",
    value: function getX() {
      return this.x;
    }
  }, {
    key: "getY",
    value: function getY() {
      return this.y;
    }
  }, {
    key: "getLength",
    value: function getLength() {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
  }, {
    key: "normalize",
    value: function normalize() {
      if (this.getLength() != 0) this.mult(1 / this.getLength());
    }
  }, {
    key: "getNormalized",
    value: function getNormalized() {
      var v = new Vector(this.x, this.y);
      v.normalize();
      return v;
    }
  }, {
    key: "invert",
    value: function invert() {
      this.mult(-1);
    }
  }, {
    key: "getInverted",
    value: function getInverted() {
      return new Vector(-this.x, -this.y);
    }
  }, {
    key: "getNormal",
    value: function getNormal() {
      return this.getRotated(-Math.PI / 2);
    }
  }, {
    key: "isSame",
    value: function isSame(vec2) {
      return this.x == vec2.x && this.y == vec2.y;
    }
  }, {
    key: "isZero",
    value: function isZero() {
      return this.x == 0 && this.y == 0;
    }
  }, {
    key: "add",
    value: function add(x, y) {
      this.x += x;
      this.y += y;
    }
  }, {
    key: "getAdded",
    value: function getAdded(x, y) {
      return new Vector(this.x + x, this.y + y);
    }
  }, {
    key: "addVector",
    value: function addVector(vector) {
      this.x += vector.x;
      this.y += vector.y;
    }
  }, {
    key: "getAddedVector",
    value: function getAddedVector(vector) {
      return new Vector(this.x + vector.x, this.y + vector.y);
    }
  }, {
    key: "mult",
    value: function mult(factor) {
      this.x *= factor;
      this.y *= factor;
    }
  }, {
    key: "getMult",
    value: function getMult(factor) {
      return new Vector(this.x * factor, this.y * factor);
    }
  }, {
    key: "rotate",
    value: function rotate(angle) {
      this.x = this.x * Math.cos(angle) - this.y * Math.sin(angle);
      this.y = this.x * Math.sin(angle) + this.y * Math.cos(angle);
    }
  }, {
    key: "getRotated",
    value: function getRotated(angle) {
      return new Vector(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle));
    }
  }, {
    key: "getDot",
    value: function getDot(v) {
      return this.getX() * v.getX() + this.getY() * v.getY();
    }
  }, {
    key: "getDotAngleBetween",
    value: function getDotAngleBetween(v) {
      return Math.acos(this.getDot(v) / (this.getLength() * v.getLength()));
    }
  }, {
    key: "getAngleBetween",
    value: function getAngleBetween(v) {
      //return Math.atan2(this.y - v.y, this.x - v.x);
      return Math.atan2(this.y, this.x) - Math.atan2(v.y, v.x);
    }
  }, {
    key: "isParallel",
    value: function isParallel(vec2) {
      if (this.isZero() || vec2.isZero()) {
        return false;
      } // x1 = a * x2
      // y1 = a * y2
      // x1 = y1/y2 * x2


      var v1 = this.getNormalized();
      var v2 = vec2.getNormalized();
      var v3 = v2.getInverted();
      return v1.isSame(v2) || v1.isSame(v3);
    }
  }]);

  return Vector;
}();

exports.Vector = Vector;
},{}],"b0Vr":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Line = void 0;

var Line = /*#__PURE__*/function () {
  function Line(position, direction, length) {
    _classCallCheck(this, Line);

    this.pos = position;
    this.dir = direction;
    this.len = length;
  }

  _createClass(Line, [{
    key: "getPosition",
    value: function getPosition() {
      return this.pos;
    }
  }, {
    key: "getEndPosition",
    value: function getEndPosition() {
      return this.pos.getAddedVector(this.dir.getMult(this.len));
    }
  }, {
    key: "getDirection",
    value: function getDirection() {
      return this.dir;
    }
  }, {
    key: "getLength",
    value: function getLength() {
      return this.len;
    }
  }, {
    key: "getRealLength",
    value: function getRealLength() {
      return this.dir.getMult(this.len).getLength();
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var dashed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var posDir = this.getEndPosition();
      ctx.addLine(this.pos.getX(), this.pos.getY(), posDir.getX(), posDir.getY(), id, dashed);
    }
  }, {
    key: "getNormal",
    value: function getNormal() {
      return this.dir.getNormal();
    }
    /**
     * @description Calculates the collision point between this line and line2
     * @param  {Line} line2 Line to check collision with
     * @returns {[number | undefined, number | undefined, number, number, Line, Line]} Array with collision data
     */

  }, {
    key: "getIntersect",
    value: function getIntersect(line2) {
      if (this.dir.isParallel(line2.getDirection())) {
        //If parallel, don't return a collision
        return [,, 1, 1, this, line2];
      } else {
        //Else, calculate the collision point and values
        //Calculate direction of collision point from this lines start
        var dir = (line2.dir.getX() * (this.pos.getY() - line2.pos.getY()) - line2.dir.getY() * (this.pos.getX() - line2.pos.getX())) / (line2.dir.getY() * this.dir.getX() - line2.dir.getX() * this.dir.getY()); //Calculate the x and y of the collision

        var x = this.pos.getX() + dir * this.dir.getX();
        var y = this.pos.getY() + dir * this.dir.getY(); //Calculate the scalars for the length at which the position happend for both lines

        var t1 = 0;
        var t2 = 0; //switch betwenn x and y to reduce errors

        if (Math.abs(this.dir.getX()) > 0.1) {
          t1 = (x - this.pos.getX()) / this.dir.getX();
        } else {
          t1 = (y - this.pos.getY()) / this.dir.getY();
        }

        if (Math.abs(line2.dir.getX()) > 0.1) {
          t2 = (x - line2.pos.getX()) / line2.dir.getX();
        } else {
          t2 = (y - line2.pos.getY()) / line2.dir.getY();
        } //Round values to 4 numbers after the point


        x = Math.round(x * 1000) / 1000;
        y = Math.round(y * 1000) / 1000;
        t1 = Math.round(t1 * 1000) / 1000;
        t2 = Math.round(t2 * 1000) / 1000;
        return [x, y, t1, t2, this, line2];
      }
    }
  }]);

  return Line;
}();

exports.Line = Line;
},{}],"uowC":[function(require,module,exports) {
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rect = void 0;

var vector_1 = require("./vector");

var line_1 = require("./line");

var app_1 = require("../app");

var Rect = /*#__PURE__*/function () {
  function Rect(position, width, height, rotation, material, id) {
    var name = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "";

    _classCallCheck(this, Rect);

    this.pos = position;
    this.width = width;
    this.height = height;
    this.rot = rotation;
    this.material = material;
    this.id = id;
    this.name = name;
    this.delete = false;
    this.collisionIndex = 1;
    this.vertecies = [];
    this.lines = [];
    this.updateLines();
  }

  _createClass(Rect, [{
    key: "updateLines",
    value: function updateLines() {
      this.lines = [];
      this.vertecies = [];
      this.vertecies.push(new vector_1.Vector(-this.width / 2, -this.height / 2).getRotated(this.rot).getAddedVector(this.pos));
      this.vertecies.push(new vector_1.Vector(this.width / 2, -this.height / 2).getRotated(this.rot).getAddedVector(this.pos));
      this.vertecies.push(new vector_1.Vector(this.width / 2, this.height / 2).getRotated(this.rot).getAddedVector(this.pos));
      this.vertecies.push(new vector_1.Vector(-this.width / 2, this.height / 2).getRotated(this.rot).getAddedVector(this.pos));
      this.lines.push(new line_1.Line(this.vertecies[0], new vector_1.Vector(this.width, 0).getRotated(this.rot), 1));
      this.lines.push(new line_1.Line(this.vertecies[1], new vector_1.Vector(0, this.height).getRotated(this.rot), 1));
      this.lines.push(new line_1.Line(this.vertecies[2], new vector_1.Vector(-this.width, 0).getRotated(this.rot), 1));
      this.lines.push(new line_1.Line(this.vertecies[3], new vector_1.Vector(0, -this.height).getRotated(this.rot), 1));
    }
  }, {
    key: "getDelete",
    value: function getDelete() {
      return this.delete;
    }
  }, {
    key: "getLines",
    value: function getLines() {
      return this.lines;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.pos;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.width;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.height;
    }
  }, {
    key: "getMaterial",
    value: function getMaterial() {
      return this.material;
    }
  }, {
    key: "getColor",
    value: function getColor() {
      return this.material.getColor();
    }
  }, {
    key: "getRotation",
    value: function getRotation() {
      return this.rot;
    }
  }, {
    key: "setRotation",
    value: function setRotation(rotation) {
      this.rot = rotation;
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getCollisionIndex",
    value: function getCollisionIndex() {
      return this.collisionIndex;
    }
  }, {
    key: "getAndIncrementCollisionIndex",
    value: function getAndIncrementCollisionIndex() {
      return this.collisionIndex++;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var i = 0;

      var _iterator = _createForOfIteratorHelper(this.lines),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {//new Line(l.getPosition(), l.getNormal(), 1).draw(ctx, this.id + "_" + (i++).toString()); // Normals
          //l.draw(ctx, this.id + "_" + (i++).toString());

          var l = _step.value;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      ctx.pushStyle();
      ctx.setFill(this.getColor());
      ctx.addRect(this.vertecies[0].getX(), this.vertecies[0].getY(), this.vertecies[1].getX(), this.vertecies[1].getY(), this.vertecies[2].getX(), this.vertecies[2].getY(), this.vertecies[3].getX(), this.vertecies[3].getY(), this.id, this);
      ctx.popStyle();
      this.collisionIndex = 1;
    }
  }, {
    key: "move",
    value: function move(x, y, dx, dy) {
      //this.pos.add(dx, dy);
      this.pos = new vector_1.Vector(x - app_1.CANVAS.getBoundingClientRect().left, y - app_1.CANVAS.getBoundingClientRect().top);
      this.updateLines();
    }
  }, {
    key: "rotate",
    value: function rotate(x, y, dx, dy) {
      this.rot = -Math.atan2(x - app_1.CANVAS.getBoundingClientRect().left - this.pos.getX(), y - app_1.CANVAS.getBoundingClientRect().top - this.pos.getY());
      this.updateLines();
    }
  }, {
    key: "doFunction",
    value: function doFunction(func, val, e) {
      var _this = this;

      var _a;

      if (func == "rotate") {
        this.rotate(e.x, e.y, e.movementX, e.movementY);
      } else if (func == "rotation") {
        var numberPick = document.getElementById("numberPicker_rotation");

        if (numberPick == null) {} else {
          numberPick.oninput = function () {
            _this.rot = Number(numberPick.value) / 180 * Math.PI;

            _this.updateLines();
          };
        }
      } else if (func == "color") {
        var colPick = document.getElementById("colorPicker_color");

        if (colPick == null) {
          colPick = document.createElement("input");
          colPick.type = "color";
          colPick.className = "contextElement_input";
          colPick.id = "colorPicker_color";
          colPick.value = this.getColor();
          colPick.select();

          colPick.oninput = function () {
            _this.material.setColor(colPick.value);
          };

          (_a = app_1.CONTEXT_MENU.firstChild) === null || _a === void 0 ? void 0 : _a.appendChild(colPick);
        } else {
          colPick.oninput = function () {
            _this.material.setColor(colPick.value);
          };
        } // if (colPick != null) {
        //   this.color = colPick.value;
        // }

      } else if (func == "diffuse") {
        var _numberPick = document.getElementById("numberPicker_diffuse");

        if (_numberPick == null) {} else {
          _numberPick.oninput = function () {
            if (Number(_numberPick.value) < 0) {
              _numberPick.value = "0";
            } else if (Number(_numberPick.value) > 100) {
              _numberPick.value = "100";
            }

            _this.material.setDiffuse(Number(_numberPick.value) / 100);

            _this.updateLines();
          };
        }
      } else if (func == "specular") {
        var _numberPick2 = document.getElementById("numberPicker_specular");

        if (_numberPick2 == null) {} else {
          _numberPick2.oninput = function () {
            if (Number(_numberPick2.value) < 0) {
              _numberPick2.value = "0";
            } else if (Number(_numberPick2.value) > 100) {
              _numberPick2.value = "100";
            }

            _this.material.setSpecular(Number(_numberPick2.value) / 100);

            _this.updateLines();
          };
        }
      } else if (func == "width") {
        var _numberPick3 = document.getElementById("numberPicker_width");

        if (_numberPick3 == null) {} else {
          _numberPick3.oninput = function () {
            _this.width = Number(_numberPick3.value);

            _this.updateLines();
          };
        }
      } else if (func == "height") {
        var _numberPick4 = document.getElementById("numberPicker_height");

        if (_numberPick4 == null) {} else {
          _numberPick4.oninput = function () {
            _this.height = Number(_numberPick4.value);

            _this.updateLines();
          };
        }
      } else if (func == "delete") {
        this.delete = true;
      }
    }
  }, {
    key: "getContextAttributes",
    value: function getContextAttributes() {
      return [{
        name: "Color",
        id: "color",
        type: "color",
        value: this.getColor()
      }, {
        name: "Diffuse (%)",
        id: "diffuse",
        type: "number",
        value: this.material.getDiffuse() * 100
      }, {
        name: "Specular (%)",
        id: "specular",
        type: "number",
        value: this.material.getSpecular() * 100
      }, {
        name: "Rotation",
        id: "rotation",
        type: "number",
        value: Math.round(this.rot / Math.PI * 180)
      }, {
        name: "Width",
        id: "width",
        type: "number",
        value: this.width
      }, {
        name: "Height",
        id: "height",
        type: "number",
        value: this.height
      }, {
        name: "Remove",
        id: "delete",
        type: "",
        value: 0
      }];
    }
    /**
     * @description Calculates the collision point between this rect and line
     * @param  {Line} line Line to check collision with
     * @returns {[number | undefined, number | undefined, number, number, Line, Line]} Array with collision data
     */

  }, {
    key: "getIntersect",
    value: function getIntersect(line) {
      var result = [];

      var _iterator2 = _createForOfIteratorHelper(this.lines),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var l = _step2.value;

          var _l$getIntersect = l.getIntersect(line),
              _l$getIntersect2 = _slicedToArray(_l$getIntersect, 6),
              x = _l$getIntersect2[0],
              y = _l$getIntersect2[1],
              t1 = _l$getIntersect2[2],
              t2 = _l$getIntersect2[3],
              line1 = _l$getIntersect2[4],
              line2 = _l$getIntersect2[5];

          if (x != undefined && y != undefined && t1 != undefined && t2 != undefined && t1 > 0 && t1 < l.getLength() && t2 > 0 && t2 < line.getLength()) {
            result.push([x, y, t1, t2, line1, line2]);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return result;
    }
  }]);

  return Rect;
}();

exports.Rect = Rect;
},{"./vector":"ir7B","./line":"b0Vr","../app":"EVxB"}],"bQSQ":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollisionRectEvent = exports.CollisionLineEvent = exports.CollisionEvent = void 0;

var line_1 = require("./line");

var vector_1 = require("./vector");
/**
 * @description Collision Event base class
 * @param  {Line} ray The Ray for the collision calculation
 * @param  {Line|Rect} object The Line or Rect for the collision calculation
 */


var CollisionEvent = /*#__PURE__*/function () {
  function CollisionEvent(ray, object) {
    _classCallCheck(this, CollisionEvent);

    this.line = ray;
    this.object = object;
    this.lines = [];
  }

  _createClass(CollisionEvent, [{
    key: "getLine",
    value: function getLine() {
      return this.line;
    }
  }, {
    key: "getObject",
    value: function getObject() {
      return this.object;
    }
  }, {
    key: "getNewLines",
    value: function getNewLines() {
      return this.lines;
    }
  }, {
    key: "calculateCollision",
    value: function calculateCollision() {}
  }]);

  return CollisionEvent;
}();

exports.CollisionEvent = CollisionEvent;
/**
 * @description Collision Event for Ray-Line collisions
 * @param  {Line} ray The Ray for the collision calculation
 * @param  {Line} object The Line for the collision calculation
 */

var CollisionLineEvent = /*#__PURE__*/function (_CollisionEvent) {
  _inherits(CollisionLineEvent, _CollisionEvent);

  var _super = _createSuper(CollisionLineEvent);

  function CollisionLineEvent(ray, object) {
    var _this;

    _classCallCheck(this, CollisionLineEvent);

    _this = _super.call(this, ray, object);
    _this.object = object;
    _this.lines = [];

    _this.calculateCollision();

    return _this;
  }
  /**
   * @description Calculates the collision point between a ray and a Line
   */


  _createClass(CollisionLineEvent, [{
    key: "calculateCollision",
    value: function calculateCollision() {
      this.lines = [];

      var _this$object$getInter = this.object.getIntersect(this.line),
          _this$object$getInter2 = _slicedToArray(_this$object$getInter, 4),
          x = _this$object$getInter2[0],
          y = _this$object$getInter2[1],
          t1 = _this$object$getInter2[2],
          t2 = _this$object$getInter2[3];

      if (x != undefined && y != undefined && t1 != undefined && t1 > 0 && t1 < this.object.getLength() && t2 != undefined && t2 > 0 && t2 < this.line.getLength()) {
        var tempLine = new line_1.Line(this.line.getPosition(), this.line.getDirection(), t2);

        if (tempLine.getRealLength() > 2) {
          this.line = tempLine;
          this.lines.push(new line_1.Line(new vector_1.Vector(x, y), this.object.getNormal().getRotated(this.object.getNormal().getAngleBetween(this.line.getDirection().getInverted())), 1));
        }
      }
    }
  }]);

  return CollisionLineEvent;
}(CollisionEvent);

exports.CollisionLineEvent = CollisionLineEvent;
/**
 * @description Collision Event for Ray-Rect collisions
 * @param  {Line} ray The Ray for the collision calculation
 * @param  {Line} object The Rect for the collision calculation
 */

var CollisionRectEvent = /*#__PURE__*/function (_CollisionEvent2) {
  _inherits(CollisionRectEvent, _CollisionEvent2);

  var _super2 = _createSuper(CollisionRectEvent);

  function CollisionRectEvent(ray, object) {
    var _this2;

    _classCallCheck(this, CollisionRectEvent);

    _this2 = _super2.call(this, ray, object);
    _this2.object = object;
    _this2.lines = [];

    _this2.calculateCollision();

    return _this2;
  }

  _createClass(CollisionRectEvent, [{
    key: "calculateCollision",
    value: function calculateCollision() {
      this.lines = [];
    }
  }]);

  return CollisionRectEvent;
}(CollisionEvent);

exports.CollisionRectEvent = CollisionRectEvent;
},{"./line":"b0Vr","./vector":"ir7B"}],"Aajv":[function(require,module,exports) {
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShadowRay = void 0;

var line_1 = require("./line");

var rect_1 = require("./rect");

var vector_1 = require("./vector");

var collisionEvent_1 = require("./collisionEvent");

var ShadowRay = /*#__PURE__*/function () {
  function ShadowRay(position, direction, lamp, id) {
    _classCallCheck(this, ShadowRay);

    this.line = new line_1.Line(position, direction, 1);
    this.lamp = lamp;
    this.blocked = false;
    this.id = id;
  }

  _createClass(ShadowRay, [{
    key: "getBlocked",
    value: function getBlocked() {
      return this.blocked;
    }
  }, {
    key: "getLamp",
    value: function getLamp() {
      return this.lamp;
    }
  }, {
    key: "getLine",
    value: function getLine() {
      return this.line;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var onlyCollision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!onlyCollision) this.line.draw(ctx, this.id, true);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.line = new line_1.Line(this.line.getPosition(), this.line.getDirection(), 1);
    }
  }, {
    key: "recalculateRay",
    value: function recalculateRay(collisionCollection, lamps) {
      this.reset();
      var collisionLines;
      var colEvent;

      var _iterator = _createForOfIteratorHelper(collisionCollection),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var el = _step.value;

          if (el instanceof line_1.Line) {
            colEvent = new collisionEvent_1.CollisionLineEvent(this.line, el);

            if (colEvent.getNewLines().length > 0) {
              this.line = colEvent.getLine();
              collisionLines = colEvent.getNewLines();
            }
          } else if (el instanceof rect_1.Rect) {
            var intersects = el.getIntersect(this.line);

            if (intersects != null && intersects.length > 0) {
              var _iterator2 = _createForOfIteratorHelper(intersects),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _step2$value = _slicedToArray(_step2.value, 6),
                      x = _step2$value[0],
                      y = _step2$value[1],
                      t1 = _step2$value[2],
                      t2 = _step2$value[3],
                      line1 = _step2$value[4],
                      line2 = _step2$value[5];

                  if (t2 != undefined && t2 > 0 && t2 < this.line.getLength()) {
                    var tempLine = new line_1.Line(this.line.getPosition(), this.line.getDirection(), t2);

                    if (tempLine.getRealLength() > 0) {
                      this.line = tempLine;
                      collisionLines = [new line_1.Line(new vector_1.Vector(x, y), line1.getNormal().getRotated(line1.getNormal().getAngleBetween(this.line.getDirection().getInverted())), 1)];
                      this.blocked = true;
                    }
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);

  return ShadowRay;
}();

exports.ShadowRay = ShadowRay;
},{"./line":"b0Vr","./rect":"uowC","./vector":"ir7B","./collisionEvent":"bQSQ"}],"sPG7":[function(require,module,exports) {
"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Collision = void 0;

var app_1 = require("../app");

var rect_1 = require("./rect");

var shadowRay_1 = require("./shadowRay");

var ray_1 = require("./ray");

var Collision = /*#__PURE__*/function () {
  function Collision(position, collisionObject, collisionLine, collisionAxis, depth, maxDepth, prevRay, id) {
    _classCallCheck(this, Collision);

    this.pos = position;
    this.id = id;
    this.prevRay = prevRay;
    this.maxDepth = maxDepth;
    this.depth = depth;
    this.nextRay = null;
    this.shadowRays = [];
    this.collisionObject = collisionObject;
    this.collisionLine = collisionLine;
    this.collisionAxis = collisionAxis;
    this.reflectingIntensities = [0, 0, 0];
  }

  _createClass(Collision, [{
    key: "getNextRay",
    value: function getNextRay() {
      return this.nextRay;
    }
  }, {
    key: "getShadowRays",
    value: function getShadowRays() {
      return this.shadowRays;
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }, {
    key: "getDepth",
    value: function getDepth() {
      return this.depth;
    }
  }, {
    key: "getMaxDepth",
    value: function getMaxDepth() {
      return this.maxDepth;
    }
  }, {
    key: "getReflectingIntensities",
    value: function getReflectingIntensities() {
      return this.reflectingIntensities;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var onlyCollision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var _a;

      if (onlyCollision) {
        if (ctx.getDrawState().getDisplayColisionData()) {
          ctx.pushStyle();
          ctx.setFill(ctx.getDrawState().getDarkMode() ? "white" : "black");
          var arrEnd = this.pos.getAddedVector(this.collisionAxis.getNormalized().getMult(50));
          var arcStart = this.pos.getAddedVector(this.collisionAxis.getNormalized().getMult(40));

          if (this.nextRay != undefined) {
            var arcEnd1 = this.pos.getAddedVector(this.nextRay.getLine().getDirection().getNormalized().getMult(40));
            var arcEnd2 = this.pos.getAddedVector(this.prevRay.getLine().getDirection().getNormalized().getMult(-40));
            var arcMid = arcEnd1.getAddedVector(arcEnd2.getInverted());
            var arcMid1 = arcStart.getAddedVector(arcMid.getMult(0.25));
            var arcMid2 = arcStart.getAddedVector(arcMid.getMult(-0.25));
            var testAngle = this.collisionLine.getNormal().getAngleBetween(this.prevRay.getLine().getDirection().getInverted()) - Math.PI / 2;
            testAngle = testAngle > Math.PI ? -Math.PI + (testAngle - Math.PI) : testAngle; //console.log(this.id, testAngle);

            var sf = testAngle > Math.PI || testAngle < 0 ? 1 : 0; // if (arcEnd1.getX() > arcEnd2.getX() && this.collisionAxis.getNormalized().getY() > 0) {
            //   sl = 1 - sl;
            // } else if (arcEnd1.getY() < arcEnd2.getY() && this.collisionAxis.getNormalized().getX() > 0) {
            //   sl = 1 - sl;
            // }

            var lf = testAngle > Math.PI / 2 ? 1 : 0; //ctx.addArc(arcEnd2.getX(), arcEnd2.getY(), 40, 40, 0, 0, sf, arcEnd1.getX(), arcEnd1.getY(), this.id + "_arc1");

            ctx.addArc2(arcEnd2, arcMid2, arcMid1, arcEnd1, this.id + "_arc2"); //ctx.addArc(arcStart.getX(), arcStart.getY(), 40, 40, 0, 0, 1 - sl, arcEnd2.getX(), arcEnd2.getY(), this.id + "_arc2");

            if (arcMid.getLength() > 15) {
              var _arcMid = arcStart.getAddedVector(this.collisionAxis.getNormalized().getMult(-20)).getAddedVector(arcMid.getMult(-0.15));

              var _arcMid2 = arcStart.getAddedVector(this.collisionAxis.getNormalized().getMult(-20)).getAddedVector(arcMid.getMult(0.15));

              ctx.addText(_arcMid.getX() - 1, _arcMid.getY(), "ϕ", this.id + "_arc_text1");
              ctx.addText(_arcMid2.getX() - 1, _arcMid2.getY(), "ϕ", this.id + "_arc_text2");
            }
          }

          ctx.addArrow(this.pos.getX(), this.pos.getY(), arrEnd.getX(), arrEnd.getY(), this.id + "_arr");
          ctx.addText(arrEnd.getX() - 5, arrEnd.getAddedVector(this.collisionAxis.getNormalized().getMult(5)).getY(), "n", this.id + "_arr_text");
          ctx.popStyle();
        }

        ctx.pushStyle();
        var rgb = this.reflectingIntensities;
        ctx.setFill("rgb(".concat(rgb[0], ",").concat(rgb[1], ",").concat(rgb[2], ")"));
        ctx.addCollision(this.pos.getX(), this.pos.getY(), 10, this.id, this);
        ctx.setFill((rgb[0] + rgb[1] + rgb[2]) / 3 > 128 ? "black" : "white");
        ctx.addText(this.pos.getX(), this.pos.getY() + 4, this.collisionObject.getName() + this.collisionObject.getAndIncrementCollisionIndex(), this.id + "_t");
        ctx.popStyle();
      }

      ctx.pushStyle();
      ctx.setStroke(ctx.getDrawState().getShadowRayColor());

      for (var i = 0; app_1.Main.Instance.getCTX().getDrawState().getDisplayShadowRays() && i < this.shadowRays.length; i++) {
        this.shadowRays[i].draw(ctx, onlyCollision);
      }

      ctx.popStyle();
      (_a = this.nextRay) === null || _a === void 0 ? void 0 : _a.draw(ctx, onlyCollision);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.nextRay = null;
      this.shadowRays = [];
    }
    /**
     * @description Recursive method to calculate all rays and ray collisions
     * @param  {(Line|Rect)[]} collisionCollection Array with objects to collide with
     * @param  {Lamp[]} lamps Array with all Lamps for shadow rays
     */

  }, {
    key: "recalculateRay",
    value: function recalculateRay(collisionCollection, lamps) {
      this.reset(); //If collision happend, do shadow rays, and further recursive rays
      //Shadow Rays

      for (var i = 0; i < lamps.length; i++) {
        if (lamps[i].getOn() == false) continue;
        this.shadowRays.push(new shadowRay_1.ShadowRay(this.pos, lamps[i].getPosition().getAddedVector(this.pos.getInverted()), lamps[i], this.id + "_sr" + i + "_" + this.depth.toString()));
        this.shadowRays[this.shadowRays.length - 1].recalculateRay(collisionCollection, lamps);
      }

      if (this.depth < this.maxDepth) {
        //If no axis could be found, do mirror-like reflecting
        this.nextRay = new ray_1.Ray(this.pos, this.collisionLine.getDirection(), this.depth + 1, this.maxDepth, this.prevRay.getId() + "_" + (this.depth + 1).toString());
        this.nextRay.recalculateRay(collisionCollection, lamps); //this.recalculateReflectingIntensities(difAngle, specAngle);
      }

      this.recalculateReflectingIntensities();
    }
    /**
     * @description Method to return the colors of ray collisions
     * @param  {number} difAngle Angle of diffuse ray
     * @param  {number} specAngle Angle of specular ray
     */

  }, {
    key: "recalculateReflectingIntensities",
    value: function recalculateReflectingIntensities() {
      var r = 0;
      var g = 0;
      var b = 0;
      var diffuse = [0, 0, 0];
      var specular = [0, 0, 0];
      var reflect = [0, 0, 0]; //If there are further rays, set diffuse RGB to color from diffuse ray

      var _iterator = _createForOfIteratorHelper(this.shadowRays),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var sr = _step.value;

          if (sr.getBlocked() == true) {} else {
            var _li = sr.getLamp().getLampMaterial().getIntensity() / Math.pow(sr.getLine().getRealLength() / 100 + 1, 2);

            var _col = sr.getLamp().getLampMaterial().getColor();

            if (_col[0] == "#") {
              r = parseInt(_col.slice(1, 3), 16);
              g = parseInt(_col.slice(3, 5), 16);
              b = parseInt(_col.slice(5, 7), 16);
            } //Diffuse


            var difAngle = this.collisionAxis.getAngleBetween(sr.getLine().getDirection());
            var difFactor = this.collisionObject.getMaterial().getDiffuse();
            diffuse[0] += difFactor * Math.cos(difAngle) * _li * r / 255;
            diffuse[1] += difFactor * Math.cos(difAngle) * _li * g / 255;
            diffuse[2] += difFactor * Math.cos(difAngle) * _li * b / 255; //Specular

            var specAngle = this.collisionLine.getDirection().getAngleBetween(sr.getLine().getDirection());
            var specFactor = this.collisionObject.getMaterial().getSpecular();
            var exponent = Math.pow(2, (1 - specFactor) * 8);
            var korrFaktor = (exponent + 2) / (2 * Math.PI);

            if (this.collisionLine.getDirection().getDot(sr.getLine().getDirection()) > 0) {
              specular[0] += korrFaktor * Math.pow(Math.cos(specAngle), exponent) * _li * r / 10;
              specular[1] += korrFaktor * Math.pow(Math.cos(specAngle), exponent) * _li * g / 10;
              specular[2] += korrFaktor * Math.pow(Math.cos(specAngle), exponent) * _li * b / 10;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (this.nextRay != null) {
        var reflFactor = 1 - this.collisionObject.getMaterial().getDiffuse();
        var col = this.nextRay.getReflectingIntensities();
        reflect[0] += reflFactor * col[0];
        reflect[1] += reflFactor * col[1];
        reflect[2] += reflFactor * col[2];
      }

      if (this.shadowRays.length > 0) {
        diffuse[0] /= this.shadowRays.length;
        diffuse[1] /= this.shadowRays.length;
        diffuse[2] /= this.shadowRays.length;
        specular[0] /= this.shadowRays.length;
        specular[1] /= this.shadowRays.length;
        specular[2] /= this.shadowRays.length;
      } //Constant ambient


      var ambient_intensity = 0.1;
      var ambient = [255 * ambient_intensity, 255 * ambient_intensity, 255 * ambient_intensity];
      var li = 0; //Sum up Lamps intensities
      // for (let sr of this.shadowRays) {
      //   if (!sr.getBlocked()) {
      //     li += sr.getLamp().getLampMaterial().getIntensity() / (sr.getLine().getRealLength() / 200 + 1) ** 2;
      //   }
      // }
      //Get color from col object

      if (this.collisionObject instanceof rect_1.Rect) {
        var color = this.collisionObject.getColor();

        if (color[0] == "#") {
          r = parseInt(color.slice(1, 3), 16);
          g = parseInt(color.slice(3, 5), 16);
          b = parseInt(color.slice(5, 7), 16);
        } //Add color  * lamp_intensity + ambient
        //console.log(ambient, diffuse, specular);


        r = ambient[0] + r * diffuse[0] / 2 + specular[0]; //+ reflect[0];

        g = ambient[1] + g * diffuse[1] / 2 + specular[1]; //+ reflect[1];

        b = ambient[2] + b * diffuse[2] / 2 + specular[2]; //+ reflect[2];
      } else {
        //If no collision, just use ambient
        r = ambient[0];
        g = ambient[1];
        b = ambient[2];
      } //Constrain to int rgb


      r = this.constrain255(Math.round(r));
      g = this.constrain255(Math.round(g));
      b = this.constrain255(Math.round(b));
      this.reflectingIntensities = [r, g, b]; //console.log(this.reflectingIntensities);
    }
  }, {
    key: "constrain255",
    value: function constrain255(x) {
      return x < 0 ? 0 : x > 255 ? 255 : x;
    }
  }]);

  return Collision;
}();

exports.Collision = Collision;
},{"../app":"EVxB","./rect":"uowC","./shadowRay":"Aajv","./ray":"Iu6L"}],"Iu6L":[function(require,module,exports) {
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ray = void 0;

var app_1 = require("../app");

var line_1 = require("./line");

var rect_1 = require("./rect");

var vector_1 = require("./vector");

var collisionEvent_1 = require("./collisionEvent");

var collision_1 = require("./collision");

var Ray = /*#__PURE__*/function () {
  // private rnds: number[];
  function Ray(position, direction, depth, maxDepth, id) {
    _classCallCheck(this, Ray);

    this.line = new line_1.Line(position, direction, app_1.width + app_1.height);
    this.id = id;
    this.maxDepth = maxDepth;
    this.depth = depth;
    this.shadowRays = [];
    this.collisionObject = null;
    this.collision = null;
    this.reflectingIntensities = [0, 0, 0]; // if (rnds.length < 1) {
    //   this.rnds = [];
    //   for (let i = 0; i < maxDepth; i++) {
    //     this.rnds.push(Math.random());
    //     this.rnds.push(Math.random());
    //   }
    // } else {
    //   this.rnds = rnds;
    // }
  }

  _createClass(Ray, [{
    key: "getNextRay",
    value: function getNextRay() {
      if (this.collision != null) {
        return this.collision.getNextRay();
      }

      return null;
    }
  }, {
    key: "getShadowRays",
    value: function getShadowRays() {
      return this.shadowRays;
    }
  }, {
    key: "getLine",
    value: function getLine() {
      return this.line;
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }, {
    key: "getDepth",
    value: function getDepth() {
      return this.depth;
    }
  }, {
    key: "getMaxDepth",
    value: function getMaxDepth() {
      return this.maxDepth;
    }
  }, {
    key: "getReflectingIntensities",
    value: function getReflectingIntensities() {
      if (this.collision != null) {
        return this.collision.getReflectingIntensities();
      }

      return this.reflectingIntensities;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var onlyCollision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var _a;

      if (!onlyCollision) {
        ctx.pushStyle();
        this.line.draw(ctx, this.id);
        ctx.popStyle();
      }

      (_a = this.collision) === null || _a === void 0 ? void 0 : _a.draw(ctx, onlyCollision); // ctx.pushStyle();
      // ctx.setStroke(ctx.getDrawState().getShadowRayColor());
      // for (let i = 0; Main.Instance.getCTX().getDrawState().getDisplayShadowRays() && i < this.shadowRays.length; i++) {
      //   this.shadowRays[i].draw(ctx);
      // }
      // ctx.popStyle();
    }
  }, {
    key: "reset",
    value: function reset() {
      this.collision = null;
      this.shadowRays = [];
      this.line = new line_1.Line(this.line.getPosition(), this.line.getDirection(), app_1.width + app_1.height);
      this.collisionObject = null;
    }
    /**
     * @description Recursive method to calculate all rays and ray collisions
     * @param  {(Line|Rect)[]} collisionCollection Array with objects to collide with
     * @param  {Lamp[]} lamps Array with all Lamps for shadow rays
     */

  }, {
    key: "recalculateRay",
    value: function recalculateRay(collisionCollection, lamps) {
      this.reset(); //Calculate if collision happend an where and a collision axis

      var collisionLine;
      var collisionAxis;
      var colEvent;

      var _iterator = _createForOfIteratorHelper(collisionCollection),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var el = _step.value;

          if (el instanceof line_1.Line) {
            colEvent = new collisionEvent_1.CollisionLineEvent(this.line, el);

            if (colEvent.getNewLines().length > 0) {
              this.line = colEvent.getLine();
              collisionLine = colEvent.getNewLines()[0];
              this.collisionObject = colEvent.getObject();
            }
          } else if (el instanceof rect_1.Rect) {
            var intersects = el.getIntersect(this.line);

            if (intersects != null && intersects.length > 0) {
              var _iterator2 = _createForOfIteratorHelper(intersects),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _step2$value = _slicedToArray(_step2.value, 6),
                      x = _step2$value[0],
                      y = _step2$value[1],
                      t1 = _step2$value[2],
                      t2 = _step2$value[3],
                      line1 = _step2$value[4],
                      line2 = _step2$value[5];

                  if (t2 != undefined && t2 > 0 && t2 < this.line.getLength()) {
                    var tempLine = new line_1.Line(this.line.getPosition(), this.line.getDirection(), t2);

                    if (tempLine.getRealLength() > 1) {
                      this.line = tempLine;
                      collisionAxis = line1.getNormal();
                      collisionLine = new line_1.Line(new vector_1.Vector(x, y), line1.getNormal().getRotated(line1.getNormal().getAngleBetween(this.line.getDirection().getInverted())), 1);
                      this.collisionObject = el;
                    }
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (collisionLine != undefined && this.collisionObject instanceof rect_1.Rect && collisionAxis != undefined) {
        this.collision = new collision_1.Collision(collisionLine.getPosition(), this.collisionObject, collisionLine, collisionAxis, this.depth, this.maxDepth, this, this.id + "_col");
        this.collision.recalculateRay(collisionCollection, lamps);
      } //If collision happend, do shadow rays, and further recursive rays
      // if (collisionLine != undefined && this.depth < this.maxDepth) {
      //   //Shadow Rays
      //   for (let i = 0; i < lamps.length; i++) {
      //     if (lamps[i].getOn() == false) continue;
      //     this.shadowRays.push(
      //       new ShadowRay(
      //         this.line.getEndPosition(),
      //         lamps[i].getPosition().getAddedVector(this.line.getEndPosition().getInverted()),
      //         lamps[i],
      //         this.id + "_sr" + i + "_" + this.depth.toString()
      //       )
      //     );
      //     this.shadowRays[this.shadowRays.length - 1].recalculateRay(collisionCollection, lamps);
      //   }
      //   //Diffuse and specular rays
      //   if (collisionAxis != undefined) {
      //     let difAngle = 0;
      //     let specAngle = 0;
      //     if (this.collisionObject instanceof Rect) {
      //       difAngle = ((this.rnds[this.depth * 2] * 2 - 1) * Math.PI) / 2;
      //       let difDirection = collisionAxis.getRotated(difAngle).getNormalized();
      //       let difRay = new Ray(
      //         collisionLine.getPosition(),
      //         difDirection,
      //         this.depth + 1,
      //         this.maxDepth,
      //         this.id + "_dif" + (this.depth + 1).toString()
      //       );
      //       difRay.recalculateRay(collisionCollection, lamps);
      //       specAngle = ((this.rnds[this.depth * 2 + 1] * 2 - 1) * /*1 -*/ this.collisionObject.getMaterial().getSpecular() * Math.PI) / 20;
      //       let specDirection = collisionLine.getDirection().getRotated(specAngle).getNormalized();
      //       let specRay = new Ray(
      //         collisionLine.getPosition(),
      //         specDirection,
      //         this.depth + 1,
      //         this.maxDepth,
      //         this.id + "_spec" + (this.depth + 1).toString()
      //       );
      //       specRay.recalculateRay(collisionCollection, lamps);
      //       this.nextRays.push(difRay);
      //       this.nextRays.push(specRay);
      //     } else {
      //       //If no axis could be found, do mirror-like reflecting
      //       this.nextRays.push(
      //         new Ray(
      //           collisionLine.getPosition(),
      //           collisionLine.getDirection(),
      //           this.depth + 1,
      //           this.maxDepth,
      //           this.id + "_" + (this.depth + 1).toString()
      //         )
      //       );
      //       this.nextRays[this.nextRays.length - 1].recalculateRay(collisionCollection, lamps);
      //     }
      //     this.recalculateReflectingIntensities(difAngle, specAngle);
      //   }
      // } else {
      //   this.recalculateReflectingIntensities(0, 0);
      // }

    }
    /**
     * @description Method to return the colors of ray collisions
     * @param  {number} difAngle Angle of diffuse ray
     * @param  {number} specAngle Angle of specular ray
     */

  }, {
    key: "recalculateReflectingIntensities",
    value: function recalculateReflectingIntensities() {//   let r = 0;
      //   let g = 0;
      //   let b = 0;
      //   let diffuse = [0, 0, 0];
      //   //If there are further rays, set diffuse RGB to color from diffuse ray
      //   if (this.nextRays[0] != undefined && this.collisionObject instanceof Rect) {
      //     diffuse = this.nextRays[0].getReflectingIntensities();
      //     diffuse[0] *= Math.cos(difAngle) * (1 - this.collisionObject.getMaterial().getDiffuse() / 2);
      //     diffuse[1] *= Math.cos(difAngle) * (1 - this.collisionObject.getMaterial().getDiffuse() / 2);
      //     diffuse[2] *= Math.cos(difAngle) * (1 - this.collisionObject.getMaterial().getDiffuse() / 2);
      //     // console.log(r, g, b);
      //   }
      //   //Constant ambient
      //   let ambient = [255, 255, 255];
      //   let ambient_intensity = 0.1;
      //   let li = 0;
      //   //Sum up Lamps intensities
      //   for (let sr of this.shadowRays) {
      //     if (!sr.getBlocked()) {
      //       li += sr.getLamp().getLampMaterial().getIntensity() / (sr.getLine().getRealLength() / 200 + 1) ** 2;
      //     }
      //   }
      //   //Get color from col object
      //   if (this.collisionObject instanceof Rect) {
      //     let color = this.collisionObject.getColor();
      //     if (color[0] == "#") {
      //       r = parseInt(color.slice(1, 3), 16);
      //       g = parseInt(color.slice(3, 5), 16);
      //       b = parseInt(color.slice(5, 7), 16);
      //     }
      //     //Add color  * lamp_intensity + ambient
      //     r = li * (r + ambient_intensity * ambient[0] + diffuse[0]);
      //     g = li * (g + ambient_intensity * ambient[1] + diffuse[1]);
      //     b = li * (b + ambient_intensity * ambient[2] + diffuse[2]);
      //   } else {
      //     //If no collision, just use ambient
      //     r = ambient_intensity * ambient[0];
      //     g = ambient_intensity * ambient[1];
      //     b = ambient_intensity * ambient[2];
      //   }
      //   //Constrain to int rgb
      //   r = this.constrain255(Math.round(r));
      //   g = this.constrain255(Math.round(g));
      //   b = this.constrain255(Math.round(b));
      //   this.reflectingIntensities = [r, g, b];
      //   //console.log(this.reflectingIntensities);
    }
  }, {
    key: "constrain255",
    value: function constrain255(x) {
      return x < 0 ? 0 : x > 255 ? 255 : x;
    }
  }]);

  return Ray;
}();

exports.Ray = Ray;
},{"../app":"EVxB","./line":"b0Vr","./rect":"uowC","./vector":"ir7B","./collisionEvent":"bQSQ","./collision":"sPG7"}],"vE2L":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectLine = void 0;

var ProjectLine = /*#__PURE__*/function () {
  function ProjectLine(pos, dir, size, id) {
    _classCallCheck(this, ProjectLine);

    this.pos = pos;
    this.dir = dir;
    this.size = size;
    this.id = id;
    this.colors = ["#000000"];
  }

  _createClass(ProjectLine, [{
    key: "getSize",
    value: function getSize() {
      return this.size;
    }
  }, {
    key: "setSize",
    value: function setSize(size) {
      this.size = size;
    }
  }, {
    key: "setColors",
    value: function setColors(colors) {
      this.colors = colors.length < 1 ? ["#000000"] : colors;
    }
  }, {
    key: "setPosition",
    value: function setPosition(pos) {
      this.pos = pos;
    }
  }, {
    key: "setDirection",
    value: function setDirection(dir) {
      this.dir = dir;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var delta = this.size / this.colors.length;
      var width = 5;
      var normal = this.dir.getNormal().getInverted();
      ctx.pushStyle();
      ctx.setFill("#808080");
      ctx.addRect(this.pos.getAddedVector(this.dir.getMult(0)).getX(), this.pos.getAddedVector(this.dir.getMult(0)).getY(), this.pos.getAddedVector(this.dir.getMult(width)).getX(), this.pos.getAddedVector(this.dir.getMult(width)).getY(), this.pos.getAddedVector(this.dir.getMult(width).getAddedVector(normal.getMult(this.size))).getX(), this.pos.getAddedVector(this.dir.getMult(width).getAddedVector(normal.getMult(this.size))).getY(), this.pos.getAddedVector(this.dir.getMult(0).getAddedVector(normal.getMult(this.size))).getX(), this.pos.getAddedVector(this.dir.getMult(0).getAddedVector(normal.getMult(this.size))).getY(), this.id + "_bg");

      for (var i = 0; i < this.colors.length; i++) {
        ctx.setFill(this.colors[i]);
        ctx.setStroke("none");
        ctx.addRect(this.pos.getAddedVector(this.dir.getMult(0).getAddedVector(normal.getMult(delta * i))).getX(), this.pos.getAddedVector(this.dir.getMult(0).getAddedVector(normal.getMult(delta * i))).getY(), this.pos.getAddedVector(this.dir.getMult(width).getAddedVector(normal.getMult(delta * i))).getX(), this.pos.getAddedVector(this.dir.getMult(width).getAddedVector(normal.getMult(delta * i))).getY(), this.pos.getAddedVector(this.dir.getMult(width).getAddedVector(normal.getMult(delta * i + delta))).getX(), this.pos.getAddedVector(this.dir.getMult(width).getAddedVector(normal.getMult(delta * i + delta))).getY(), this.pos.getAddedVector(this.dir.getMult(0).getAddedVector(normal.getMult(delta * i + delta))).getX(), this.pos.getAddedVector(this.dir.getMult(0).getAddedVector(normal.getMult(delta * i + delta))).getY(), this.id + "_" + i);
      }

      ctx.popStyle();
    }
  }]);

  return ProjectLine;
}();

exports.ProjectLine = ProjectLine;
},{}],"ClDD":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GUIDraw = void 0;

var app_1 = require("../app");

var GUIDraw = /*#__PURE__*/function () {
  function GUIDraw() {
    _classCallCheck(this, GUIDraw);

    this.redraw = false;
    app_1.CANVAS.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    app_1.CANVAS.setAttribute("version", "1.1");
    app_1.CANVAS.setAttribute("baseProfile", "full");
  }

  _createClass(GUIDraw, [{
    key: "needRedraw",
    value: function needRedraw() {
      this.redraw = true;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      app_1.CANVAS.setAttribute("width", ctx.getWidth().toString());
      app_1.CANVAS.setAttribute("height", ctx.getHeight().toString());

      if (app_1.CANVAS.innerHTML == "" || this.redraw) {
        //span.style.width = "400px";
        //span.style.height = "400px";
        //span.setAttribute("viewbox", "0 0 400 400");
        console.log("Redraw");
        app_1.CANVAS.style.backgroundColor = ctx.getDrawState().getDarkMode() ? "#000" : "#fff";
        app_1.CANVAS.innerHTML = ctx.getSVG(); //['<img src="', "data:image/svg+xml;charset=utf-8," + encodeURIComponent(ctx.getSVG()), '" title="', "out.svg", '"/>'].join("");
        //GENERATE SVG as OUTPUT

        var not_svg = document.getElementById("svg");

        if (false && not_svg != null) {
          var clonedSvgElement = app_1.CANVAS.cloneNode(true);
          var outerHTML = clonedSvgElement.outerHTML,
              blob = new Blob([outerHTML], {
            type: "image/svg+xml;charset=utf-8"
          });
          var blobURL = URL.createObjectURL(blob);
          not_svg.src = blobURL;
        } //output.insertBefore(span, null);

      } else {//canvas.innerHTML = ctx.getSVG(); //['<img src="', "data:image/svg+xml;charset=utf-8," + encodeURIComponent(ctx.getSVG()), '" title="', "out.svg", '"/>'].join("");
        }

      this.redraw = false;
    }
  }], [{
    key: "Instance",
    get: function get() {
      return this._instance || (this._instance = new this());
    }
  }]);

  return GUIDraw;
}();

exports.GUIDraw = GUIDraw;
},{"../app":"EVxB"}],"ckrW":[function(require,module,exports) {
"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Camera = void 0;

var app_1 = require("../app");

var vector_1 = require("./vector");

var ray_1 = require("./ray");

var projectLine_1 = require("../render_classes/projectLine");

var GUIDraw_1 = require("../gui_classes/GUIDraw");
/**
 * @description Class which handles all of the camera
 * @param  {Vector} position Position of the camera
 * @param  {Vector} direction Direction of the camera
 * @param  {number} depth Starting depth for the first ray
 * @param  {number} maxDepth Maximum depth for the rays
 * @param  {string} id Identifikationstring for HTML
 */


var Camera = /*#__PURE__*/function () {
  function Camera(position, direction, depth, maxDepth, id) {
    var name = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";

    _classCallCheck(this, Camera);

    this.pos = position;
    this.dir = direction;
    this.id = id;
    this.name = name;
    this.maxDepth = maxDepth;
    this.depth = depth;
    this.rays = [];
    this.oneRayMode = false;
    this.drawRays = true;
    this.rayIndex = 0;
    this.amount = 1;
    this.angle = Math.PI / 2;
    this.createRays();
    this.projectLine = new projectLine_1.ProjectLine(this.pos, this.dir, 50, this.id + "_pl_");
  }

  _createClass(Camera, [{
    key: "getRays",
    value: function getRays() {
      return this.rays;
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getAmount",
    value: function getAmount() {
      return this.amount;
    }
  }, {
    key: "getAngle",
    value: function getAngle() {
      return this.angle;
    }
  }, {
    key: "getDepth",
    value: function getDepth() {
      return this.depth;
    }
  }, {
    key: "getMaxDepth",
    value: function getMaxDepth() {
      return this.maxDepth;
    }
    /**
     * @desription Enables the mode in which only one ray is drawn at a time
     * @param  {boolean} b New value of the mode, True = only one ray
     */

  }, {
    key: "setOneRayMode",
    value: function setOneRayMode(b) {
      this.oneRayMode = b;
    }
    /**
     * @description Sets if rays should be visible
     * @param  {boolean} b New value, True = visible
     */

  }, {
    key: "setDrawRays",
    value: function setDrawRays(b) {
      this.drawRays = b;
      GUIDraw_1.GUIDraw.Instance.needRedraw();
    }
  }, {
    key: "getRayIndex",
    value: function getRayIndex() {
      return this.rayIndex;
    }
  }, {
    key: "setRayIndex",
    value: function setRayIndex(x) {
      this.rayIndex = x;
    }
    /**
     * @description Increments the current ray index for one ray mode
     */

  }, {
    key: "incrementRayIndex",
    value: function incrementRayIndex() {
      this.rayIndex = this.rays.length > 0 ? (this.rayIndex + 1) % this.rays.length : 0;
    }
  }, {
    key: "raysDraw",
    value: function raysDraw(ctx) {
      var onlyCollision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.oneRayMode && ctx.getDrawState().getAnimatedCamera() == false) {
        return; //Do not draw Animation camera rays
      } //Draw Rays


      if (!this.drawRays || !ctx.getDrawState().getDisplayRays()
      /*&& this.rays.length > 0*/
      ) {//this.rays[0].draw(ctx);
          //this.rays[this.rays.length - 1].draw(ctx);
        } else if (this.oneRayMode && this.rays.length > 0 && this.rayIndex >= 0 && this.rayIndex < this.rays.length) {
        this.rays[this.rayIndex].draw(ctx, onlyCollision);
      } else {
        var _iterator = _createForOfIteratorHelper(this.rays),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var r = _step.value;
            r.draw(ctx, onlyCollision);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      if (this.oneRayMode && ctx.getDrawState().getAnimatedCamera() == false) {
        return; //Do not draw Animation camera
      } //Draw Collisions


      this.raysDraw(ctx, true); //Draw Camera

      var normalizedDir = this.dir.getNormalized();
      var normal = normalizedDir.getNormal();
      ctx.pushStyle();
      ctx.setFill(ctx.getDrawState().getDarkMode() ? "black" : "white");
      ctx.addCam(this.pos.getX(), this.pos.getY(), normalizedDir, 25, this.id, this.name, this);
      ctx.popStyle(); //Draw Screen

      this.projectLine.setColors(this.getRayColors());
      this.projectLine.setPosition(this.pos.getAddedVector(normalizedDir.getMult(25).getAddedVector(normal.getMult(25))));
      this.projectLine.setDirection(normalizedDir);
      this.projectLine.draw(ctx);
    } //Move for mouse movements

  }, {
    key: "move",
    value: function move(x, y, dx, dy) {
      //this.pos.add(dx, dy);
      this.pos = new vector_1.Vector(x - app_1.CANVAS.getBoundingClientRect().left, y - app_1.CANVAS.getBoundingClientRect().top);
      this.createRays();
    } //Rotate for mouse movements

  }, {
    key: "rotate",
    value: function rotate(x, y, dx, dy) {
      this.dir = new vector_1.Vector(x - app_1.CANVAS.getBoundingClientRect().left - this.pos.getX(), y - app_1.CANVAS.getBoundingClientRect().top - this.pos.getY());
      this.createRays();
    }
    /**
     * @description Function that is called from the Context Menu
     * @param  {string} func The id of the Context Element
     * @param  {number} val The value of the Context Element
     * @param  {any} e The mouse event from the Context Element
     */

  }, {
    key: "doFunction",
    value: function doFunction(func, val, e) {
      var _this = this;

      if (func == "rotate") {
        this.rotate(e.x, e.y, e.movementX, e.movementY);
      } else if (func == "rotation") {
        //Setting rotation from Context Menu Input Element
        var numberPick = document.getElementById("numberPicker_rotation");

        if (numberPick == null) {} else {
          numberPick.oninput = function () {
            var a = Number(numberPick.value) / 180 * Math.PI;
            _this.dir = new vector_1.Vector(Math.cos(a), Math.sin(a));

            _this.createRays();
          };
        }
      } else if (func == "rays") {
        //Setting number of rays from Context Menu Input Element
        var _numberPick = document.getElementById("numberPicker_rays");

        if (_numberPick == null) {} else {
          _numberPick.oninput = function () {
            if (Number(_numberPick.value) < 1) {
              _numberPick.value = "1";
            }

            _this.setRays(Number(_numberPick.value));

            _this.createRays();
          };
        }
      } else if (func == "rayDepth") {
        //Setting max ray depth from Context Menu Input Element
        var _numberPick2 = document.getElementById("numberPicker_rayDepth");

        if (_numberPick2 == null) {} else {
          _numberPick2.oninput = function () {
            if (Number(_numberPick2.value) < 1) {
              _numberPick2.value = "1";
            }

            _this.maxDepth = Number(_numberPick2.value);

            _this.createRays();

            GUIDraw_1.GUIDraw.Instance.needRedraw();
          };
        }
      } else if (func == "angle") {
        //Setting view angle from Context Menu Input Element
        var _numberPick3 = document.getElementById("numberPicker_angle");

        if (_numberPick3 == null) {} else {
          _numberPick3.oninput = function () {
            if (Number(_numberPick3.value) < 1) {
              _numberPick3.value = "1";
            } else if (Number(_numberPick3.value) > 90) {
              _numberPick3.value = "90";
            }

            var a = Number(_numberPick3.value) / 180 * Math.PI;

            _this.setRays(_this.amount, a);

            _this.createRays();
          };
        }
      } else if (func == "draw_rays") {
        //Toggles ray visibility
        this.setDrawRays(!this.drawRays);
      } else if (func == "new_rays") {
        //Calculates new rays
        this.createRays();
      }
    }
    /**
     * @description Method to return ContextMenuAttributes array to the Context Menu
     * @returns ContextMenuAttributes
     */

  }, {
    key: "getContextAttributes",
    value: function getContextAttributes() {
      return [{
        name: "Rotation",
        id: "rotation",
        type: "number",
        value: Math.round(Math.atan2(this.dir.getY(), this.dir.getX()) / Math.PI * 180)
      }, {
        name: "Rays",
        id: "rays",
        type: "number",
        value: this.amount
      }, {
        name: "Ray Depth",
        id: "rayDepth",
        type: "number",
        value: this.maxDepth
      }, {
        name: "Ray Angle",
        id: "angle",
        type: "number",
        value: Math.round(this.angle / Math.PI * 180)
      }, {
        name: "Draw Rays",
        id: "draw_rays",
        type: "lever",
        value: Number(this.drawRays)
      } // { name: "New Random Rays", id: "new_rays", type: "", value: 0 },
      ];
    } //

    /**
     * @description Clears rays
     */

  }, {
    key: "reset",
    value: function reset() {
      this.rays = [];
    }
    /**
     * @description Set number and view angle of rays
     * @param  {number=this.amount} n Number of Rays
     * @param  {number=this.angle} a Viewing angle
     */

  }, {
    key: "setRays",
    value: function setRays() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.amount;
      var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.angle;
      this.amount = n < 1 ? 1 : n;
      this.angle = a;
      this.createRays();
    }
    /**
     * @description Resets rays, and generates new ones with the new properties
     */

  }, {
    key: "createRays",
    value: function createRays() {
      this.reset();
      var update = this.amount % 2 == 0 ? "0" : "";

      if (this.amount > 1) {
        for (var i = 0; i < this.amount; i++) {
          this.rays[i] = new ray_1.Ray(this.pos, this.dir.getRotated(-this.angle / 2 + this.angle / (this.amount - 1) * i), 0, this.maxDepth, this.id + "_ray" + update + i);
        }
      } else {
        this.rays[0] = new ray_1.Ray(this.pos, this.dir, 0, this.maxDepth, this.id + "_ray_single");
      }
    }
    /**
     * @description Start of recursive Method to calculate all rays and ray collisions
     * @param  {(Line|Rect)[]} collisionCollection Array with objects to collide with
     * @param  {Lamp[]} lamps Array with all Lamps for shadow rays
     */

  }, {
    key: "recalculateRay",
    value: function recalculateRay(collisionCollection, lamps) {
      if (this.oneRayMode && this.rays.length > 0 && this.rayIndex >= 0 && this.rayIndex < this.rays.length) {
        //In one ray mode recalculate only current ray index ray
        this.rays[this.rayIndex].recalculateRay(collisionCollection, lamps);
      } else {
        //Otherwise recalculate all rays
        var _iterator2 = _createForOfIteratorHelper(this.rays),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var r = _step2.value;
            r.recalculateRay(collisionCollection, lamps);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
    /**
     * @description Method to return the colors of ray collisions
     * @return {colors} RGB values of current ray collision
     */

  }, {
    key: "getRayColors",
    value: function getRayColors() {
      var colors = [];

      var _iterator3 = _createForOfIteratorHelper(this.rays),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var r = _step3.value;
          var col = r.getReflectingIntensities();
          var rh = Math.round(col[0]).toString(16).length == 1 ? "0" + col[0].toString(16) : col[0].toString(16);
          var gh = Math.round(col[1]).toString(16).length == 1 ? "0" + col[1].toString(16) : col[1].toString(16);
          var bh = Math.round(col[2]).toString(16).length == 1 ? "0" + col[2].toString(16) : col[2].toString(16);
          colors.push("#" + rh + gh + bh);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return colors;
    }
  }]);

  return Camera;
}();

exports.Camera = Camera;
},{"../app":"EVxB","./vector":"ir7B","./ray":"Iu6L","../render_classes/projectLine":"vE2L","../gui_classes/GUIDraw":"ClDD"}],"wHw1":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Lamp = void 0;

var vector_1 = require("./vector");

var app_1 = require("../app");
/**
 * @description Lamps give light to the colors calculation if hit by shadow ray
 * @param  {Vector} position Starting Position
 * @param  {LampMaterial} lampMaterial Material of the lamp, handles intensity
 * @param  {string} id Identifikationstring for HTML
 */


var Lamp = /*#__PURE__*/function () {
  function Lamp(position, lampMaterial, id) {
    _classCallCheck(this, Lamp);

    this.pos = position;
    this.lampMaterial = lampMaterial;
    this.on = true;
    this.id = id;
    this.delete = false;
  }

  _createClass(Lamp, [{
    key: "getPosition",
    value: function getPosition() {
      return this.pos;
    }
  }, {
    key: "getLampMaterial",
    value: function getLampMaterial() {
      return this.lampMaterial;
    }
  }, {
    key: "getOn",
    value: function getOn() {
      return this.on;
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }, {
    key: "getDelete",
    value: function getDelete() {
      return this.delete;
    }
  }, {
    key: "move",
    value: function move(x, y, dx, dy) {
      //this.pos.add(dx, dy);
      this.pos = new vector_1.Vector(x - app_1.CANVAS.getBoundingClientRect().left, y - app_1.CANVAS.getBoundingClientRect().top);
    }
  }, {
    key: "onOff",
    value: function onOff() {
      this.on = !this.on;
    }
  }, {
    key: "doFunction",
    value: function doFunction(func, val, e) {
      var _this = this;

      switch (func) {
        case "move":
          this.move(e.x, e.y, e.movementX, e.movementY);
          break;

        case "onOff":
          this.onOff();
          break;

        case "intensity":
          var numberPick = document.getElementById("numberPicker_intensity");

          if (numberPick == null) {} else {
            numberPick.oninput = function () {
              _this.lampMaterial.setIntensity(Number(numberPick.value));

              if (Number(numberPick.value) < 1) {
                numberPick.value = "1";
              } else if (Number(numberPick.value) > 100) {
                numberPick.value = "100";
              }
            };
          }

          break;

        case "delete":
          this.delete = true;
          break;
      }
    }
  }, {
    key: "getContextAttributes",
    value: function getContextAttributes() {
      return [{
        name: "On/Off",
        id: "onOff",
        type: "lever",
        value: Number(this.on)
      }, {
        name: "Intensity",
        id: "intensity",
        type: "number",
        value: this.lampMaterial.getIntensity()
      }, {
        name: "Remove",
        id: "delete",
        type: "",
        value: 0
      }];
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.pushStyle();
      ctx.setFill("#e0e0e0");

      if (this.on) {
        if (ctx.getDrawState().getDarkMode()) {
          ctx.setFill("#000000");
        } else {
          ctx.setFill("#ffffff");
        }
      }

      ctx.addCircle(this.pos.getX(), this.pos.getY(), 7, this.id + "_0" + (this.on ? "" : "_off"), this);
      ctx.popStyle();
      ctx.pushStyle();
      ctx.addLine(this.pos.getX() - 5, this.pos.getY() - 5, this.pos.getX() + 5, this.pos.getY() + 5, this.id + "_1");
      ctx.addLine(this.pos.getX() - 5, this.pos.getY() + 5, this.pos.getX() + 5, this.pos.getY() - 5, this.id + "_2");
      ctx.popStyle();
    }
  }]);

  return Lamp;
}();

exports.Lamp = Lamp;
},{"./vector":"ir7B","../app":"EVxB"}],"R0og":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextElement = void 0;

var ContextElement = /*#__PURE__*/function () {
  function ContextElement(x, y, content, func, type, value, element) {
    var textSize = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 16;

    _classCallCheck(this, ContextElement);

    this.x = x;
    this.y = y;
    this.content = content;
    this.func = func;
    this.type = type;
    this.value = value;
    this.elem = element;
    this.textSize = textSize;
    var p = document.createElement("p");
    p.textContent = content;
    p.className = "contextElement";
    p.style.fontSize = textSize + "px";
    var b = p.getBoundingClientRect();
    this.w = b.width;
    this.h = b.height; //console.log(this.h);
  }

  _createClass(ContextElement, [{
    key: "getX",
    value: function getX() {
      return this.x;
    }
  }, {
    key: "getY",
    value: function getY() {
      return this.y;
    }
  }, {
    key: "getContent",
    value: function getContent() {
      return this.content;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.w;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.h;
    }
  }, {
    key: "getHTMLElement",
    value: function getHTMLElement() {
      var _this = this;

      var p = document.createElement("div");
      p.textContent = this.content;

      switch (this.type) {
        case "number":
          p.className = "contextElement";
          p.style.fontSize = this.textSize + "px";
          var numPick = document.createElement("input");
          numPick.type = "number";
          numPick.id = "numberPicker_" + this.func;
          numPick.className = "contextElement_input";
          numPick.value = this.value.toString(); //CONTEXT_MENU.lastChild?.appendChild(colPick);

          p.appendChild(numPick);

          p.onclick = function (e) {
            _this.elem.doFunction(_this.func, _this.value, e);
          };

          break;

        case "color":
          p.className = "contextElement";
          p.style.fontSize = this.textSize + "px";
          var colPick = document.createElement("input");
          colPick.type = "color";
          colPick.id = "colorPicker_" + this.func;
          colPick.className = "contextElement_input"; // colPick.value = (this.elem as Rect).getColor();

          colPick.value = this.value.toString(); //CONTEXT_MENU.lastChild?.appendChild(colPick);

          p.appendChild(colPick);

          p.onclick = function (e) {
            _this.elem.doFunction(_this.func, _this.value, e);
          };

          break;

        case "lever":
          p.className = "contextElement";
          p.style.fontSize = this.textSize + "px";
          var lever = document.createElement("div"); //let lever = document.createElement("button");
          //lever.className = "mdc-switch";
          //lever.setAttribute("width", "100px");

          lever.innerHTML = "◯"; //○◯⬯

          if (this.value == 0) {
            lever.className = "contextElement_lever_off";
          } else {
            lever.className = "contextElement_lever_on";
          }

          lever.style.fontSize = this.textSize * 0.75 + "px";
          p.appendChild(lever);

          p.onclick = function (e) {
            if (lever.className == "contextElement_lever_on") {
              lever.className = "contextElement_lever_off";
              _this.value = 0;
            } else {
              lever.className = "contextElement_lever_on";
              _this.value = 1;
            }

            _this.elem.doFunction(_this.func, _this.value, e);
          };

          break;

        default:
          p.className = "contextElement";
          p.style.fontSize = this.textSize + "px";

          p.onclick = function (e) {
            _this.elem.doFunction(_this.func, _this.value, e);
          };

      }

      return p;
    }
  }]);

  return ContextElement;
}();

exports.ContextElement = ContextElement;
},{}],"TvkX":[function(require,module,exports) {
"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextMenu = void 0;

var app_1 = require("../app");

var ContextElement_1 = require("./ContextElement");

var ContextMenu = /*#__PURE__*/function () {
  function ContextMenu() {
    _classCallCheck(this, ContextMenu);

    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;
    this.elements = [];
    this.setup();
    this.updateStyle();
  }

  _createClass(ContextMenu, [{
    key: "setup",
    value: function setup() {
      app_1.CONTEXT_MENU.oncontextmenu = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
      };
    }
  }, {
    key: "reset",
    value: function reset() {
      this.x = 0;
      this.y = 0;
      this.w = 0;
      this.h = 0;
      this.elements = [];
      var lc = app_1.CONTEXT_MENU.lastChild;

      while (lc != null) {
        app_1.CONTEXT_MENU.removeChild(lc);
        lc = app_1.CONTEXT_MENU.lastChild;
      }

      this.updateStyle();
    }
  }, {
    key: "updateStyle",
    value: function updateStyle() {
      app_1.CONTEXT_MENU.style.left = (this.x + window.scrollX).toString() + "px";
      app_1.CONTEXT_MENU.style.top = (this.y + window.scrollY).toString() + "px";
      app_1.CONTEXT_MENU.style.width = this.w.toString() + "px";

      if (this.w == 0) {
        app_1.CONTEXT_MENU.style.display = "none";
      } else {
        app_1.CONTEXT_MENU.style.display = "inline-block";
      } //CONTEXT_MENU.style.height = this.h.toString() + "px";

    }
  }, {
    key: "updateElements",
    value: function updateElements() {
      var _iterator = _createForOfIteratorHelper(this.elements),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var e = _step.value;
          app_1.CONTEXT_MENU.appendChild(e.getHTMLElement());
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "draw",
    value: function draw(x, y, contents, element) {
      this.reset();

      for (var i = 0; i < contents.length; i++) {
        this.elements.push(new ContextElement_1.ContextElement(x, y + 17 * i, contents[i].name, contents[i].id, contents[i].type, contents[i].value, element));
      }

      this.updateElements();
      this.x = x - 5; //CANVAS.getBoundingClientRect().left + x;

      this.y = y - 5; //CANVAS.getBoundingClientRect().top + y;

      this.w = 175;
      this.h = 23 * this.elements.length;
      this.updateStyle();
    }
  }], [{
    key: "Instance",
    get: function get() {
      return this._instance || (this._instance = new this());
    }
  }]);

  return ContextMenu;
}();

exports.ContextMenu = ContextMenu;
},{"../app":"EVxB","./ContextElement":"R0og"}],"Rr05":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SVGStyle = void 0;

var SVGStyle = /*#__PURE__*/function () {
  function SVGStyle(ctx, stroke, fill, strokeWidth) {
    _classCallCheck(this, SVGStyle);

    this.stroke = ctx.getDrawState().getDarkMode() ? "white" : "black";
    this.fill = "none";
    this.strokeWidth = "1.5px";
  }

  _createClass(SVGStyle, [{
    key: "setStroke",
    value: function setStroke(s) {
      this.stroke = s;
    }
  }, {
    key: "setFill",
    value: function setFill(s) {
      this.fill = s;
    }
  }, {
    key: "setStrokeWidth",
    value: function setStrokeWidth(s) {
      this.strokeWidth = s;
    }
  }, {
    key: "getStroke",
    value: function getStroke() {
      return this.stroke;
    }
  }, {
    key: "getFill",
    value: function getFill() {
      return this.fill;
    }
  }, {
    key: "getStrokeWidth",
    value: function getStrokeWidth() {
      return this.strokeWidth;
    }
  }]);

  return SVGStyle;
}();

exports.SVGStyle = SVGStyle;
},{}],"pTgs":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DrawState = void 0;

var DrawState = /*#__PURE__*/function () {
  function DrawState() {
    _classCallCheck(this, DrawState);

    this.displayRays = true;
    this.displayShadowRays = true;
    this.displayColisionData = true;
    this.shadowRayColor = "#909090";
    this.animatedCamera = false;
    this.darkMode = false;
  }

  _createClass(DrawState, [{
    key: "setDisplayRays",
    value: function setDisplayRays(b) {
      this.displayRays = b;
    }
  }, {
    key: "getDisplayRays",
    value: function getDisplayRays() {
      return this.displayRays;
    }
  }, {
    key: "setDisplayShadowRays",
    value: function setDisplayShadowRays(b) {
      this.displayShadowRays = b;
    }
  }, {
    key: "getDisplayShadowRays",
    value: function getDisplayShadowRays() {
      return this.displayShadowRays;
    }
  }, {
    key: "setDisplayColisionData",
    value: function setDisplayColisionData(b) {
      this.displayColisionData = b;
    }
  }, {
    key: "getDisplayColisionData",
    value: function getDisplayColisionData() {
      return this.displayColisionData;
    }
  }, {
    key: "setAnimatedCamera",
    value: function setAnimatedCamera(b) {
      this.animatedCamera = b;
    }
  }, {
    key: "getAnimatedCamera",
    value: function getAnimatedCamera() {
      return this.animatedCamera;
    }
  }, {
    key: "setDarkMode",
    value: function setDarkMode(b) {
      this.darkMode = b;
    }
  }, {
    key: "getDarkMode",
    value: function getDarkMode() {
      return this.darkMode;
    }
  }, {
    key: "setShadowRayColor",
    value: function setShadowRayColor(b) {
      this.shadowRayColor = b;
    }
  }, {
    key: "getShadowRayColor",
    value: function getShadowRayColor() {
      return this.shadowRayColor;
    }
  }]);

  return DrawState;
}();

exports.DrawState = DrawState;
},{}],"bIrb":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DrawContext = void 0;

var ContextMenu_1 = require("./ContextMenu");

var GUIDraw_1 = require("./GUIDraw");

var SVGStyle_1 = require("./SVGStyle");

var DrawState_1 = require("./DrawState");

var vector_1 = require("../collision_classes/vector");

var DrawContext = /*#__PURE__*/function () {
  function DrawContext(width, height) {
    _classCallCheck(this, DrawContext);

    this.svg = "";
    this.width = width;
    this.height = height;
    this.style = [];
    this.drawState = new DrawState_1.DrawState();
    this.style.push(new SVGStyle_1.SVGStyle(this));
  }

  _createClass(DrawContext, [{
    key: "getSVG",
    value: function getSVG() {
      return this.svg; //`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" width="${this.width}px" height="${this.height}px">` + this.svg + `</svg>`;
    }
  }, {
    key: "clearSVG",
    value: function clearSVG() {
      this.svg = "";
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.width;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.height;
    }
  }, {
    key: "pushStyle",
    value: function pushStyle() {
      this.style.push(new SVGStyle_1.SVGStyle(this));
    }
  }, {
    key: "popStyle",
    value: function popStyle() {
      this.style.pop();
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      return this.style[this.style.length - 1];
    }
  }, {
    key: "getDrawState",
    value: function getDrawState() {
      return this.drawState;
    }
  }, {
    key: "setStroke",
    value: function setStroke(s) {
      this.getStyle().setStroke(s);
    }
  }, {
    key: "setFill",
    value: function setFill(s) {
      this.getStyle().setFill(s);
    }
  }, {
    key: "addLine",
    value: function addLine(x1, y1, x2, y2, id) {
      var dashed = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      this.svg += "\n<line id=\"".concat(id, "\" x1=\"").concat(x1, "\" y1=\"").concat(y1, "\" x2=\"").concat(x2, "\" y2=\"").concat(y2, "\" stroke=\"").concat(this.getStyle().getStroke(), "\" \n    stroke-dasharray=\"").concat(dashed ? "8" : "", "\"></line>");

      if (document.getElementById(id) == null) {
        // let el = document.createElement("line") as unknown as SVGLineElement;
        // el.id = id;
        // el.setAttribute("x1", `${x1}`);
        // el.setAttribute("y1", `${y1}`);
        // el.setAttribute("x2", `${x2}`);
        // el.setAttribute("y2", `${y2}`);
        // el.setAttribute("stroke", `${this.getStyle().getStroke()}`);
        // el.x1.baseVal.value = x1;
        // el.y1.baseVal.value = y1;
        // el.x2.baseVal.value = x2;
        // el.y2.baseVal.value = y2;
        // el.style.stroke = "black";
        // canvas.insertBefore(el, null);
        //GUIDraw.Instance.addElement(el); //`\n<line id="${id}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${this.getStyle().getStroke()}" fill="${this.getStyle().getFill()}" ></line>`
        GUIDraw_1.GUIDraw.Instance.needRedraw();
      } else {
        var el = document.getElementById(id);
        el.setAttribute("x1", "".concat(x1));
        el.setAttribute("y1", "".concat(y1));
        el.setAttribute("x2", "".concat(x2));
        el.setAttribute("y2", "".concat(y2));
        el.setAttribute("stroke", "".concat(this.getStyle().getStroke())); // el.setAttribute("stroke-width", `${this.get()}`);
        // el.onclick = (e) => {
        //   console.log(e.target);
        // };
      }
    }
  }, {
    key: "addCam",
    value: function addCam(x1, y1, direction, size, id, name, cam) {
      var normal = direction.getNormal();
      var pos = new vector_1.Vector(x1, y1);
      var v1 = pos.getAddedVector(direction.getMult(size / 3).getAddedVector(normal.getMult(size / 3)));
      var v1_2 = pos.getAddedVector(direction.getMult(size / 3).getAddedVector(normal.getMult(-size / 3)));
      var v2 = pos.getAddedVector(direction.getMult(size).getAddedVector(normal.getMult(size)));
      var v3 = pos.getAddedVector(direction.getMult(size).getAddedVector(normal.getMult(-size)));
      var v4 = pos.getAddedVector(direction.getMult(size / 3).getAddedVector(normal.getMult(-size * 1.2)));
      var v5 = pos.getAddedVector(direction.getMult(-size).getAddedVector(normal.getMult(-size * 1.2)));
      var v6 = pos.getAddedVector(direction.getMult(-size).getAddedVector(normal.getMult(size * 1.2)));
      var v7 = pos.getAddedVector(direction.getMult(size / 3).getAddedVector(normal.getMult(size * 1.2)));
      var vt = new vector_1.Vector((v4.getX() + v5.getX() + v6.getX() + v7.getX()) / 4, (v4.getY() + v5.getY() + v6.getY() + v7.getY()) / 4);
      vt.addVector(pos.getAddedVector(vt.getInverted()).getMult(0.5));
      this.svg += "\n<polygon id=\"".concat(id, "\" points=\"").concat(v1.getX(), ",").concat(v1.getY(), " ").concat(v2.getX(), ",").concat(v2.getY(), " ").concat(v3.getX(), ",").concat(v3.getY(), " ").concat(v1_2.getX(), ",").concat(v1_2.getY(), "\n    ").concat(v4.getX(), ",").concat(v4.getY(), " ").concat(v5.getX(), ",").concat(v5.getY(), " ").concat(v6.getX(), ",").concat(v6.getY(), " ").concat(v7.getX(), ",").concat(v7.getY(), "\" \n    stroke=\"").concat(this.getStyle().getStroke(), "\" fill=\"").concat(this.getStyle().getFill(), "\" draggable=\"true\"></polygon>\n    \n    <text x=\"").concat(vt.getX(), "\" y=\"").concat(vt.getY(), "\" \n    transform=\"rotate(").concat(-(new vector_1.Vector(0, 1).getAngleBetween(direction) / Math.PI) * 180, ",").concat(vt.getX(), ",").concat(vt.getY(), ")\"\n    fill=\"").concat(this.getDrawState().getDarkMode() ? "white" : "black", "\">Camera ").concat(name, "</text>");

      if (document.getElementById(id) == null) {
        GUIDraw_1.GUIDraw.Instance.needRedraw();
      } else {
        var el = document.getElementById(id);
        el.setAttribute("points", "".concat(v1.getX(), ",").concat(v1.getY(), " ").concat(v2.getX(), ",").concat(v2.getY(), " ").concat(v3.getX(), ",").concat(v3.getY(), " ").concat(v1_2.getX(), ",").concat(v1_2.getY(), "\n      ").concat(v4.getX(), ",").concat(v4.getY(), " ").concat(v5.getX(), ",").concat(v5.getY(), " ").concat(v6.getX(), ",").concat(v6.getY(), " ").concat(v7.getX(), ",").concat(v7.getY()));
        el.setAttribute("stroke", "".concat(this.getStyle().getStroke()));
        el.setAttribute("fill", "".concat(this.getStyle().getFill())); // el.onclick = (e) => {
        //   console.log(e.target);
        // };

        el.setAttribute("draggable", "true");

        el.ondrag = function (e) {
          e.preventDefault();
          if (e.buttons == 1 && e.shiftKey == false) cam.move(e.x, e.y, e.movementX, e.movementY);
          if (e.buttons == 1 && e.shiftKey) cam.rotate(e.x, e.y, e.movementX, e.movementY);
          if (e.buttons == 2) ContextMenu_1.ContextMenu.Instance.draw(e.x, e.y, cam.getContextAttributes(), cam); //rect.rotate(e.x, e.y, e.movementX, e.movementY);
        };
      }
    }
  }, {
    key: "addRect",
    value: function addRect(x1, y1, x2, y2, x3, y3, x4, y4, id, rect) {
      var vt = new vector_1.Vector((x1 + x2 + x3 + x4) / 4, (y1 + y2 + y3 + y4) / 4 + 4);
      this.svg += "\n<polygon id=\"".concat(id, "\" points=\"").concat(x1, ",").concat(y1, " ").concat(x2, ",").concat(y2, " ").concat(x3, ",").concat(y3, " ").concat(x4, ",").concat(y4, "\" stroke=\"").concat(this.getStyle().getStroke(), "\" fill=\"").concat(this.getStyle().getFill(), "\" draggable=\"").concat(rect != undefined, "\"></polygon>");

      if (rect != undefined) {
        this.svg += "<text x=\"".concat(vt.getX(), "\" y=\"").concat(vt.getY(), "\">").concat(rect === null || rect === void 0 ? void 0 : rect.getName(), "</text>"); //transform="rotate(${((rect?.getRotation()) / Math.PI) * 180 + 90},${vt.getX()},${vt.getY()})"
      }

      if (document.getElementById(id) == null) {
        GUIDraw_1.GUIDraw.Instance.needRedraw();
      } else {
        var el = document.getElementById(id);
        el.setAttribute("points", "".concat(x1, ",").concat(y1, " ").concat(x2, ",").concat(y2, " ").concat(x3, ",").concat(y3, " ").concat(x4, ",").concat(y4));
        el.setAttribute("stroke", "".concat(this.getStyle().getStroke()));
        el.setAttribute("fill", "".concat(this.getStyle().getFill())); // el.onclick = (e) => {
        //   console.log(e.target);
        // };

        if (rect != undefined) {
          el.setAttribute("draggable", "true");

          el.ondrag = function (e) {
            e.preventDefault();
            if (e.buttons == 1 && e.shiftKey == false) rect.move(e.x, e.y, e.movementX, e.movementY);
            if (e.buttons == 1 && e.shiftKey) rect.rotate(e.x, e.y, e.movementX, e.movementY);
            if (e.buttons == 2) ContextMenu_1.ContextMenu.Instance.draw(e.x, e.y, rect.getContextAttributes(), rect); //rect.rotate(e.x, e.y, e.movementX, e.movementY);
          };
        }
      }
    }
  }, {
    key: "addCircle",
    value: function addCircle(x1, y1, r, id, lamp) {
      this.svg += "\n<circle id=\"".concat(id, "\" cx=\"").concat(x1, "\" cy=\"").concat(y1, "\" r=\"").concat(r, "\" stroke=\"").concat(this.getStyle().getStroke(), "\" fill=\"").concat(this.getStyle().getFill(), "\" draggable=\"true\"></circle>");

      if (document.getElementById(id) == null) {
        GUIDraw_1.GUIDraw.Instance.needRedraw();
      } else {
        var el = document.getElementById(id);
        el.setAttribute("cx", "".concat(x1));
        el.setAttribute("cy", "".concat(y1));
        el.setAttribute("r", "".concat(r));
        el.setAttribute("stroke", "".concat(this.getStyle().getStroke()));
        el.setAttribute("fill", "".concat(this.getStyle().getFill())); // el.onclick = (e) => {
        //   console.log(e.target);
        // };

        el.setAttribute("draggable", "true");

        el.ondrag = function (e) {
          e.preventDefault();
          if (e.buttons == 1 && e.shiftKey == false) lamp.move(e.x, e.y, e.movementX, e.movementY);
          if (e.buttons == 2) ContextMenu_1.ContextMenu.Instance.draw(e.x, e.y, lamp.getContextAttributes(), lamp); //rect.rotate(e.x, e.y, e.movementX, e.movementY);
        };
      }
    }
  }, {
    key: "addCollision",
    value: function addCollision(x1, y1, r, id, collision) {
      this.svg += "\n<circle id=\"".concat(id, "\" cx=\"").concat(x1, "\" cy=\"").concat(y1, "\" r=\"").concat(r, "\" stroke=\"").concat(this.getStyle().getStroke(), "\" fill=\"").concat(this.getStyle().getFill(), "\" draggable=\"false\"></circle>");

      if (document.getElementById(id) == null) {
        GUIDraw_1.GUIDraw.Instance.needRedraw();
      } else {
        var el = document.getElementById(id);
        el.setAttribute("cx", "".concat(x1));
        el.setAttribute("cy", "".concat(y1));
        el.setAttribute("r", "".concat(r));
        el.setAttribute("stroke", "".concat(this.getStyle().getStroke()));
        el.setAttribute("fill", "".concat(this.getStyle().getFill())); // el.onclick = (e) => {
        //   console.log(e.target);
        // };

        el.setAttribute("draggable", "false");

        el.ondrag = function (e) {
          e.preventDefault(); //if (e.buttons == 2) ContextMenu.Instance.draw(e.x, e.y, collision.getContextAttributes(), collision); //rect.rotate(e.x, e.y, e.movementX, e.movementY);
        };
      }
    }
  }, {
    key: "addText",
    value: function addText(x1, y1, text, id) {
      this.svg += "<text id=\"".concat(id, "\" x=\"").concat(x1, "\" y=\"").concat(y1, "\" fill=\"").concat(this.getStyle().getFill(), "\" draggable=\"false\">").concat(text, "</text>");

      if (document.getElementById(id) == null) {
        GUIDraw_1.GUIDraw.Instance.needRedraw();
      } else {
        var el = document.getElementById(id);
        el.setAttribute("x", "".concat(x1));
        el.setAttribute("y", "".concat(y1));
        el.innerHTML = text;
        el.setAttribute("style", "fill: ".concat(this.getStyle().getFill(), ";")); // el.setAttribute("stroke", `${this.getStyle().getStroke()}`);
        // el.setAttribute("fill", `${this.getStyle().getFill()}`);

        el.setAttribute("draggable", "false");
      }
    }
  }, {
    key: "addArrow",
    value: function addArrow(x1, y1, x2, y2, id) {
      var dir = new vector_1.Vector(x2 - x1, y2 - y1).getNormalized().getMult(-5);
      var nor = dir.getNormal().getNormalized().getMult(5);
      var v1 = new vector_1.Vector(x2, y2).getAddedVector(dir).getAddedVector(nor);
      var v2 = new vector_1.Vector(x2, y2).getAddedVector(dir).getAddedVector(nor.getInverted());
      this.svg += "<path id=\"".concat(id, "\" d=\"M ").concat(x1, ",").concat(y1, " L ").concat(x2, ",").concat(y2, " ").concat(v1.getX(), ",").concat(v1.getY(), " ").concat(x2, ",").concat(y2, " ").concat(v2.getX(), ",").concat(v2.getY(), "\" \n                  stroke=\"").concat(this.getStyle().getStroke(), "\" fill=\"none\" draggable=\"false\"></path>");

      if (document.getElementById(id) == null) {
        GUIDraw_1.GUIDraw.Instance.needRedraw();
      } else {
        var el = document.getElementById(id);
        el.setAttribute("d", "M ".concat(x1, ",").concat(y1, " L ").concat(x2, ",").concat(y2, " ").concat(v1.getX(), ",").concat(v1.getY(), " ").concat(x2, ",").concat(y2, " ").concat(v2.getX(), ",").concat(v2.getY()));
        el.setAttribute("stroke", "".concat(this.getStyle().getStroke()));
        el.setAttribute("fill", "none");
        el.setAttribute("draggable", "false");
      }
    }
  }, {
    key: "addArc",
    value: function addArc(x1, y1, rx, ry, phi, lf, sf, x2, y2, id) {
      this.svg += "<path id=\"".concat(id, "\" d=\"M ").concat(x1, ",").concat(y1, " A ").concat(rx, ",").concat(ry, ",").concat(phi, ",").concat(lf, ",").concat(sf, ",").concat(x2, ",").concat(y2, "\" \n                  stroke=\"").concat(this.getStyle().getStroke(), "\" fill=\"none\" draggable=\"false\"></path>");

      if (document.getElementById(id) == null) {
        GUIDraw_1.GUIDraw.Instance.needRedraw();
      } else {
        var el = document.getElementById(id);
        el.setAttribute("d", "M ".concat(x1, ",").concat(y1, " A ").concat(rx, ",").concat(ry, ",").concat(phi, ",").concat(lf, ",").concat(sf, ",").concat(x2, ",").concat(y2));
        el.setAttribute("stroke", "".concat(this.getStyle().getStroke()));
        el.setAttribute("fill", "none");
        el.setAttribute("draggable", "false");
      }
    }
  }, {
    key: "addArc2",
    value: function addArc2(arcEnd2, arcMid2, arcMid1, arcEnd1, id) {
      this.svg += "<path id=\"".concat(id, "\" d=\"M ").concat(arcEnd2.getX(), ",").concat(arcEnd2.getY(), " C ").concat(arcMid2.getX(), ",").concat(arcMid2.getY(), " ").concat(arcMid1.getX(), ",").concat(arcMid1.getY(), " ").concat(arcEnd1.getX(), ",").concat(arcEnd1.getY(), "\" \n                  stroke=\"").concat(this.getStyle().getStroke(), "\" fill=\"none\" draggable=\"false\"></path>");

      if (document.getElementById(id) == null) {
        GUIDraw_1.GUIDraw.Instance.needRedraw();
      } else {
        var el = document.getElementById(id);
        el.setAttribute("d", "M ".concat(arcEnd2.getX(), ",").concat(arcEnd2.getY(), " C ").concat(arcMid2.getX(), ",").concat(arcMid2.getY(), " ").concat(arcMid1.getX(), ",").concat(arcMid1.getY(), " ").concat(arcEnd1.getX(), ",").concat(arcEnd1.getY()));
        el.setAttribute("stroke", "".concat(this.getStyle().getStroke()));
        el.setAttribute("fill", "none");
        el.setAttribute("draggable", "false");
      }
    }
  }]);

  return DrawContext;
}();

exports.DrawContext = DrawContext;
},{"./ContextMenu":"TvkX","./GUIDraw":"ClDD","./SVGStyle":"Rr05","./DrawState":"pTgs","../collision_classes/vector":"ir7B"}],"ZK7P":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainHelper = void 0;

var GUIDraw_1 = require("./GUIDraw");

var MainHelper = /*#__PURE__*/function () {
  function MainHelper() {
    _classCallCheck(this, MainHelper);
  }

  _createClass(MainHelper, [{
    key: "doDraw",
    value: function doDraw() {
      this.draw();
      GUIDraw_1.GUIDraw.Instance.draw(this.ctx);
      this.ctx.clearSVG();
    }
  }, {
    key: "getCTX",
    value: function getCTX() {
      return this.ctx;
    }
  }, {
    key: "draw",
    value: function draw() {}
  }]);

  return MainHelper;
}();

exports.MainHelper = MainHelper;
},{"./GUIDraw":"ClDD"}],"ReAN":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Material = void 0;

var Material = /*#__PURE__*/function () {
  function Material(color) {
    var diffuse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var specular = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;

    _classCallCheck(this, Material);

    this.color = color;
    this.diffuse = diffuse;
    this.specular = specular;
  }

  _createClass(Material, [{
    key: "getColor",
    value: function getColor() {
      return this.color;
    }
  }, {
    key: "getDiffuse",
    value: function getDiffuse() {
      return this.diffuse;
    }
  }, {
    key: "getSpecular",
    value: function getSpecular() {
      return this.specular;
    }
  }, {
    key: "setColor",
    value: function setColor(color) {
      this.color = color;
    }
  }, {
    key: "setDiffuse",
    value: function setDiffuse(diffuse) {
      this.diffuse = this.constrain(diffuse);
    }
  }, {
    key: "setSpecular",
    value: function setSpecular(specular) {
      this.specular = this.constrain(specular);
    } //Constrain number between 0 and 1

  }, {
    key: "constrain",
    value: function constrain(x) {
      return x < 0 ? 0 : x > 1 ? 1 : x;
    }
  }]);

  return Material;
}();

exports.Material = Material;
},{}],"C1UQ":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LampMaterial = void 0;

var LampMaterial = /*#__PURE__*/function () {
  function LampMaterial(color) {
    var intensity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

    _classCallCheck(this, LampMaterial);

    this.color = color;
    this.intensity = intensity;
  }

  _createClass(LampMaterial, [{
    key: "getColor",
    value: function getColor() {
      return this.color;
    }
  }, {
    key: "getIntensity",
    value: function getIntensity() {
      return this.intensity;
    }
  }, {
    key: "setColor",
    value: function setColor(color) {
      this.color = color;
    }
  }, {
    key: "setIntensity",
    value: function setIntensity(intensity) {
      this.intensity = this.constrain(intensity);
    } //Constrain number between 1 and 100

  }, {
    key: "constrain",
    value: function constrain(x) {
      return x < 1 ? 1 : x > 100 ? 100 : x;
    }
  }]);

  return LampMaterial;
}();

exports.LampMaterial = LampMaterial;
},{}],"nkeQ":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addDraggable = void 0;

var rect_1 = require("../collision_classes/rect");

var app_1 = require("../app");

var ContextMenu_1 = require("./ContextMenu");

var GUIDraw_1 = require("./GUIDraw");

var vector_1 = require("../collision_classes/vector");

var lamp_1 = require("../collision_classes/lamp");

var material_1 = require("../render_classes/material");

var lampMaterial_1 = require("../render_classes/lampMaterial");

function addDraggable(svg) {
  svg.addEventListener("mousedown", startDrag);
  svg.addEventListener("mousemove", drag);
  svg.addEventListener("mouseup", endDrag);
  svg.addEventListener("mouseleave", leaveDrag);
  svg.addEventListener("contextmenu", prevent);
  var spawn_id = 0;
  console.log("SVG is draggable");
  var selectedElement = null;

  function prevent(evt) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  function startDrag(evt) {
    var el = evt.target; // console.log(evt);

    ContextMenu_1.ContextMenu.Instance.reset();

    if (el.getAttribute("draggable")) {
      selectedElement = el;
      if (selectedElement.ondrag != null) selectedElement.ondrag(evt);
    } else {
      //ContextMenu.Instance.reset();
      if (el.getAttribute("id") == "canvas") {
        canvasContextMenu(evt, el);
      }
    }
  }

  function drag(evt) {
    //console.log(evt);
    if (selectedElement != null) {
      if (selectedElement.ondrag != null) selectedElement.ondrag(evt);
      GUIDraw_1.GUIDraw.Instance.needRedraw();
    }
  }

  function endDrag(evt) {
    selectedElement = null; //ContextMenu.Instance.reset();
  }

  function leaveDrag(evt) {
    selectedElement = null;
    var rect = app_1.CONTEXT_MENU.getBoundingClientRect();
    if (evt.x < rect.left || evt.x > rect.right || evt.y < rect.top || evt.y > rect.bottom) ContextMenu_1.ContextMenu.Instance.reset();
  }

  var CVS = /*#__PURE__*/function (_HTMLElement) {
    _inherits(CVS, _HTMLElement);

    var _super = _createSuper(CVS);

    function CVS() {
      _classCallCheck(this, CVS);

      return _super.apply(this, arguments);
    }

    _createClass(CVS, [{
      key: "doFunction",
      value: function doFunction(func, val, e) {}
    }]);

    return CVS;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  function canvasContextMenu(evt, el) {
    app_1.CANVAS.doFunction = doFunction;
    var pos = evt.offsetX + evt.offsetY * app_1.CANVAS.getBoundingClientRect().width;
    var attributes = [{
      name: "New Rectangle",
      id: "rect",
      type: "",
      value: pos
    }, {
      name: "New Lamp",
      id: "lamp",
      type: "",
      value: pos
    }];
    if (evt.buttons == 2) ContextMenu_1.ContextMenu.Instance.draw(evt.x, evt.y, attributes, el);
  }

  function doFunction(func, val, e) {
    console.log("doing", func);

    switch (func) {
      case "rect":
        app_1.Main.Instance.collisionCollection.push(new rect_1.Rect(new vector_1.Vector(val % app_1.CANVAS.getBoundingClientRect().width, val / app_1.CANVAS.getBoundingClientRect().width), 50, 50, 0, new material_1.Material("#ffffff"), "spawned_rect" + spawn_id++, app_1.NAMING.pop()));
        break;

      case "lamp":
        app_1.Main.Instance.lampCollection.push(new lamp_1.Lamp(new vector_1.Vector(val % app_1.CANVAS.getBoundingClientRect().width, val / app_1.CANVAS.getBoundingClientRect().width), new lampMaterial_1.LampMaterial("#ffffff"), "spawned_lamp" + spawn_id++));
        break;
    }
  }
}

exports.addDraggable = addDraggable;
},{"../collision_classes/rect":"uowC","../app":"EVxB","./ContextMenu":"TvkX","./GUIDraw":"ClDD","../collision_classes/vector":"ir7B","../collision_classes/lamp":"wHw1","../render_classes/material":"ReAN","../render_classes/lampMaterial":"C1UQ"}],"Pz0Q":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetupPanel = void 0;

var app_1 = require("../app");

function SetupPanel() {
  app_1.PANEL.children.namedItem("render_slider_play").onclick = function () {
    if (app_1.PANEL.getAttribute("play") == "true") {
      app_1.PANEL.setAttribute("play", "false");
      this.innerHTML = "<div class=\"mdc-icon-button__ripple\"></div>play_arrow";
    } else {
      app_1.PANEL.setAttribute("play", "true");
      this.innerHTML = "<div class=\"mdc-icon-button__ripple\"></div>pause";
    }
  };

  var PANEL_DRAG = app_1.PANEL.children.namedItem("panel_drag");

  PANEL_DRAG.onmousedown = function (e) {
    this.setAttribute("dragging", "true");
  };

  PANEL_DRAG.onmouseup = function (e) {
    this.setAttribute("dragging", "false");
  };

  PANEL_DRAG.onmousemove = function (e) {
    //console.log(e);
    if (PANEL_DRAG.getAttribute("dragging") == "true") {
      app_1.PANEL.style.left = "max(0px,min(calc(100vw - " + app_1.PANEL.clientWidth + "px)," + (e.pageX - PANEL_DRAG.offsetLeft - PANEL_DRAG.clientWidth / 2).toString() + "px))";
      app_1.PANEL.style.top = "max(0px,min(calc(150vh - " + app_1.PANEL.clientHeight + "px)," + (e.pageY - PANEL_DRAG.offsetTop - PANEL_DRAG.clientHeight / 2).toString() + "px))";
    }
  };

  PANEL_DRAG.onmouseleave = PANEL_DRAG.onmousemove;
  PANEL_DRAG.onmouseout = PANEL_DRAG.onmousemove;
}

exports.SetupPanel = SetupPanel;
},{"../app":"EVxB"}],"Houu":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideMenu = void 0;

var app_1 = require("../app");

var ContextElement_1 = require("./ContextElement");

var GUIDraw_1 = require("./GUIDraw");

var SideMenu = /*#__PURE__*/function () {
  function SideMenu() {
    _classCallCheck(this, SideMenu);

    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;
    this.elements = [];
    this.setup();
  }

  _createClass(SideMenu, [{
    key: "updateStyle",
    value: function updateStyle() {
      app_1.SIDE_MENU.style.left = this.x.toString() + "px";
      app_1.SIDE_MENU.style.top = this.y.toString() + "px";
      app_1.SIDE_MENU.style.width = this.w.toString() + "px"; //SIDE_MENU.style.height = this.h.toString() + "px";
    }
  }, {
    key: "updateElements",
    value: function updateElements() {
      // for (let e of this.elements) {
      for (var i = 0; i < this.elements.length; i++) {
        app_1.SIDE_MENU.appendChild(this.elements[i].getHTMLElement()); //Spacer

        console.log(this.elements[i].getContent());

        if (this.elements[i + 1] && this.elements[i + 1].getContent().startsWith("Generate") || this.elements[i].getContent().startsWith("Generate")) {
          var el = document.createElement("div");
          el.className = "contextElement_spacer";
          app_1.SIDE_MENU.appendChild(el);
        }
      }
    }
  }, {
    key: "setup",
    value: function setup() {
      var contents = [{
        name: "Display Rays",
        id: "rays",
        type: "lever",
        value: Number(app_1.Main.Instance.getCTX().getDrawState().getDisplayRays())
      }, {
        name: "Display Shadow Rays",
        id: "shadowRays",
        type: "lever",
        value: Number(app_1.Main.Instance.getCTX().getDrawState().getDisplayShadowRays())
      }, {
        name: "Display Collision Data",
        id: "colData",
        type: "lever",
        value: Number(app_1.Main.Instance.getCTX().getDrawState().getDisplayColisionData())
      }, {
        name: "Shadow Ray Color",
        id: "shadowRayColor",
        type: "color",
        value: app_1.Main.Instance.getCTX().getDrawState().getShadowRayColor()
      }, {
        name: "Display Animated Camera",
        id: "animCam",
        type: "lever",
        value: Number(app_1.Main.Instance.getCTX().getDrawState().getAnimatedCamera())
      }, {
        name: "Generate SVG",
        id: "genSVG",
        type: "",
        value: 0
      }, {
        name: "Dark Mode",
        id: "darkMode",
        type: "lever",
        value: Number(app_1.Main.Instance.getCTX().getDrawState().getDarkMode())
      }];
      this.x = Number(app_1.SIDE_MENU.style.left);
      this.y = Number(app_1.SIDE_MENU.style.top);

      for (var i = 0; i < contents.length; i++) {
        this.elements.push(new ContextElement_1.ContextElement(this.x, this.y + 17 * i, contents[i].name, contents[i].id, contents[i].type, contents[i].value, this));
      }

      this.updateElements();
      this.w = 300;
      this.h = 23 * this.elements.length;
      this.updateStyle();
    }
  }, {
    key: "doFunction",
    value: function doFunction(func, val, e) {
      switch (func) {
        case "rays":
          app_1.Main.Instance.getCTX().getDrawState().setDisplayRays(val == 1);
          GUIDraw_1.GUIDraw.Instance.needRedraw();
          break;

        case "shadowRays":
          app_1.Main.Instance.getCTX().getDrawState().setDisplayShadowRays(val == 1);
          GUIDraw_1.GUIDraw.Instance.needRedraw();
          break;

        case "colData":
          app_1.Main.Instance.getCTX().getDrawState().setDisplayColisionData(val == 1);
          GUIDraw_1.GUIDraw.Instance.needRedraw();
          break;

        case "darkMode":
          app_1.Main.Instance.getCTX().getDrawState().setDarkMode(val == 1);

          if (val == 1) {
            document.documentElement.style.setProperty("--text-color", "#c0c1c3");
            document.documentElement.style.setProperty("--background-color", "#36393f");
            document.documentElement.style.setProperty("--background-hover", "#727a86");
            document.body.style.backgroundColor = "black";
          } else {
            document.documentElement.style.setProperty("--text-color", "#151515");
            document.documentElement.style.setProperty("--background-color", "#b7bdc8");
            document.documentElement.style.setProperty("--background-hover", "#969fac");
            document.body.style.backgroundColor = "white";
          }

          GUIDraw_1.GUIDraw.Instance.needRedraw();
          break;

        case "shadowRayColor":
          var colPickSh = document.getElementById("colorPicker_shadowRayColor");

          colPickSh.oninput = function () {
            app_1.Main.Instance.getCTX().getDrawState().setShadowRayColor(colPickSh.value);
          };

          GUIDraw_1.GUIDraw.Instance.needRedraw();
          break;

        case "genSVG":
          //GENERATE SVG and prompt download
          var not_svg = document.getElementById("svg");

          if (not_svg != null) {
            var clonedSvgElement = app_1.CANVAS.cloneNode(true);
            var style = document.createElement("style");
            style.innerHTML = "#canvas text {user-select: none;\n          font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n          font-size: small;\n          text-anchor: middle;}";
            clonedSvgElement.appendChild(style);
            var outerHTML = clonedSvgElement.outerHTML,
                blob = new Blob([outerHTML], {
              type: "image/svg+xml;charset=utf-8"
            });
            var blobURL = URL.createObjectURL(blob);
            var link = document.createElement("a");
            link.style.display = "none";
            link.href = blobURL;
            link.download = "image.svg";
            document.body.appendChild(link);
            link.click();
            setTimeout(function () {
              var _a;

              URL.revokeObjectURL(link.href);
              (_a = link.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(link);
            }, 0); //not_svg.src = blobURL;
          }

          break;

        case "animCam":
          app_1.Main.Instance.getCTX().getDrawState().setAnimatedCamera(val == 1);

          if (val == 1) {
            app_1.PANEL.style.display = "inherit";
          } else {
            app_1.PANEL.style.display = "none";
          }

          GUIDraw_1.GUIDraw.Instance.needRedraw();
          break;
      }
    }
  }], [{
    key: "Instance",
    get: function get() {
      return this._instance || (this._instance = new this());
    }
  }]);

  return SideMenu;
}();

exports.SideMenu = SideMenu;
},{"../app":"EVxB","./ContextElement":"R0og","./GUIDraw":"ClDD"}],"EVxB":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Main = exports.height = exports.width = exports.NAMING = exports.RENDER_SLIDER = exports.PANEL = exports.SIDE_MENU = exports.CONTEXT_MENU = exports.CANVAS = void 0;

var camera_1 = require("./collision_classes/camera");

var lamp_1 = require("./collision_classes/lamp");

var line_1 = require("./collision_classes/line");

var rect_1 = require("./collision_classes/rect");

var vector_1 = require("./collision_classes/vector");

var ContextMenu_1 = require("./gui_classes/ContextMenu");

var DrawContext_1 = require("./gui_classes/DrawContext");

var GUIDraw_1 = require("./gui_classes/GUIDraw");

var MainHelper_1 = require("./gui_classes/MainHelper");

var SVGDrag_1 = require("./gui_classes/SVGDrag");

var material_1 = require("./render_classes/material");

var lampMaterial_1 = require("./render_classes/lampMaterial");

var PanelFunctions_1 = require("./gui_classes/PanelFunctions");

var SideMenu_1 = require("./gui_classes/SideMenu");

exports.CANVAS = document.getElementById("canvas"); //Global reference to SVG

exports.CONTEXT_MENU = document.getElementById("contextMenu"); //Global reference to Context Menu

exports.SIDE_MENU = document.getElementById("sideMenu"); //Global reference to Side Menu

exports.PANEL = document.getElementById("panel"); //Global reference to Animation Panel

exports.RENDER_SLIDER = exports.PANEL.children.namedItem("render_slider"); //Global reference to Animation Slider

exports.NAMING = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("").reverse(); //Global Array for Naming Rects

exports.width = 800; //Constant for width of SVG

exports.height = 400; //Constant for height of SVG

var Main = /*#__PURE__*/function (_MainHelper_1$MainHel) {
  _inherits(Main, _MainHelper_1$MainHel);

  var _super = _createSuper(Main);

  // private line1: Line;
  function Main() {
    var _this;

    _classCallCheck(this, Main);

    _this = _super.call(this);
    _this.collisionCollection = [];
    _this.lampCollection = [];
    _this.ctx = new DrawContext_1.DrawContext(exports.width, exports.height);
    _this.t = 0; // this.rect1 = new Rect(new Vector(250, 250), 30, 150, 1.5, new Material("#00c0ff"), "rect1");

    var rect1 = new rect_1.Rect(new vector_1.Vector(250, 250), 30, 150, 1.5, new material_1.Material("#00c0ff"), "rect1", exports.NAMING.pop());

    _this.collisionCollection.push(rect1); // this.rect2 = new Rect(new Vector(50, 150), 10, 300, Math.PI / 16, new Material("#ffc000"), "rect2");
    // this.collisionCollection.push(this.rect2);
    // this.line1 = new Line(new Vector(0, 400), new Vector(1, -0.1), 800);
    // this.collisionCollection.push(this.line1);


    _this.lampCollection.push(new lamp_1.Lamp(new vector_1.Vector(300, 50), new lampMaterial_1.LampMaterial("#ffffff"), "lamp1"));

    _this.cam1 = new camera_1.Camera(new vector_1.Vector(100, 100), new vector_1.Vector(1, 1), 0, 5, "cam1", "1");

    _this.cam1.setRays(1, 70 / 180 * Math.PI);

    _this.cam2 = new camera_1.Camera(new vector_1.Vector(500, 100), new vector_1.Vector(-1, 0.6), 0, 5, "cam2", "2");

    _this.cam2.setRays(50, Math.PI / 2);

    _this.cam2.setOneRayMode(true);

    _this.cam2.setDrawRays(true);

    return _this;
  }

  _createClass(Main, [{
    key: "draw",
    value: function draw() {
      // this.ctx.pushStyle();
      // this.ctx.setStroke("red");
      // if (this.t % 200 > 100) this.ctx.setStroke("blue");
      // this.ctx.addLine(this.t % 400, 0, 300, 400, "l3");
      // this.ctx.popStyle();
      // if (this.t == 205) {
      //   GUIDraw.Instance.needRedraw();
      // }
      //this.rect1.setRotation(this.t / 50);
      //if (this.t % 1 == 0) this.rect1.updateLines();
      // this.ctx.setFill("#00c0ff");
      // this.rect1.draw(this.ctx);
      // this.ctx.setFill("#ffc000");
      // this.rect2.draw(this.ctx);
      // this.ctx.setFill("none");
      // let l = this.rect1.getIntersect(new Line(new Vector(this.t % 400, 0), new Vector(this.t % 400, 0).getInverted().getAddedVector(new Vector(300, 400)), 1));
      // this.ctx.pushStyle();
      // this.ctx.setStroke("magenta");
      // for (let i = 0; i < l.length; i++) {
      //   let l1 = l[i];
      //   if (l1 != undefined) {
      //     this.ctx.addLine(l1[0] - 5, l1[1] - 1, l1[0] + 5, l1[1] + 1, "intersect" + i);
      //     this.ctx.addLine(l1[0] - 5, l1[1] + 1, l1[0] + 5, l1[1] - 1, "intersect" + i + "_2");
      //   }
      // }
      // this.ctx.popStyle();
      // this.line1.draw(this.ctx, "line1");
      //
      //#Clean-Up-Stage#
      //
      //Remove deleted Rects
      for (var i = this.collisionCollection.length - 1; i >= 0; i--) {
        var col = this.collisionCollection[i];

        if (col instanceof rect_1.Rect) {
          if (col.getDelete()) {
            exports.NAMING.push(col.getName());
            this.collisionCollection.splice(i, 1);
            GUIDraw_1.GUIDraw.Instance.needRedraw();
          }
        }
      } //Remove deleted Lamps


      for (var _i = this.lampCollection.length - 1; _i >= 0; _i--) {
        if (this.lampCollection[_i].getDelete()) {
          this.lampCollection.splice(_i, 1);
          GUIDraw_1.GUIDraw.Instance.needRedraw();
        }
      } //
      //#Calulation-Stage#
      //
      //Recalculate the Rays of the camera and draw them


      this.cam1.recalculateRay(this.collisionCollection, this.lampCollection); //Animate the camera 2
      //if (this.t % 1 == 0) this.cam2.incrementRayIndex();

      if (exports.PANEL.getAttribute("play") == "true") exports.RENDER_SLIDER.value = ((Number(exports.RENDER_SLIDER.value) + 1) % Number(exports.RENDER_SLIDER.max)).toString();
      exports.RENDER_SLIDER.max = (this.cam2.getAmount() - 1).toString();
      this.cam2.setRayIndex(Number(exports.RENDER_SLIDER.value)); //Recalculate the Rays of the animation camera and draw them

      this.cam2.recalculateRay(this.collisionCollection, this.lampCollection); //
      //#Draw-Stage#
      //
      //Draw Rays

      this.cam1.raysDraw(this.ctx);
      this.cam2.raysDraw(this.ctx); //Draw Rects And Lines

      var l_idx = 0;

      var _iterator = _createForOfIteratorHelper(this.collisionCollection),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var l = _step.value;

          if (l instanceof line_1.Line) {
            this.ctx.pushStyle();
            l.draw(this.ctx, "line_" + l_idx++);
            this.ctx.popStyle();
          } else {
            l.draw(this.ctx);
          }
        } //Draw Lamps

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(this.lampCollection),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _l = _step2.value;

          _l.draw(this.ctx);
        } //Draw Cameras

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      this.cam1.draw(this.ctx);
      this.cam2.draw(this.ctx); //Increment Time

      this.t++;
    }
  }], [{
    key: "Instance",
    get: function get() {
      return this._instance || (this._instance = new this());
    }
  }]);

  return Main;
}(MainHelper_1.MainHelper);

exports.Main = Main;
Main.Instance;
SideMenu_1.SideMenu.Instance;
ContextMenu_1.ContextMenu.Instance; //Setup Panel

PanelFunctions_1.SetupPanel(); //Setup Canvas

SVGDrag_1.addDraggable(exports.CANVAS); //Setup loop

var time = new Date().getTime();
setInterval(loop, 33.3);

function loop() {
  Main.Instance.doDraw(); // time = new Date().getTime();
  // setTimeout(
  //   () => {
  //     loop();
  //   },
  //   new Date().getTime() - time < 33.3 ? 33.3 - new Date().getTime() + time : 0
  //   // () => {
  //   //   console.log(new Date().getTime() - time < 33.3 ? 33.3 - new Date().getTime() + time : 0);
  //   //   return ;
  //   // } //min 33.3ms wait
  // );
}
},{"./collision_classes/camera":"ckrW","./collision_classes/lamp":"wHw1","./collision_classes/line":"b0Vr","./collision_classes/rect":"uowC","./collision_classes/vector":"ir7B","./gui_classes/ContextMenu":"TvkX","./gui_classes/DrawContext":"bIrb","./gui_classes/GUIDraw":"ClDD","./gui_classes/MainHelper":"ZK7P","./gui_classes/SVGDrag":"nkeQ","./render_classes/material":"ReAN","./render_classes/lampMaterial":"C1UQ","./gui_classes/PanelFunctions":"Pz0Q","./gui_classes/SideMenu":"Houu"}]},{},["EVxB"], null)
//# sourceMappingURL=app.53d4c9b6.js.map