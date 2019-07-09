"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.read_dir = exports.read_Files = exports.analyzExtMd = exports.is_Directory = exports.isFile = exports.absolutePath = void 0;

var marked = require('marked');

var path = require('path');

var fs = require('fs');

var fetch = require('node-fetch'); //analiza ruta y devuelve si es absoluta.(T-F)-----------------------------------------


var absolutePath = function absolutePath(route) {
  if (path.isAbsolute(route) === true) {
    return route;
  } else {
    return path.resolve(route);
  }
}; //Reconoce si es un archivo (T-F)---------------------------------------


exports.absolutePath = absolutePath;

var isFile = function isFile(route) {
  var state = fs.statSync(route).isFile(); //console.log(`es`,state);

  return state;
}; //Reconoce si es un directorio (T-F)----------------------------------------


exports.isFile = isFile;

var is_Directory = function is_Directory(route) {
  var state = fs.statSync(route).isDirectory(); //console.log(`es directorio`, state);

  return state;
}; //Analiza extension del archivo---------------------------------------------


exports.is_Directory = is_Directory;

var analyzExtMd = function analyzExtMd(route) {
  var ext = path.extname(route) === '.md';
  return ext;
}; //Lee el archivo-----------------------------------------------------------


exports.analyzExtMd = analyzExtMd;

var read_Files = function read_Files(route) {
  var file = fs.readFileSync(route).toString();
  return file;
}; //Lee el directorio ---------------------------------------------------------


exports.read_Files = read_Files;

var read_dir = function read_dir(route) {
  var dir = fs.readdirSync(route);
  return dir;
}; //Recorre todos los archivos y regresa .md ----------------------------------------------------

/*let mdFiles =[]
const analyzeMdFiles = (dir)=>{
    let route_Abs = absolutePath(dir);
    console.log(route_Abs);
    if(isFile(route_Abs) === true){
      mdFiles.push({file:route_Abs})
    }else{
        let directory = read_dir(route_Abs)
        for(let i=0 ;i<directory.length;i++){
            let absRoute = path.join(route_Abs,directory[i]);   
            if(is_Directory(absRoute)===true){
                analyzeMdFiles(absRoute);
            }else if(analyzExtMd(absRoute)){
                mdFiles.push({file:absRoute});
            }
        }
    } 
}
analyzeMdFiles(route);*/
//console.log(mdFiles);
//Convierte md a HTML retorna [{href:..},{text:..},{file:..}..]--------------------------------------------------------------------------

/*const convertToHTML=(mdFiles)=> {
    let arrLink =[];
    mdFiles.forEach((element) => {
        let x = element.file;
        let dir = read_Files(x);
        const renderer = new marked.Renderer();
        renderer.link = (href,title,text)=>{
            arrLink.push({href:href, text:text, file:x})   
        }
        //convierte en html
        return marked(dir,{renderer});
    });
    return arrLink;
}
convertToHTML(mdFiles);


const a =(route)=>{
    
    const arrLinks =convertToHTML(mdFiles);
    arrLinks.map((x)=>{
  new Promise(function(resolve, reject) {
  const links =x.href;
  const validateLinks = fetch(links)
  //console.log(validateLinks)
.then(resolve=>{
  console.log(resolve.statusText);
})
 
});

        
});
}
a(route)*/


exports.read_dir = read_dir;