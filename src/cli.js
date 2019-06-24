#!/usr/bin/env node 


const [,,  ...args] = process.argv; 
console.log(`link ingresado ${args}`); // Te pinta en la consola lo introducido.
const route = `${args}`; //Constante que contiende la ruta introducida en la consola.


const path = require('path');
const fs = require('fs');

//analiza ruta y devuelve si es absoluta.(T-F)-----------------------------------------
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
let mdFiles =[];
const analyzeMdFiles = (dir)=>{
    //let arrFiles = [];
    //console.log('[+]',dir);
    let files = fs.readdirSync(dir);
    for(let i=0 ;i<files.length;i++){
        let absRoute = path.join(dir,files[i]);
      
        if(fs.lstatSync(absRoute).isDirectory()===true){
            analyzeMdFiles(absRoute);

        }else if(path.extname(absRoute) === '.md'){
            objectfArray ={};
            objectfArray.file= absRoute;
            //console.log(`\t`,next);
            //arrFiles.push(next);
            mdFiles.push(objectfArray);
        }
    }
    //console.log(arrFiles);
}
analyzeMdFiles(route);
console.log(mdFiles);




