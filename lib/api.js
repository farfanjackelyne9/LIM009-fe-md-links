#!/usr/bin/env node 

/*const [,,  ...args] = process.argv;
const route =`${args}`*/
//Constante que contiende la ruta introducida en la consola.
"use strict";

var marked = require('marked');

var path = require('path');

var fs = require('fs'); //analiza ruta y devuelve si es absoluta.(T-F)-----------------------------------------


var absolutePath = function absolutePath(route) {
  if (path.isAbsolute(route) === true) {
    return route;
  } else {
    return path.resolve(route);
  }
}; //Reconoce si es un archivo (T-F)---------------------------------------


var isFile = function isFile(route) {
  var stateF = fs.statSync(route).isFile(); //console.log(`es`,state);

  return stateF;
}; //Reconoce si es un directorio (T-F)----------------------------------------


var is_Directory = function is_Directory(route) {
  var state = fs.statSync(route).isDirectory(); //console.log(`es directorio`, state);

  return state;
}; //Analiza extension del archivo---------------------------------------------


var analyzExtMd = function analyzExtMd(route) {
  var ext = path.extname(route) === '.md';
  return ext;
}; //analyzExtMd(route)
//Lee el archivo-----------------------------------------------------------


var read_Files = function read_Files(route) {
  var file = fs.readFileSync(route).toString();
  return file;
}; //read_Files(route)
//Lee el directorio ---------------------------------------------------------


var read_dir = function read_dir(route) {
  var dir = fs.readdirSync(route);
  return dir;
}; //Recorre todos los archivos y regresa .md ----------------------------------------------------


var analyzeMdFiles = function analyzeMdFiles(dir) {
  var mdFiles = [];
  var route_Abs = absolutePath(dir);

  if (isFile(route_Abs) === true) {
    return mdFiles.push({
      file: route_Abs
    });
  } else {
    var directory = read_dir(route_Abs);

    for (var i = 0; i < directory.length; i++) {
      var absRoute = path.join(route_Abs, directory[i]);

      if (is_Directory(absRoute) === true) {
        var arrMd = analyzeMdFiles(absRoute);
        return mdFiles.concat(arrMd);
      } else if (analyzExtMd(absRoute)) {
        mdFiles.push({
          file: absRoute
        });
      }
    }
  }

  return mdFiles;
}; //analyzeMdFiles(route);

/*const routesAbsol= [ { file: '/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/REAdme.md' },
{ file: '/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/carpeta2/REadme.md' } ];*/
//Convierte md a HTML retorna [{href:..},{text:..},{file:..}..]--------------------------------------------------------------------------


var convertToHTML = function convertToHTML(mdFiles) {
  var arrLink = [];
  mdFiles.forEach(function (element) {
    var x = element.file;
    var dir = read_Files(x);
    var renderer = new marked.Renderer(); //console.log(`esto`,renderer);

    renderer.link = function (href, title, text) {
      arrLink.push({
        href: href,
        text: text,
        file: x
      });
    }; //convierte en html


    return marked(dir, {
      renderer: renderer
    });
  });
  return arrLink;
}; //console.log(convertToHTML(routesAbsol));


module.exports = {
  absolutePath: absolutePath,
  isFile: isFile,
  is_Directory: is_Directory,
  analyzExtMd: analyzExtMd,
  read_Files: read_Files,
  read_dir: read_dir,
  analyzeMdFiles: analyzeMdFiles,
  convertToHTML: convertToHTML
};