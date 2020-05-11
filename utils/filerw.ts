/*
*
*/

var fs = require("fs")
var archiver = require('archiver'); // archiver可用于普通的打包压缩
var AdmZip = require('adm-zip');  //用于读取未解压的zip包

export class OfdFileReader {
    filePath: string = "";

    constructor() {

    }

    isFileType(filename: string, types: string): boolean {
        let typess = types.split(',');
        var pattern = '\.(';
        for (var i = 0; i < typess.length; i++) {
            if (0 != i) {
                pattern += '|';
            }
            pattern += typess[i].trim();
        }
        pattern += ')$';
        return new RegExp(pattern, 'i').test(filename);
    }

    loadOfdFile(path: string): boolean {
        var zip = new AdmZip(path);
        var zipEntries = zip.getEntries();

        const loadFileProcess = new Promise(function (resolve, reject) {
            zipEntries.forEach((item: { isDirectory: boolean; name: any; }) => {
                if (item.isDirectory == false) {
                    if (this.isFileType(item.name, 'xml')) {
                    }
                }
            })
            resolve("success");
        });

        loadFileProcess.then(
            function (value) {
                console.log(value);
            },
            function (err) {
                console.log(err);
                return false;
            }
        );

        return true;
    }
}

var obj = new OfdFileReader;