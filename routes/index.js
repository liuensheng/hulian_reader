var fs = require("fs")

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: '读文件测试' });
});

module.exports = router;
