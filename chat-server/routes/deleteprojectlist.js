var express = require('express');
var router = express.Router();
var Project = require('../modals/project');
/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(req.query);
    var body = req.query;
    Project.remove({
      projectid:body.projectid,
      projectname:body.projectname,
      projectdep:body.projectdep
    },function(err,ret){
        if(err){
            console.log("更新失败")
        }else{
            res.json({
                data:ret,
                rescode:1,
                message:"成功！！！"
              })
        }
    })
});

module.exports = router;