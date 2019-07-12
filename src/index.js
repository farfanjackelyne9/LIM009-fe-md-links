
import {arrObjLinks} from '../src/validateLinks.js'
import {convertToHTML} from '../src/api.js'


/*const options = { validate: true };

const routesAbsol= [ { file: '/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/REAdme.md' },
 { file: '/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/carpeta2/REadme.md' } ]*/

const mdLinks = (route,options) =>{
        if (options.validate === true) {
           const x = arrObjLinks(convertToHTML(route))
           .then((res) => {
            return  res;
          })
          return x
        }else{
            return convertToHTML(route);
        }

}
//console.log(mdLinks(routesAbsol,options));
 module.exports ={
    mdLinks
 }