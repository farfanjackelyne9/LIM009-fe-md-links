import {
    absolutePath,
    isFile,
    is_Directory,
    analyzExtMd,
    read_Files,
    read_dir,
    analyzeMdFiles,
    convertToHTML,
    stateLinks
} from "../src/api.js"




describe("absolutePath",()=>{
    it("deberia ser una funcion",()=>{
        expect(typeof absolutePath).toEqual('function');
    }),
    it("deberia resolver ruta relativa en ruta absoluta",()=>{
        expect(absolutePath('LIM009-fe-md-links')).toBe('/home/jacky/Escritorio/LIM009-fe-md-links/LIM009-fe-md-links')
    }),
    it("deberia retornar ruta absoluta",()=>{
        expect(absolutePath('/home/jacky/Escritorio/LIM009-fe-md-links')).toBe('/home/jacky/Escritorio/LIM009-fe-md-links')
    })
 
});

describe("isFile",()=>{
    it("deberia ser una funcion",()=>{
        expect(typeof isFile).toEqual('function');
    });
    it("deberia retornar true si es un archivo",()=>{
        expect(isFile('/home/jacky/Escritorio/LIM009-fe-md-links/src/cli.js')).toBe(true)
    }),
    it("deberia retornar false si no es un archivo",()=>{
        expect(isFile('/home/jacky/Escritorio/LIM009-fe-md-links/src/')).toBe(false)
    })
  
});

describe("is_Directory",()=>{
    it("deberia ser una funcion",()=>{
        expect(typeof is_Directory).toEqual('function');
    });
    it("deberia retornar true si es un directorio",()=>{
        expect(is_Directory('/home/jacky/Escritorio/LIM009-fe-md-links/src/')).toBe(true)
    }),
    it("deberia retornar false si no es un directorio",()=>{
        expect(is_Directory('/home/jacky/Escritorio/LIM009-fe-md-links/src/cli.js')).toBe(false)
    })
  
});

describe("analyzExtMd",()=>{
    it("deberia ser una funcion",()=>{
        expect(typeof analyzExtMd).toEqual('function');
    });
    it("deberia retornar false para un archivo .js",()=>{
        expect(analyzExtMd('/home/jacky/Escritorio/LIM009-fe-md-links/src/cli.js')).toBe(false)
    })
    it("deberia retornar true para un archivo .md",()=>{
        expect(analyzExtMd('/home/jacky/Escritorio/LIM009-fe-md-links/README.md')).toBe(true)
    })
  
});

describe("read_Files",()=>{
    it("deberia ser una funcion",()=>{
        expect(typeof read_Files).toEqual('function');
    });
    it("deberia retornar un array con el contenido del directorio",()=>{
        expect(read_Files('/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/REAdme.md')).toEqual("[link1](https://babeljs.io/docs/en/next/babel-helper-wrap-function.html)")
    })
});

describe("read_dir",()=>{
    it("deberia ser una funcion",()=>{
        expect(typeof read_dir).toEqual('function');
    });
    it("deberia retornar un array con el contenido del directorio",()=>{
        expect(read_dir('/home/jacky/Escritorio/LIM009-fe-md-links/')).toEqual([ '.babelrc',
  '.eslintrc',
  '.git',
  '.gitignore',
  'README.md',
  'READMe.md',
  "__mocks__",
  'coverage',
  'lib',
  'node_modules',
  'package.json',
  'src',
  'test' ])
    })
});

describe("analyzeMdFiles",()=>{
    it("deberia ser una funcion",()=>{
        expect(typeof analyzeMdFiles).toEqual('function');
    }),
    it("deberia retornar rutas absolutas en un array de objetos con la propiedad file",()=>{
        expect(analyzeMdFiles('/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/')).toStrictEqual([{file: "/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/REAdme.md"}, {file: "/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/carpeta2/REadme.md"}])
    })

});

describe("convertToHTML",()=>{
    it("deberia ser una funcion",()=>{
        expect(typeof convertToHTML).toEqual('function');
    }),
    it("deberia retornar rutas absolutas en un array de objetos con la propiedad file",()=>{
        expect(convertToHTML('/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta')).toBe([ { href: 'https://babeljs.io/docs/en/next/babel-helper-wrap-function.html',
        text: 'link1',
        file: '/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/REAdme.md' },
      { href: 'https://babeljs.io/docs/en/next/babel-helpers.html',
        text: 'link2',
        file: '/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/carpeta2/REadme.md' },
      { href: 'https://neoattack.com/proyectos1/',
        text: 'link3',
        file: '/home/jacky/Escritorio/LIM009-fe-md-links/src/carpeta/carpeta2/REadme.md' } ])
    })

});
