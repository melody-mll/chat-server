var express = require('express');
var router = express.Router();
var Doctor = require('../modals/doctor');
const querystring = require('querystring');
const { post } = require('../app');
/* GET users listing. */
router.post('/', function(req, res, next) {
  // const body = req.body;
  Doctor.find(function(err,ret){
     if(err){
         console.log("查询失败")
     }else{
       res.json({
         data:ret,
         rescode:1,
         message:"成功！！！"
       })
     }
 }) 
  // console.log(22222);
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
  //     }
  //   ],
  //   message: "success",
  //   resCode: 1
  // })
});

module.exports = router;