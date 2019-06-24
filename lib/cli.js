#!/usr/bin/env node 
"use strict";

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _process$argv = _toArray(process.argv),
    args = _process$argv.slice(2);

console.log("link ingresado ".concat(args)); // Te pinta en la consola lo introducido.

var route = "".concat(args); //Constante que contiende la ruta introducida en la consola.

var path = require('path');

var fs = require('fs'); //analiza ruta y devuelve si es absoluta.(T-F)-----------------------------------------

/*export const absolutePath = (route)=>{
    return path.isAbsolute(route)
}

//convierte ruta relativa en absoluta ---------------------------------------------
export const newAbsRoute = (routeRelative)=>{
    return path.resolve(routeRelative);
}


//Reconoce si es un archivo (T-F)---------------------------------------
const isFile = (route)=>{
    const state = fs.statSync(route).isFile(); 
    //console.log(`es`,state);
    return state
}
isFile(route);

//Reconoce si es un directorio (T-F)----------------------------------------
const isDirectory = (route) =>{
    const state = fs.statSync(route).isDirectory();
    //console.log(`es directorio`, state);
    return state
}
isDirectory(route)

//Analiza extension del archivo---------------------------------------------
const analyzExtMd =(route)=>{
   const ext = path.extname(route) === '.md';
   return ext
}
analyzExtMd(route);


//Lee el directorio ---------------------------------------------------------
const read_dir = (route)=>{
    let dir = fs.readdirSync(route);
    dir.forEach((e) =>{
     console.log(path.join(route,e))
    })
    
}
read_dir(route);*/
//Recorre todos los archivos y regresa .md ----------------------------------------------------


function crawl(dir) {
  console.log('[+]', dir);
  var files = fs.readdirSync(dir);

  for (var x in files) {
    var next = path.join(dir, files[x]);

    if (fs.lstatSync(next).isDirectory() == true) {
      crawl(next);
    } else {
      console.log("\t", next);
    }
  }
}

crawl(route);