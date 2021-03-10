var express = require('express');
var router = express.Router();
var Doctor = require('../modals/doctor');
/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(req.query);
    var body = req.query;
    Doctor.findByIdAndUpdate(body.doctorsqlid,{
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
            console.log("更新成功")
            console.log(ret)
        }
    })
    // new Patient(body).save(function(err,user){
    //   if(err){
    //     return res.status(500).json({
    //       rescode:-1,
    //       success:false,
    //       message:"服务端错误"
    //     })
    //   } 
    //   res.status(200).json({
    //     success:true,
    //     data: null,
    //     message: "添加成功！！",
    //     rescode:1
    //   })

    // })
  res.json({
    data: 
    [
      {patientname:"患者1",patientsex:"woman",patientid:342425199909045746,
      patientage:43,patientphone:18758274410,
      diseasename:"骨折",diseasedetail:"车轮撞击小腿，",
      clinicdate:"2012-02-03"},
      {patientname:"患者2",patientsex:"man",patientid:342425199909045746,
      patientage:43,patientphone:18758274410,
      diseasename:"骨折",diseasedetail:"车轮撞击小腿，于撞击处发生胫腓骨骨干骨折",
      clinicdate:"2012-02-03"},
      {patientname:"患者3",patientsex:"man",patientid:342425199909045746,
      patientage:43,patientphone:18758274410,
      diseasename:"骨折",diseasedetail:"车轮撞击小腿，于撞击处发生胫腓骨骨干骨折",
      clinicdate:"2012-02-03"},
    ],
    message: "成功！！",
    resCode: 0
  })
});

module.exports = router;