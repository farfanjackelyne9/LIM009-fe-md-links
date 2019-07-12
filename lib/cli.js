#!/usr/bin/env node 
"use strict";

var _index = require("./index.js");

var _options = require("./options.js");

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _process$argv = _toArray(process.argv),
    args = _process$argv.slice(2);

var z = args;
var route = [{
  file: '/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/REAdme.md'
}];

var x = function x(route, args) {
  if (args[1] === '--validate' || args[1] === '-v') {
    (0, _index.mdLinks)(route, {
      validate: true
    }).then(function (res) {
      console.log(res);
    });
  }
};

x(route, z);