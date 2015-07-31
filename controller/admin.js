var express = require('express');
var router = express.Router();
var http= require('http');
var io = require('socket.io')(http);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/login', function(req, res, next) {
  res.render('admin/login', { title: 'Express' });
});

module.exports = router;
