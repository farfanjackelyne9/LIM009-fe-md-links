import {stateLinks } from '../src/options.js'

const links2 = [ { href: 'https://babeljs.io/docs/en/next/babel-helper-wrap-function.html',
 text: 'link1',
 file: '/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/REAdme.md',
 status: 200,
 statusText: 'ok' },
{ href: 'https://babeljs.io/docs/en/next/babel-helpers.html',
 text: 'link2',
 file: '/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/carpeta2/REadme.md',
 status: 200,
 statusText: 'ok' },
{ href: 'https://neoattack.com/proyectos1/',
 text: 'link3',
 file: '/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/carpeta2/REadme.md',
 status: 404,
 statusText: 'fail' } ];

describe("stateLinks",()=>{
    it("deberia ser una funcion",()=>{
        expect(typeof stateLinks).toEqual('function');
    }),
    
    it("deberia retornar ruta absoluta",()=>{
        expect(stateLinks(links2)).toBe({ total: 3, unique: 1, broken: 1 })
    })
 
});