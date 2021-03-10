
var express = require('express');
var router = express.Router();
var Project = require('../modals/project');
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  var body = req.query;

  Project.find({
    projectid:body.projectid,
  },
    function(err,ret){
    if(err){
        console.log("查询失败")
    }else{
      if(ret.length!=0){
        res.status(200).json({
          success:true,
          data: null,
          message: "项目编号已重复！！",
          rescode:0
        })
      }else{
        new Project(body).save(function(err,user){
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
      }
    }
})
  // new Project(body).save(function(err,user){
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
  // res.json({
  //   data: 
  //   [
  //     {projectid:342523,projectname:"project1",projectdep:"骨科"},
  //     {projectid:342524,projectname:"project2",projectdep:"内科"}, 
  //     {projectid:342525,projectname:"project3",projectdep:"外科"},
  //     {projectid:342526,projectname:"project4",projectdep:"妇产科"}
  // ],
  //   message: "成功！！",
  //   resCode: 0
  // })
});

module.exports = router;