"use strict";

var _validateLinks = require("../src/validateLinks.js");

var _api = require("../src/api.js");

/*const options = { validate: true };

const routesAbsol= [ { file: '/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/REAdme.md' },
 { file: '/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/carpeta2/REadme.md' } ]*/
var mdLinks = function mdLinks(route, options) {
  if (options.validate === true) {
    var x = (0, _validateLinks.arrObjLinks)((0, _api.convertToHTML)(route)).then(function (res) {
      return res;
    });
    return x;
  } else {
    return (0, _api.convertToHTML)(route);
  }
}; //console.log(mdLinks(routesAbsol,options));


module.exports = {
  mdLinks: mdLinks
};