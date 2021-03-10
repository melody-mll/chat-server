var express = require('express');
var router = express.Router();
var Depart = require('../modals/depart');
/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(req.query);
    var body = req.query;
    Depart.remove({
        depart:body.depart,
        departid:body.departid
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