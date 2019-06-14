#!/usr/bin/env node 


const [,,  ...args] = process.argv; 
console.log(`link ingresado ${args}`); // Te pinta en la consola lo introducido.
 

let path = require('path');
const route = `${args}`; //Constante que contiende la ruta introducida en la consola.

//convierte ruta relativa en ruta absoluta.
const routes = (route)=>{
    if(path.isAbsolute(route) === false){
        const absolute = path.resolve(route);
        console.log(absolute);
    }
}
routes (route);



