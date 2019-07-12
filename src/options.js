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
  
 export const stateLinks = (route) => {
    //const promiseArrObjLinks = route.then((res)=>{
     const allLinks = route.map ((e)=>{e.href
     });
     const links = [...new Set(allLinks)];
     const failLinks = route.filter((e)=> e.statusText === 'fail')
     return {
         total:route.length,
         unique:links.length,
         broken:failLinks.length,
     }
    //})
  };
  //console.log(stateLinks(links2));