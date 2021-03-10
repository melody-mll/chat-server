var express = require('express');
var router = express.Router();
const querystring = require('querystring');
const { post } = require('../app');

/* GET users listing. */
router.post('/', function(req, res, next) {
 
  res.json({
    data: null,
    message: "验证码已发送，验证码：ef5asd",
    resCode: 0
  })
});

module.exports = router;
