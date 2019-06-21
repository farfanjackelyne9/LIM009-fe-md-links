#!/usr/bin/env node 
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.read_dir = exports.analyzExt = exports.isFile = exports.newAbsRoute = exports.absolutePath = void 0;

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _process$argv = _toArray(process.argv),
    args = _process$argv.slice(2);

console.log("link ingresado ".concat(args)); // Te pinta en la consola lo introducido.

var route = "".concat(args); //Constante que contiende la ruta introducida en la consola.

var path = require('path');

var fs = require('fs'); //analiza ruta y devuelve si es absoluta.-----------------------------------------


var absolutePath = function absolutePath(route) {
  return path.isAbsolute(route);
}; //convierte ruta relativa en absoluta ---------------------------------------------


exports.absolutePath = absolutePath;

var newAbsRoute = function newAbsRoute(routeRelative) {
  return path.resolve(routeRelative);
}; //Reconoce si es un archivo ---------------------------------------


exports.newAbsRoute = newAbsRoute;

var isFile = function isFile(route) {
  var state = fs.statSync(route).isFile();
  console.log("es", state);
  return state;
}; //Analiza extension del archivo---------------------------------------------


exports.isFile = isFile;

var analyzExt = function analyzExt(route) {
  var ext = path.extname(route);
  return ext;
}; //Lee el directorio ---------------------------------------------------------


exports.analyzExt = analyzExt;

var read_dir = function read_dir(route) {
  var dir = fs.readdirSync(route);
  console.log(dir);
  return dir;
}; //Recorre el directorio ----------------------------------------------------


exports.read_dir = read_dir;