var express = require('express');
var router = express.Router();
var Project = require('../modals/project');
/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(req.query);
    var body = req.query;

    Project.find({
      projectid:body.projectid,
      projectname:body.projectname,
      projectdep:body.projectdep
     },function(err,ret){
        if(err){
            console.log("查询失败")
        }else{
          console.log(ret);
          if(ret.length!==0){
            res.status(200).json({
              success:true,
              data: null,
              message: "项目已重复！！",
              rescode:0
            })
          }else{
            Project.findByIdAndUpdate(body.projectsqlid,{
                projectid:body.projectid,
                projectname:body.projectname,
                projectdep:body.projectdep
              },function(err,ret){
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
                      message: "更新成功！！",
                      rescode:1
                    })
                  }
              })
          }
        }
    })

    // Depart.findByIdAndUpdate(body.departsqlid,{
    //   depart:body.depart,
    //   departid:body.departid
    // },function(err,ret){
    //     if(err){
    //         console.log("更新失败")
    //     }else{
    //         console.log("更新成功")
    //         console.log(ret)
    //     }
    // })
});

module.exports = router;