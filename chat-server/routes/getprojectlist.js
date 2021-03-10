var express = require('express');
var router = express.Router();
var Project = require('../modals/project');
/* GET users listing. */
router.get('/', function(req, res, next) {
  const body=req.query;
  console.log(body);
  Project.find({
   projectdep:body.projectdep
  },
    function(err,ret){
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
  //       {projectname:"111",projectid:10111,projectdep:"骨科"},
  //       {projectname:"222",projectid:10112,projectdep:"骨科"}, 
  //       {projectname:"333",projectid:10113,projectdep:"骨科"}
  //   ],
  //   message: "成功！！",
  //   resCode: 0
  // })
});

module.exports = router;