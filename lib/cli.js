#!/usr/bin/env node 
"use strict";

var _api = require("./api.js");

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _process$argv = _toArray(process.argv),
    args = _process$argv.slice(2);

var route = args[0]; //Constante que contiende la ruta introducida en la consola.

(0, _api.absolutePath)(route);
(0, _api.isFile)(route);
(0, _api.is_Directory)(route);
(0, _api.analyzExtMd)(route);
(0, _api.read_Files)(route);
(0, _api.read_dir)(route); //analyzeMdFiles(route);