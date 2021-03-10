var express = require('express');
var router = express.Router();
var Patient = require('../modals/patient');
/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(req.query);
    var body = req.query;
    body.isbinding=0;//在保存时表示是未绑定状态

    new Patient(body).save(function(err,user){
      if(err){
        return res.status(500).json({
          rescode:-1,
          success:false,
          message:"服务端错误"
        })
      } 
      res.status(200).json({
        success:true,
        data: null,
        message: "添加成功！！",
        rescode:1
      })

    })
  // res.json({
  //   data: 
  //   [
  //     {patientname:"患者1",patientsex:"woman",patientid:342425199909045746,
  //     patientage:43,patientphone:18758274410,
  //     diseasename:"骨折",diseasedetail:"车轮撞击小腿，",
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