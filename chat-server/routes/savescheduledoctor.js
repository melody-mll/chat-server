var express = require('express');
var router = express.Router();
var Schedule = require('../modals/schedule');
//var Doctor = require('../modals/doctor');
/* GET users listing. */
router.get('/', function(req, res, next) {  
  const body=req.query;
  body.registrationFee=0;
  body.registrationNum=0;

  //得到所有的日期信息
  var dateList = [];
  let year = new Date().getFullYear();
  let startDate = new Date();
  let endDate = new Date();
  
  endDate.setDate(startDate.getDate() + 6);
  while ((endDate.getTime() - startDate.getTime()) >= 0) {
      let month = (startDate.getMonth() + 1).toString().length === 1 ? "0" + (startDate.getMonth() + 1).toString() : (
          startDate.getMonth() + 1);
      let day = startDate.getDate().toString().length === 1 ? "0" + startDate.getDate() : startDate.getDate();
      dateList.push(year+"-"+month + "-" + day);
      startDate.setDate(startDate.getDate() + 1);
  } 
  const obj1={};
  const obj2={};
  let arr1=[];
  let weeklist=[];
  // const day = new Date(Date.parse(value.replace(/-/g, '/')));
  const today = ["周日", "周一", "周二", "周三", "周四", "周五","周六",];
  for(i=0;i<dateList.length;i++){
    const day=new Date(Date.parse(dateList[i]));
   weeklist.push(today[day.getDay()]);
  }
  for(let key in dateList){
    obj1[key]=dateList[key];
  };
  for(let key in weeklist){
    obj2[key]=weeklist[key];
  };
  newObj1 = Object.keys(obj1).map(val=>({
    date:obj1[val],
  }))
  newObj2 = Object.keys(obj2).map(val=>({
    week:obj2[val]
  }))
  // console.log(dateList);
  // console.log(weeklist);
  dateList.map((item,index)=>{
    switch(index){
      case(0):body.dateone=item;
      case(1):body.datetwo=item;
      case(2):body.datethree=item;
      case(3):body.datefour=item;
      case(4):body.datefive=item;
      case(5):body.datesix=item;
      case(6):body.dateseven=item;
    }

  })
  weeklist.map((item,index)=>{
    switch(index){
      case(0):body.weekone=item;
      case(1):body.weektwo=item;
      case(2):body.weekthree=item;
      case(3):body.weekfour=item;
      case(4):body.weekfive=item;
      case(5):body.weeksix=item;
      case(6):body.weekseven=item;
    }

  })
  var objs=newObj1.map((item,index)=>{
    return {...item,...newObj2[index]};
  })
  //console.log(objs);

  var newarr=[];
  objs.map((item,index)=>{
    const registrationFee=null;
    const registrationNum=null;
    newarr.push(
      {registrationFee:registrationFee,registrationNum:registrationNum}
      );
    // newarr[index].registrationNum=0;
  })
  //console.log(newarr);

  var mainobj=newarr.map((item,index)=>{
    return {...item,...objs[index]};
  })
//   console.log(mainobj);

// console.log(date);

 body.registrationFeeone=null;
 body.registrationNumone=null;
 body.registrationFeetwo=null;
 body.registrationNumtwo=null;
 body.registrationFeethree=null;
 body.registrationNumthree=null;
 body.registrationFeefour=null;
 body.registrationNumfour=null;
 body.registrationFeefive=null;
 body.registrationNumfive=null;
 body.registrationFeesix=null;
 body.registrationNumsix=null;
 body.registrationFeeseven=null;
 body.registrationNumseven=null;
 console.log(body);
 Schedule.find({
   doctordepart:body.doctordepart,
   doctorproject:body.doctorproject,
   docid:body.docid,
   name:body.name
 },
  function(err,ret){
  if(err){
      console.log("查询失败")
  }else{
      // console.log('123',ret)
      if(ret.length!==0){
        res.status(200).json({
          success:true,
          data: null,
          message: "该医生已经存在，请勿重复添加！！",
          rescode:0
        })
      }else{
        new Schedule(body).save(function(err,user){
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
  // new Schedule(body).save(function(err,user){
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
});


module.exports = router;