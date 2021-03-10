var express = require('express');
var router = express.Router();
var Doctor = require('../modals/doctor');
var Schedule = require('../modals/schedule');
/* GET users listing. */
router.get('/', function(req, res, next) {
    const body = req.query;
  //   Doctor.find({
  //     doctordepart:body.doctordepart,
  //     doctorproject:body.doctorproject
  //   },function(err,ret){
  //     if(err){
  //         console.log("查询失败")
  //     }else{
  //       console.log(ret);
  //       res.json({
  //         data:ret,
  //         rescode:1,
  //         message:"成功！！！"
  //       })
  //     }
  // })
  Doctor.find({doctordepart:body.doctordepart,doctorproject:body.doctorproject},function(err,ret){
    if(err){
        console.log("查询失败")
    }else{
        res.json({
              data: ret,
              message: "登录成功！！",
              resCode: 0
        })
    }
}) 
  // res.json({
  //   data: [{name:"医生1"},{name:"医生2"},{name:"医生3"}],
  //   message: "登录成功！！",
  //   resCode: 0
  // })
});

module.exports = router;