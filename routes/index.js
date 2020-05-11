var fs = require("fs")
var archiver = require('archiver'); // archiver可用于普通的打包压缩
var AdmZip = require('adm-zip');  //用于读取未解压的zip包
var xml2js = require('xml2js');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var rrrrr = "123";

  fs.readFile('helloworld.ofd', function (err, data) {
    //console.log("data读取: " + data.toString());

    if (err) {
      return console.error(err);
    }

    var zip = new AdmZip('helloworld.ofd');

    var zipEntries = zip.getEntries();

    const hello = new Promise(function (resolve, reject) {
      zipEntries.forEach((item) => {
        if (item.isDirectory == false) {
          if (is_filetype(item.name, 'xml')) {
            rrrrr += item.name;
          }

          // res.render('index', { title: '读文件测试', note: zipEntries });
          // this.text = item.getData().toString();
        }

        // console.log("ltes " + rrrrr);
        // while (true) {};
      })
      resolve("success");
    });

    console.log("ltes111112");

    hello.then(
      function (value) {
        console.log(value);
      },
      function (err) {
        console.log(err)
      }
    );

    var data = zip.readAsText('OFD.xml','utf8');

    console.log(data);
  });
});

function is_filetype(filename, types) {
  types = types.split(',');
  var pattern = '\.(';
  for (var i = 0; i < types.length; i++) {
    if (0 != i) {
      pattern += '|';
    }
    pattern += types[i].trim();
  }
  pattern += ')$';
  return new RegExp(pattern, 'i').test(filename);
};

module.exports = router;
