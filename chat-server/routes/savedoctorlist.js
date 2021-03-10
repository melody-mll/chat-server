var express = require('express');
var router = express.Router();
const Doctor = require('../modals/doctor');
const querystring = require('querystring');
const { post } = require('../app');
/* GET users listing. */
router.post('/', function(req, res, next) {
  var body=req.body;
  Doctor.find({
    doctorid:body.doctorid
 },function(err,ret){
    if(err){
        console.log("查询失败")
    }else{
      if(ret.length!==0){
        res.status(200).json({
          success:true,
          data: null,
          message: "医生编号已重复！！",
          rescode:0
        })
      }else{
        new Doctor(body).save(function(err,user){
          if(err){
            return res.status(500).json({
              rescode:-1,
              success:false,
              message:"服务端错误"
            })
          }else{
          res.status(200).json({
            success:true,
            data: null,
            message: "添加成功！！",
            rescode:1
          })
    
        } 
    
        })
      }
    }
})
  // console.log(req);
  // res.json({
  //   data: [
  //     {
  //       key:1,
  //       index:1,
  //       doctorid: '1',
  //       doctorname: 'John Brown',
  //       doctorsex:'男',
  //       doctorage: 32,
  //       doctorphone:18758222222,
  //       doctorposition:'主医师',
  //       doctordepart:'骨科',
  //       doctorproject:'project1'
  //     },
  //     {
  //       key:2,
  //       index:2,
  //       doctorid: '22',
  //       doctorname: 'John Brown',
  //       doctorsex:'男',
  //       doctorage: 32,
  //       doctorphone:18758222222,
  //       doctorposition:'主医师',
  //       doctordepart:'骨科',
  //       doctorproject:'project2'
  //     },
  //     {
  //       key:3,
  //       index:3,
  //       doctorid: '223',
  //       doctorname: 'John Brown',
  //       doctorsex:'女',
  //       doctorage: 32,
  //       doctorphone:18758222222,
  //       doctorposition:'主医师',
  //       doctordepart:'骨科',
  //       doctorproject:'project3'
  //     }
  //   ],
  //   message: "success",
  //   resCode: 1
  // })
});

module.exports = router;