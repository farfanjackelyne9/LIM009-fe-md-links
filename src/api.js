#!/usr/bin/env node 
const [,,  ...args] = process.argv;
const route =`${args}` //Constante que contiende la ruta introducida en la consola.
const marked = require('marked');
const path = require('path');
const fs = require('fs');


//analiza ruta y devuelve si es absoluta.(T-F)-----------------------------------------
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
const is_Directory = (route) =>{
    const state = fs.statSync(route).isDirectory();
    //console.log(`es directorio`, state);
    return state
}


//Analiza extension del archivo---------------------------------------------
const analyzExtMd =(route)=>{
    const ext = path.extname(route) === '.md';
    return ext
 }
/*
 //Lee el archivo-----------------------------------------------------------
const read_Files = (route)=>{
   let file = fs.readFileSync(route).toString();
   return file
}*/


//Lee el directorio ---------------------------------------------------------
const read_dir = (route)=>{
    let dir = fs.readdirSync(route);
    return dir
}

//Recorre todos los archivos y regresa .md ----------------------------------------------------
let mdFiles =[]
const analyzeMdFiles = (dir)=>{
    let files = read_dir(dir)
    for(let i=0 ;i<files.length;i++){
        let absRoute = path.join(dir,files[i]);   
        if(is_Directory(absRoute)===true){
            analyzeMdFiles(absRoute);
        }else if(analyzExtMd(absRoute)){
            mdFiles.push({file:absRoute});
        }
    }
}
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
   
