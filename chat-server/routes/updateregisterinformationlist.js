var express = require('express');
var router = express.Router();
var Registerinformation = require('../modals/registerinformation');
/* GET users listing. */
router.get('/', function(req, res, next) {
  var body = req.query;
  Registerinformation.findByIdAndUpdate(body.registersqlid,{
    registerstatus:body.registerstatus
  },function(err,ret){
      if(err){
          console.log("更新失败")
      }else{
          res.json({
          data: 
          [
            {patientname:"患者1",patientphone:18758274410,patientid:342425199909045746,
            depname:"骨科",projectname:"project1",doctorname:"医生1",
            registerdate:"2021-02-02",registerstatus:"预约成功"},
            {patientname:"患者2",patientphone:18758274410,patientid:342425199909045746,
            depname:"骨科",projectname:"project1",doctorname:"医生1",
            registerdate:"2021-02-02",registerstatus:"预约成功"},
            {patientname:"患者3",patientphone:18758274410,patientid:342425199909045746,
            depname:"骨科",projectname:"project1",doctorname:"医生1",
            registerdate:"2021-02-02",registerstatus:"已就诊"}
          ],
          message: "成功！！",
          resCode: 1
        })
      }
  })
  // res.json({
  //   data: 
  //   [
  //     {patientname:"患者1",patientphone:18758274410,patientid:342425199909045746,
  //      depname:"骨科",projectname:"project1",doctorname:"医生1",
  //      registerdate:"2021-02-02",registerstatus:"预约成功"},
  //      {patientname:"患者2",patientphone:18758274410,patientid:342425199909045746,
  //      depname:"骨科",projectname:"project1",doctorname:"医生1",
  //      registerdate:"2021-02-02",registerstatus:"预约成功"},
  //      {patientname:"患者3",patientphone:18758274410,patientid:342425199909045746,
  //      depname:"骨科",projectname:"project1",doctorname:"医生1",
  //      registerdate:"2021-02-02",registerstatus:"已就诊"}
  //   ],
  //   message: "成功！！",
  //   resCode: 0
  // })
});

module.exports = router;