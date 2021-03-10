var express = require('express');
var router = express.Router();
var Doctor = require('../modals/doctor');
const querystring = require('querystring');
const { post } = require('../app');
/* GET users listing. */
router.post('/', function(req, res, next) {
  var body = req.body;
  Doctor.remove({
    doctorid:body.doctorid,
    doctorname:body.doctorname,
    doctorsex:body.doctorsex,
    doctorage:body.doctorage,
    doctorphone:body.doctorphone,
    doctorposition:body.doctorposition,
    doctordepart:body.doctordepart,
    doctorproject:body.doctorproject
  },function(err,ret){
      if(err){
          console.log("更新失败")
      }else{
          res.json({
              data:ret,
              rescode:1,
              message:"成功！！！"
            })
      }
  })
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
  //     }
  //   ],
  //   message: "success",
  //   resCode: 1
  // })
});

module.exports = router;