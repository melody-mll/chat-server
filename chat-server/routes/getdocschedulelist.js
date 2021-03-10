var express = require('express');
var router = express.Router();
var Schedule = require('../modals/schedule');
/* GET users listing. */
router.get('/', function(req, res, next) {
  const body=req.query;
  Schedule.find({
    doctordepart:body.doctordepart,
    doctorproject:body.doctorproject
  },
    function(err,ret){
    if(err){
        console.log("查询失败")
    }else{
      //console.log(ret);
      const newret=[];
      
      //const mainret=[];
      
      //转换为标准模式
      ret.map((item,index)=>{
        let retobj={};//最后的对象存入数组
        let objdateweekone={};//将对象模式包含week,date,details,存入infos数组
        let objdateweektwo={};//包括七条对象模式
        let objdateweekthree={};
        let objdateweekfour={};
        let objdateweekfive={};
        let objdateweeksix={};
        let objdateweekseven={};

        retobj.infos=[];//表示infos空数组

        const detailone=[];//表示details数组
        const detailobjone={};//以对象模式存入details数组
        const detailtwo=[];
        const detailobjtwo={};
        const detailthree=[];
        const detailobjthree={};
        const detailfour=[];
        const detailobjfour={};
        const detailfive=[];
        const detailobjfive={};
        const detailsix=[];
        const detailobjsix={};
        const detailseven=[];
        const detailobjseven={};

        retobj.name=item.name;//表示存入retobj的简单对象形式
        retobj.docid=item.docid; 

        detailobjone.registrationFee=item.registrationFeeone;
        detailobjone.registrationNum=item.registrationNumone;
        detailone.push(detailobjone);//表示存入details数组中的过程
        detailobjtwo.registrationFee=item.registrationFeetwo;
        detailobjtwo.registrationNum=item.registrationNumtwo;
        detailtwo.push(detailobjtwo);
        detailobjthree.registrationFee=item.registrationFeethree;
        detailobjthree.registrationNum=item.registrationNumthree;
        detailthree.push(detailobjthree);
        detailobjfour.registrationFee=item.registrationFeefour;
        detailobjfour.registrationNum=item.registrationNumfour;
        detailfour.push(detailobjfour);
        detailobjfive.registrationFee=item.registrationFeefive;
        detailobjfive.registrationNum=item.registrationNumfive;
        detailfive.push(detailobjfive);
        detailobjsix.registrationFee=item.registrationFeesix;
        detailobjsix.registrationNum=item.registrationNumsix;
        detailsix.push(detailobjsix);
        detailobjseven.registrationFee=item.registrationFeeseven;
        detailobjseven.registrationNum=item.registrationNumseven;
        detailseven.push(detailobjseven);

        objdateweekone.date=item.dateone;
        objdateweekone.week=item.weekone;
        objdateweekone.details=detailone;//将date,week,details当作对象形式存入空对象里
        objdateweektwo.date=item.datetwo;
        objdateweektwo.week=item.weektwo;
        objdateweektwo.details=detailtwo;
        objdateweekthree.date=item.datethree;
        objdateweekthree.week=item.weekthree;
        objdateweekthree.details=detailthree;
        objdateweekfour.date=item.datefour;
        objdateweekfour.week=item.weekfour;
        objdateweekfour.details=detailfour;
        objdateweekfive.date=item.datefive;
        objdateweekfive.week=item.weekfive;
        objdateweekfive.details=detailfive;
        objdateweeksix.date=item.datesix;
        objdateweeksix.week=item.weeksix;
        objdateweeksix.details=detailsix;
        objdateweekseven.date=item.dateseven;
        objdateweekseven.week=item.weekseven;
        objdateweekseven.details=detailseven;
        //console.log('1',objdateweek);
        retobj.infos.push(objdateweekone);//将对象模式填充到infos数组里
        retobj.infos.push(objdateweektwo);
        retobj.infos.push(objdateweekthree);
        retobj.infos.push(objdateweekfour);
        retobj.infos.push(objdateweekfive);
        retobj.infos.push(objdateweeksix);
        retobj.infos.push(objdateweekseven);
       
        // retobj.infos[0]=objdateweekone;
        // retobj.infos[1]=objdateweektwo;
        // retobj.push()
        // console.log('2',retobj.infos);
        // console.log('3',retobj);
        //retobj.infos.push({dateone:item.dateone},{datetwo:item.datetwo});
        newret.push(retobj);//将整个retobj对象传入到newret数组里
        //newret.splice(0,0,retobj.infos);
      })
      // for(i=0;i<=ret.length;i++){
      //   console.log('11',ret[i].docid);
      //   newret[i].docid=rret[i].docid;
      //   newret[i].name=ret[i].name;
      //   // for(i=0;i<=6;i++){
      //   //   switch(i){
      //   //     case(0):
      //   //     newret[i].infos[i].date=ret[i].dateone,
      //   //     newret[i].infos[i].week=ret[i].weekone,
      //   //     newret[i].infos[i].details[0].registrationFee=ret[0].registrationFee,
      //   //     newret[i].infos[i].details[0].registrationNum=ret[0].registrationNum;
      //   //   }
      //   // }
      // }

      res.json({
        data:newret,
        rescode:1,
        message:"成功！！！"
      })
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