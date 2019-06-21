#!/usr/bin/env node 


const [,,  ...args] = process.argv; 
console.log(`link ingresado ${args}`); // Te pinta en la consola lo introducido.
const route = `${args}`; //Constante que contiende la ruta introducida en la consola.


const path = require('path');
const fs = require('fs');

//analiza ruta y devuelve si es absoluta.-----------------------------------------
export const absolutePath = (route)=>{
    return path.isAbsolute(route)
}

//convierte ruta relativa en absoluta ---------------------------------------------
export const newAbsRoute = (routeRelative)=>{
    return path.resolve(routeRelative);
}


//Reconoce si es un archivo ---------------------------------------
export const isFile = (route)=>{
    const state = fs.statSync(route).isFile(); 
    console.log(`es`,state);
    return state
}

//Analiza extension del archivo---------------------------------------------
export const analyzExt =(route)=>{
   const ext = path.extname(route);
   return ext
}


//Lee el directorio ---------------------------------------------------------
export const read_dir = (route)=>{
    let dir = fs.readdirSync(route);
    console.log(dir);
    return dir
}

//Recorre el directorio ----------------------------------------------------










