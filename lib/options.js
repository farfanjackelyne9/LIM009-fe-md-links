"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stateLinks = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var links2 = [{
  href: 'https://babeljs.io/docs/en/next/babel-helper-wrap-function.html',
  text: 'link1',
  file: '/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/REAdme.md',
  status: 200,
  statusText: 'ok'
}, {
  href: 'https://babeljs.io/docs/en/next/babel-helpers.html',
  text: 'link2',
  file: '/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/carpeta2/REadme.md',
  status: 200,
  statusText: 'ok'
}, {
  href: 'https://neoattack.com/proyectos1/',
  text: 'link3',
  file: '/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/carpeta2/REadme.md',
  status: 404,
  statusText: 'fail'
}];

var stateLinks = function stateLinks(route) {
  //const promiseArrObjLinks = route.then((res)=>{
  var allLinks = route.map(function (e) {
    e.href;
  });

  var links = _toConsumableArray(new Set(allLinks));

  var failLinks = route.filter(function (e) {
    return e.statusText === 'fail';
  });
  return {
    total: route.length,
    unique: links.length,
    broken: failLinks.length //})

  };
}; //console.log(stateLinks(links2));


exports.stateLinks = stateLinks;