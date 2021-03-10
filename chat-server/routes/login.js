var express = require('express');
var router = express.Router();
var User = require('../modals/user')
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  //1.获取表单数据
  //2. 查询数据库，用户名密码是否正确
  //3.发送响应数据
  var body = req.query;
  User.findOne({
    username:body.username,
    password:body.password
  },function(err,user){
    if(err){
      return res.status(500).json({
        rescode:-1,
        success:false,
        message:err.message
      }) 
    }

    if(!user){
      return res.status(200).json({
        rescode:0,
        success:true,
        message:"用户名或密码错误"
      })
    }
    //用户存在，登陆成功
    req.session.user = user;
    res.status(200).json({
      rescode:1,
      success:true,
      message:"登陆成功"
    })
  })
  // res.json({
  //   data: {username: "12", token: "da5ab1ab3350019298e24f772389c383"},
  //   message: "登录成功！！",
  //   resCode: 0
  // })
});

module.exports = router;