import {arrObjLinks} from '../src/validateLinks.js'

const fetchMock = require('../__mocks__/node-fetch');
fetchMock.config.sendAsJson = false;



const links = [ { href: 'https://babeljs.io/docs/en/next/babel-helper-wrap-function.html',
    text: 'link1',
    file: '/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/REAdme.md' },
  { href: 'https://babeljs.io/docs/en/next/babel-helpers.html',
    text: 'link2',
    file: '/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/carpeta2/REadme.md' },
  { href: 'https://neoattack.com/proyectos1/',
    text: 'link3',
    file: '/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/carpeta2/REadme.md' } ]

 const link2 =[{"file": "/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/REAdme.md", "href": "https://babeljs.io/docs/en/next/babel-helper-wrap-function.html", "status": 200, "statusText": "ok", "text": "link1"}, {"file": "/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/carpeta2/REadme.md", "href": "https://babeljs.io/docs/en/next/babel-helpers.html", "status": 200, "statusText": "ok", "text": "link2"}, {"file": "/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/carpeta2/REadme.md", "href": "https://neoattack.com/proyectos1/", "status": 404, "statusText": "fail", "text": "link3"}];

describe("arrObjLinks",()=>{
    it("deberia ser una funcion",()=>{
        expect(typeof arrObjLinks).toEqual('function');
    }),
    it('Deberia retornar ok para los links validos y fail para los links rotos', (done) => {
      fetchMock
          .mock('https://babeljs.io/docs/en/next/babel-helper-wrap-function.html', 200)
          .mock('https://babeljs.io/docs/en/next/babel-helpers.html', 200)
          .mock('https://neoattack.com/proyectos1/', 404)
       arrObjLinks(links).then(res =>{
         expect(res).toStrictEqual(link2);
         done();
       })
      });

});