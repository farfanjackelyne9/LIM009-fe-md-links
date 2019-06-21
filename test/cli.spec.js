import {absolutePath,newAbsRoute,isFile,analyzExt,read_dir} from "../src/cli.js"

describe("absolutePath",()=>{
    it("deberia ser una funcion",()=>{
        expect(typeof absolutePath).toEqual('function');
    }),
    it("deberia retornar true si la ruta es absoluta",()=>{
        expect(absolutePath('/home/jacky/Escritorio/LIM009-fe-md-links/')).toBe(true)
    }),
    it("deberia retornar false si la ruta es relativa",()=>{
        expect(absolutePath('Escritorio/LIM009-fe-md-links/')).toBe(false)
    })
 
});

describe("newAbsRoute",()=>{
    it("deberia ser una funcion",()=>{
        expect(typeof newAbsRoute).toEqual('function');
    }),
    it("deberia resolver ruta relativa en ruta absoluta",()=>{
        expect(newAbsRoute('LIM009-fe-md-links')).toBe('/home/jacky/Escritorio/LIM009-fe-md-links/LIM009-fe-md-links')
    }),
    it("deberia retornar ruta absoluta",()=>{
        expect(newAbsRoute('/home/jacky/Escritorio/LIM009-fe-md-links')).toBe('/home/jacky/Escritorio/LIM009-fe-md-links')
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

describe("analyzExt",()=>{
    it("deberia ser una funcion",()=>{
        expect(typeof analyzExt).toEqual('function');
    }),
    it("deberia retornar la extensión del archivo",()=>{
        expect(analyzExt('/home/jacky/Escritorio/LIM009-fe-md-links/src/cli.js')).toBe('.js')
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
        'coverage',
        'node_modules',
        'package.json',
        'src',
        'test' ])
    })
});
