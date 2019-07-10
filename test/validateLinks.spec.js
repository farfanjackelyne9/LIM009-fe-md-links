import {arrObjLinks} from '../src/validateLinks.js'

const fetchMock = require('../node_modules/fetch-mock');
fetchMock.config.sendAsJson = false;

const links2 = [
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

describe("arrObjLinks",()=>{
    it("deberia ser una funcion",()=>{
        expect(typeof arrObjLinks).toEqual('function');
    }),
    it('Deberia regresar un objeto con los datos de los links', (done) => {
       fetchMock
          .mock('https://babeljs.io/docs/en/next/babel-helper-wrap-function.html', 200)
          .mock('https://babeljs.io/docs/en/next/babel-helpers.html', 200)
          .mock('https://neoattack.com/proyectos1/', 404)
        const ApliValidateLinks = arrObjLinks('/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/')
        ApliValidateLinks.then(response => {
          expect(response).toEqual(links2);
          done();
        })
          .catch(error => done());
      });

});