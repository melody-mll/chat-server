
var express = require('express');
var router = express.Router();
var Depart = require('../modals/depart');
/* GET users listing. */
router.get('/', function(req, res, next) {

  Depart.find(function(err,ret){
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
  // res.json({
  //   data: 
  //   [
  //       {depart:"骨科",departid:101001},
  //       {depart:"儿科",departid:101002},
  //       {depart:"泌尿科",departid:101003}
  //   ],
  //   message: "成功！！",
  //   resCode: 0
  // })
});

module.exports = router;