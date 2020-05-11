/*
*
*/

var fs = require("fs")
var archiver = require('archiver'); // archiver可用于普通的打包压缩
var AdmZip = require('adm-zip');  //用于读取未解压的zip包

import * as Const from '../core/Const'

export class OfdFileReader {
    _filePath: string = "";
    _zip = null;

    constructor() {

    }

    readFileText(zipFilePath:string):string {
        if (null == this._zip) {
            return "";
        }

        var data = this._zip.readAsText(zipFilePath,'utf8');

        return data;
    }

    private isFileType(filename: string, types: string): boolean {
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
        this._filePath = path;
        this._zip = new AdmZip(path);

        if (null == this._zip) {
            return false;
        }

        var zipEntries = this._zip.getEntries();

        const loadFileProcess = new Promise(function (resolve, reject) {
            zipEntries.forEach((item: { isDirectory: boolean; name: any; }) => {
                if (item.isDirectory == false) {
                    if (this.isFileType(item.name, Const.EXT_FILE)) {
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