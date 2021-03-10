var express = require('express');
var router = express.Router();
var session = require('express-session');
var User = require('../modals/user')
/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(123)
  //1.获取表单提交的数据
  //req.body
  //2.操作数据库
  //如果该用户已存在，不允许注册
  //如果不存在，则可以注册
  var body = req.body;
  User.findOne({
    username:body.username
  },function(err,data){
    if(err){
      //这里一般不直接throw,throw会程序直接退出
      return res.status(500).json({
        success:false,
        message:"服务端错误"
      })
    }
    //console.log(data)
    //如果用户名已存在
    if(data){
      //用户名已存在
      return res.status(200).json({
        rescode:0,
        success:true,
        message:"用户名已存在"
      })
    }

    new User(body).save(function(err,user){
      if(err){
        return res.status(500).json({
          rescode:-1,
          success:false,
          message:"服务端错误"
        })
      }
      //注册成功，使用Session记录用户的登陆状态
      req.session.user = user; 
      // console.log(req.session.user);
      res.status(200).json({
        success:true,
        data: null,
        message: "已注册成功，请重新登录！！",
        rescode:1
      })

    })

    //转换为json字符串形式，方便客户端得接受
    // return res.status(200).send((JSON.stringify({
    //   data: null,
    //   message: "已注册成功，请重新登录！！",
    //   resCode: 0
    // })
    // ))
    //利用json这种方式转换为json字符串得形式
    // return res.status(200).json({
    //   success:true,
    //   data: null,
    //   message: "已注册成功，请重新登录！！",
    //   resCode: 0
    // })
    
    // return res.status(200).send('{"data":null,"message":"已注册成功，请重新登录！！","resCode":0}')
  })
  // res.json({
  //   data: null,
  //   message: "已注册成功，请重新登录！！",
  //   resCode: 0
  // })
});

module.exports = router;