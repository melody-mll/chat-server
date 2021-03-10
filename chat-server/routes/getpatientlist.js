var express = require('express');
var router = express.Router();
var Patient = require('../modals/patient');
/* GET users listing. */
router.get('/', function(req, res, next) {
  var body = req.query;
  if(body.action == "query"){
        Patient.find({
          patientname:body.patientname,
          patientid:body.patientid
        },function(err,ret){
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
  //   if(body.patientid&&!body.patientname){
  //     Patient.find({
  //       patientid:body.patientid
  //     },function(err,ret){
  //       if(err){
  //           console.log("查询失败")
  //       }else{
  //         res.json({
  //           data:ret,
  //           rescode:1,
  //           message:"成功！！！"
  //         })
  //       }
  //   })
  //   }
  //   if(!body.patientid&&body.patientname){
  //     Patient.find({
  //       patientname:body.patientname
  //     },function(err,ret){
  //       if(err){
  //           console.log("查询失败")
  //       }else{
  //         res.json({
  //           data:ret,
  //           rescode:1,
  //           message:"成功！！！"
  //         })
  //       }
  //   })
  //   }else{
  //     Patient.find(function(err,ret){
  //       if(err){
  //           console.log("查询失败")
  //       }else{
  //         res.json({
  //           data:ret,
  //           rescode:1,
  //           message:"成功！！！"
  //         })
  //       }
  //   })
  //   }
  }else{
    Patient.find(function(err,ret){
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
}
    
  // res.json({
  //   data: 
  //   [
  //     {patientname:"患者1",patientsex:"woman",patientid:342425199909045746,
  //     patientage:43,patientphone:18758274410,
  //     diseasename:"骨折",diseasedetail:"车轮撞击小腿，于撞击处发生胫腓骨骨干骨折",
  //     clinicdate:"2012-02-03"},
  //     {patientname:"患者2",patientsex:"man",patientid:342425199909045746,
  //     patientage:43,patientphone:18758274410,
  //     diseasename:"骨折",diseasedetail:"车轮撞击小腿，于撞击处发生胫腓骨骨干骨折",
  //     clinicdate:"2012-02-03"},
  //     {patientname:"患者3",patientsex:"man",patientid:342425199909045746,
  //     patientage:43,patientphone:18758274410,
  //     diseasename:"骨折",diseasedetail:"车轮撞击小腿，于撞击处发生胫腓骨骨干骨折",
  //     clinicdate:"2012-02-03"},
  //   ],
  //   message: "成功！！",
  //   resCode: 0
  // })
});

module.exports = router;