#!/usr/bin/env node 


const [,,  ...args] = process.argv; 
console.log(`link ingresado ${args}`); // Te pinta en la consola lo introducido.

let path = require('path'); 

const route = `${args}`; //Constante que contiende la ruta introducida en la consola.

const routes = (route)=>{
    if(path.isAbsolute(route) === true){
        console.log("es absoluta");
    }else{
        console.log("es relativa");
    }

}
routes (route);