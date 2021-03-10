var express = require('express');
var router = express.Router();
var Depart = require('../modals/depart');
/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(req.query);
    var body = req.query;

  Depart.find({
      $or: [
         {depart: body.depart}, {departid:body.departid}
      ]
   },function(err,ret){
      if(err){
          console.log("查询失败")
      }else{
        if(ret.length!==0){
          res.status(200).json({
            success:true,
            data: null,
            message: "科室编号或科室名称已重复！！",
            rescode:0
          })
        }else{
          new Depart(body).save(function(err,user){
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
    // new Depart(body).save(function(err,user){
    //   if(err){
    //     return res.status(500).json({
    //       rescode:-1,
    //       success:false,
    //       message:"服务端错误"
    //     })
    //   }else{
    //   res.status(200).json({
    //     success:true,
    //     data: null,
    //     message: "添加成功！！",
    //     rescode:1
    //   })

    // } 

    // })
});

module.exports = router;