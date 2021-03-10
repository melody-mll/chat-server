var express = require('express');
var router = express.Router();
var Project = require('../modals/project');
/* GET users listing. */
router.get('/', function(req, res, next) {
  Project.find(function(err,ret){
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
  //       {projectid:342523,projectname:"project1",projectdep:"骨科"},
  //       {projectid:342524,projectname:"project2",projectdep:"内科"}, 
  //       {projectid:342525,projectname:"project3",projectdep:"外科"}
  //   ],
  //   message: "成功！！",
  //   resCode: 0
  // })
});

module.exports = router;