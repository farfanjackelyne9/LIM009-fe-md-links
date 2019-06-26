#!/usr/bin/env node 
"use strict";

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _process$argv = _toArray(process.argv),
    args = _process$argv.slice(2);

var route = "".concat(args); //Constante que contiende la ruta introducida en la consola.

var marked = require('marked');

var path = require('path');

var fs = require('fs'); //analiza ruta y devuelve si es absoluta.(T-F)-----------------------------------------

/*const absolutePath = (route)=>{
    return path.isAbsolute(route)
}

//convierte ruta relativa en absoluta ---------------------------------------------
const newAbsRoute = (routeRelative)=>{
    return path.resolve(routeRelative);
}


//Reconoce si es un archivo (T-F)---------------------------------------
const isFile = (route)=>{
    const state = fs.statSync(route).isFile(); 
    //console.log(`es`,state);
    return state
}

*/
//Reconoce si es un directorio (T-F)----------------------------------------


var is_Directory = function is_Directory(route) {
  var state = fs.statSync(route).isDirectory(); //console.log(`es directorio`, state);

  return state;
}; //Analiza extension del archivo---------------------------------------------


var analyzExtMd = function analyzExtMd(route) {
  var ext = path.extname(route) === '.md';
  return ext;
};
/*
 //Lee el archivo-----------------------------------------------------------
const read_Files = (route)=>{
   let file = fs.readFileSync(route).toString();
   return file
}*/
//Lee el directorio ---------------------------------------------------------


var read_dir = function read_dir(route) {
  var dir = fs.readdirSync(route);
  return dir;
}; //Recorre todos los archivos y regresa .md ----------------------------------------------------


var mdFiles = [];

var analyzeMdFiles = function analyzeMdFiles(dir) {
  var files = read_dir(dir);

  for (var i = 0; i < files.length; i++) {
    var absRoute = path.join(dir, files[i]);

    if (is_Directory(absRoute) === true) {
      analyzeMdFiles(absRoute);
    } else if (analyzExtMd(absRoute)) {
      mdFiles.push({
        file: absRoute
      });
    }
  }
};

analyzeMdFiles(route);
console.log(mdFiles);
/*const convertToHTML=(markdownText)=> {

    let dir = fs.readFileSync(markdownText);
    let readFile = dir.toString();
    const renderer = new marked.Renderer()
   renderer.link = externalLinkRenderer;
   return marked(readFile, { renderer });
  }
  convertToHTML(route)*/

/*
const externalLinkRenderer = (href, title, text) => {
    
    if (href.startsWith("http://") || href.startsWith("https://")) {
       
      if (!text) {
        text = href
      }
      console.log(`{href:${href} title:${title}  text:${text}}`);
      
    }
    return `[${text}](${href})`
}
  */