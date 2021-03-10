var express = require('express');
var router = express.Router();
var Schedule = require('../modals/schedule');
/* GET users listing. */
router.get('/', function(req, res, next) {
    const body=req.query;
    Schedule.find({docid:body.docid},
      function(err,ret){
      if(err){
          console.log("查询失败")
      }else{
        const _id=ret[0]._id;
        if(body.date==ret[0].dateone){
          Schedule.findByIdAndUpdate(_id,{
            registrationFeeone:body.registrationFee,
            registrationNumone:body.registrationNum
        },function(err,ret){
            if(err){
                console.log("更新失败")
            }else{
                console.log("更新成功")
                console.log(ret);
                res.json({
                  message:"修改成功！！",
                  rescode:1
                })
            }
        }) 
        }
        if(body.date==ret[0].datetwo){
          Schedule.findByIdAndUpdate(_id,{
            registrationFeetwo:body.registrationFee,
            registrationNumtwo:body.registrationNum
        },function(err,ret){
            if(err){
                console.log("更新失败")
            }else{
                console.log("更新成功")
                console.log(ret)
                res.json({
                  message:"修改成功！！",
                  rescode:1
                })
            }
        }) 
        }
        if(body.date==ret[0].datethree){
          Schedule.findByIdAndUpdate(_id,{
            registrationFeethree:body.registrationFee,
            registrationNumthree:body.registrationNum
        },function(err,ret){
            if(err){
                console.log("更新失败")
            }else{
                console.log("更新成功")
                console.log(ret)
                res.json({
                  message:"修改成功！！",
                  rescode:1
                })
            }
        }) 
        }
        if(body.date==ret[0].datefour){
          Schedule.findByIdAndUpdate(_id,{
            registrationFeefour:body.registrationFee,
            registrationNumfour:body.registrationNum
        },function(err,ret){
            if(err){
                console.log("更新失败")
            }else{
                console.log("更新成功")
                console.log(ret)
                res.json({
                  message:"修改成功！！",
                  rescode:1
                })
            }
        }) 
        }
        if(body.date==ret[0].datefive){
          Schedule.findByIdAndUpdate(_id,{
            registrationFeefive:body.registrationFee,
            registrationNumfive:body.registrationNum
        },function(err,ret){
            if(err){
                console.log("更新失败")
            }else{
                console.log("更新成功")
                console.log(ret)
                res.json({
                  message:"修改成功！！",
                  rescode:1
                })
            }
        }) 
        }
        if(body.date==ret[0].datesix){
          Schedule.findByIdAndUpdate(_id,{
            registrationFeesix:body.registrationFee,
            registrationNumsix:body.registrationNum
        },function(err,ret){
            if(err){
                console.log("更新失败")
            }else{
                console.log("更新成功")
                console.log(ret)
                res.json({
                  message:"修改成功！！",
                  rescode:1
                })
            }
        }) 
        }
        if(body.date==ret[0].dateseven){
          Schedule.findByIdAndUpdate(_id,{
            registrationFeeseven:body.registrationFee,
            registrationNumseven:body.registrationNum
        },function(err,ret){
            if(err){
                console.log("更新失败")
            }else{
                console.log("更新成功")
                console.log(ret)
                res.json({
                  message:"修改成功！！",
                  rescode:1
                })
            }
        }) 
        }
    // Schedule.findByIdAndUpdate(_id,{
    //       registrationFeeone:9
    //   },function(err,ret){
    //       if(err){
    //           console.log("更新失败")
    //       }else{
    //           console.log("更新成功")
    //           console.log(ret)
    //       }
    //   })    
          console.log(ret);
      }
  })
  // res.json({
  //   data: 
  //   [
  //     {
  //       docid:2020001,name:"1",infos:[
  //         {date: "2021-01-21", week: "周四",details:[{registrationFee:null,registrationNum:null}]},
  //         {date: "2021-01-22", week: "周五",details:[{registrationFee:10,registrationNum:11}]},
  //         {date: "2021-01-23", week: "周六",details:[{registrationFee:29,registrationNum:22}]}
  //       ]
  //     },
  //     {
  //       docid:2020002,name:"2",infos:[
  //         {date: "2021-01-21", week: "周四",details:[{registrationFee:1,registrationNum:1}]},
  //         {date: "2021-01-22", week: "周五",details:[{registrationFee:10,registrationNum:11}]},
  //         {date: "2021-01-23", week: "周六",details:[{registrationFee:29,registrationNum:22}]}
  //       ]
  //     },
  //     {
  //       docid:2020003,name:"3",infos:[
  //         {date: "2021-01-21", week: "周四",details:[{registrationFee:null,registrationNum:null}]},
  //         {date: "2021-01-22", week: "周五",details:[{registrationFee:10,registrationNum:11}]},
  //         {date: "2021-01-23", week: "周六",details:[{registrationFee:null,registrationNum:null}]}
  //       ]
  //     }
  //   ],
  //   message: "登录成功！！",
  //   resCode: 0
  // })
});

module.exports = router;