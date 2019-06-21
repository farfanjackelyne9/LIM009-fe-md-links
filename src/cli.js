#!/usr/bin/env node 


const [,,  ...args] = process.argv; 
console.log(`link ingresado ${args}`); // Te pinta en la consola lo introducido.
 

let path = require('path');
const route = `${args}`; //Constante que contiende la ruta introducida en la consola.
const fs = require('fs');

//convierte ruta relativa en ruta absoluta.-----------------------------------------
const routes = (route)=>{
    if(path.isAbsolute(route) === false){
        const absolute = path.resolve(route);
        console.log(absolute);
    }
}
//routes (route);

//Reconoce si es un archivo de forma sincrona---------------------------------------
const read_File = (route)=>{
    let data = fs.readFileSync(route); 
console.log(data.toString())
}
//read_File(route);
 

//Reconoce si es un directorio de forma sincrona-----------------------------------
const read_dir = (route)=>{
    let dir = fs.readdirSync(route);
    console.log(dir);
}
//read_dir(route);





/*let buff = Buffer.from(route);

// Reconoce si es un archivo--------------------------------------------------------
const readF = (buff)=>{
    fs.readFile(buff, 'utf-8',(err, data) => { 
        if (err) {
          console.log('error: ',err);
        }else{
            console.log(data)
        }
    });
}
readF(buff)

// Reconoce si es un directorio (devuelve un array)----------------------------------
const readD = (buff) =>{
    fs.readdir(buff,(err,data) =>{
        if(err){
            console.log('error: ',err);
        }else{
           console.log(data);

        }
    })
}
readD(buff)*/




