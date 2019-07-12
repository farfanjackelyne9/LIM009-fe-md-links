#!/usr/bin/env node 
import {mdLinks} from './index.js'
import {stateLinks} from './options.js'

const [,,  ...args] = process.argv; 
const z = args; 
const route = [ { file: '/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/REAdme.md' }];

const x = (route ,args)=>{
    if(args[1] === '--validate' || args[1] === '-v'){
    mdLinks(route,{validate:true}).then((res)=>{console.log (res)})  
    }
}
x(route,z);



  
