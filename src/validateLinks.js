const fetch = require('node-fetch');


/*const links = [ { href: 'https://babeljs.io/docs/en/next/babel-helper-wrap-function.html',
    text: 'link1',
    file: '/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/REAdme.md' },
  { href: 'https://babeljs.io/docs/en/next/babel-helpers.html',
    text: 'link2',
    file: '/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/carpeta2/REadme.md' },
  { href: 'https://neoattack.com/proyectos1/',
    text: 'link3',
    file: '/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/carpeta2/REadme.md' } ]*/


export const arrObjLinks = (route) => {
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
      //arrObjLinks(links)
      //.then((res)=>{console.log(res)});