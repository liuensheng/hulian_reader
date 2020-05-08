var fs = require("fs")

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var rrrrr = "123";

  fs.readFile('helloworld.ofd', function (err, data) {
    rrrrr = data.toString();

    console.log("data读取: " + data.toString());

    if (err) {
      return console.error(err);
    }

    res.render('index', { title: '读文件测试',note: rrrrr });

  });
});

module.exports = router;
