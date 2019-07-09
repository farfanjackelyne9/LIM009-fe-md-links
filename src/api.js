#!/usr/bin/env node 
const [,,  ...args] = process.argv;
const route =`${args}` //Constante que contiende la ruta introducida en la consola.

const marked = require('marked');
const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');



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
    const state = fs.statSync(route).isFile(); 
    //console.log(`es`,state);
    return state
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
let mdFiles =[]
const analyzeMdFiles = (dir)=>{
    let route_Abs = absolutePath(dir);
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
analyzeMdFiles(route);
//console.log(mdFiles);
 

//Convierte md a HTML retorna [{href:..},{text:..},{file:..}..]--------------------------------------------------------------------------
const convertToHTML=(mdFiles)=> {
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



const arrObjLinks = (route) => {
    const arrLinks = route ;
    //console.log(arrLinks);
    const objLinks = arrLinks.map((e) => {
      const links = e.href;
      return fetch(links)
      .then((res) => {
        e.status = res.status;
        //console.log(res)
        if (res.ok) {
          e.statusText = 'ok';
        } else {
          e.statusText = 'fail';
        }
        return e;
      }).catch((err) => {
        e.ok = 'fail';
        e.status = err.message;
        return e;
      });
    });
    return Promise.all(objLinks);
  };
  arrObjLinks(convertToHTML(mdFiles))
  //.then((res)=>{console.log(res)})

  
  const stateLinks = (route) => {
    const promiseArrObjLinks = route.then((res)=>{
     const allLinks = res.map ((e)=>{e.href
     });
     const links = [...new Set(allLinks)];
     const failLinks = res.filter((e)=> e.statusText === 'fail')
     console.log({
         total:res.length,
         unique:links.length,
         broken:failLinks.length,
     })
    })
  };
  stateLinks(arrObjLinks(convertToHTML(mdFiles)))