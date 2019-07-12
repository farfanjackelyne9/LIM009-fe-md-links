import {mdLinks} from '../src/index.js'

const fetchMock = require('../__mocks__/node-fetch');
fetchMock.config.sendAsJson = false;

const options = { validate: true };

const routesAbsol= [ { file: '/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/REAdme.md' },
 { file: '/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/carpeta2/REadme.md' } ]

const output = [ { href: 'https://babeljs.io/docs/en/next/babel-helper-wrap-function.html',
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
statusText: 'fail' } ]

const output2 = [{"file": "/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/REAdme.md", 
"href": "https://babeljs.io/docs/en/next/babel-helper-wrap-function.html", 
"text": "link1"}, 
{"file": "/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/carpeta2/REadme.md", 
"href": "https://babeljs.io/docs/en/next/babel-helpers.html",
 "text": "link2"}, 
 {"file": "/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/carpeta2/REadme.md", 
 "href": "https://neoattack.com/proyectos1/", 
 "text": "link3"}];

describe("mdLinks",()=>{
    it("deberia ser una funcion",()=>{
        expect(typeof mdLinks).toEqual('function');
    }),
    
    it("deberia retornar la validación de los links",(done)=>{
        fetchMock
        .mock('https://babeljs.io/docs/en/next/babel-helper-wrap-function.html', 200)
        .mock('https://babeljs.io/docs/en/next/babel-helpers.html', 200)
        .mock('https://neoattack.com/proyectos1/', 404)
        expect(mdLinks(routesAbsol,options).then((res)=>{
            expect(res).toStrictEqual(output);
            done()
        }))
    })
    it("deberia retornar un array de objetos con propiedades href,file,text ",()=>{
        expect(mdLinks(routesAbsol,options)).toEqual(output2);
    })
 
});