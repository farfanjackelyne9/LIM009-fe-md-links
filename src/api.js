#!/usr/bin/env node 
/*const [,,  ...args] = process.argv;
const route =`${args}`*/ //Constante que contiende la ruta introducida en la consola.

const marked = require('marked');
const path = require('path');
const fs = require('fs');




//analiza ruta y devuelve si es absoluta.(T-F)-----------------------------------------
const absolutePath = (route)=>{
    if(path.isAbsolute(route)===true){
        return route;
    }else{
        return path.resolve(route);
    }
}

//Reconoce si es un archivo (T-F)---------------------------------------
const isFile = (route)=>{
    const stateF = fs.statSync(route).isFile(); 
    //console.log(`es`,state);
    return stateF
}


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
 //analyzExtMd(route)

 //Lee el archivo-----------------------------------------------------------
const read_Files = (route)=>{
   let file = fs.readFileSync(route).toString();
   return file
}


//Lee el directorio ---------------------------------------------------------
const read_dir = (route)=>{
    let dir = fs.readdirSync(route);
    return dir
}

//Recorre todos los archivos y regresa .md ----------------------------------------------------

const analyzeMdFiles = (dir)=>{
   let  mdFiles =[]
   
    let route_Abs = absolutePath(dir);
    if(isFile(route_Abs) === true){
      return mdFiles.push({file:route_Abs})
    }else{
        let directory = read_dir(route_Abs)
        for(let i=0 ;i<directory.length;i++){
            let absRoute = path.join(route_Abs,directory[i]);   
            if(is_Directory(absRoute)===true){
               const arrMd = analyzeMdFiles(absRoute);
              return mdFiles.concat(arrMd);
            }else if(analyzExtMd(absRoute)){
               mdFiles.push({file:absRoute});
            }
        }
    }
   return mdFiles;
}
//analyzeMdFiles(route);

 /*const routesAbsol= [ { file: '/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/REAdme.md' },
 { file: '/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/carpeta2/REadme.md' } ];*/

//Convierte md a HTML retorna [{href:..},{text:..},{file:..}..]--------------------------------------------------------------------------
const convertToHTML=(mdFiles)=> {
    let arrLink =[];
    mdFiles.forEach((element) => {
        let x = element.file;
        let dir = read_Files(x);
        const renderer = new marked.Renderer();
        //console.log(`esto`,renderer);
        renderer.link = (href,title,text)=>{
            arrLink.push({href:href, text:text, file:x})   
        }
        //convierte en html
        return marked(dir,{renderer});
    });
    return arrLink;
}
//console.log(convertToHTML(routesAbsol));


  module.exports ={
    absolutePath,
    isFile,
    is_Directory,
    analyzExtMd,
    read_Files,
    read_dir,
    analyzeMdFiles,
    convertToHTML,
  }