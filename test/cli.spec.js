import {absolutePath,read_File,read_dir} from "../src/cli.js"

describe("absolutePath",()=>{
    it("deberia ser una funcion",()=>{
        expect(typeof absolutePath).tobe('function');
    });
    /*it("deberia devolver una ruta absoluta",()=>{
        expect(absolutePath('md-links').tobe('/home/jacky/md-links'));
    })
    it("deberia devolver la misma ruta",()=>{
        expect(absolutePath('/home/jacky/md-links').tobe('/home/jacky/md-links'));
    })*/
});

describe("read_File",()=>{
    it("deberia ser una funcion",()=>{
        expect(typeof read_File).tobe('function');
    });
  
});

describe("read_dir",()=>{
    it("deberia ser una funcion",()=>{
        expect(typeof read_dir).tobe('function');
    });
});
