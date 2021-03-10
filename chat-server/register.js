var express = require('express');
var router = express.Router();
 const { post } = require('../app');
/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req);
  // res.json({
  //   data: null,
  //   message: "已注册成功，请重新登录！！",
  //   resCode: 0
  // })
});

module.exports = router;