var express = require('express');
var router = express.Router();

var dateList = [];
let year = new Date().getFullYear();
let startDate = new Date();
let endDate = new Date();

endDate.setDate(startDate.getDate() + 6);
while ((endDate.getTime() - startDate.getTime()) >= 0) {
    let month = (startDate.getMonth() + 1).toString().length === 1 ? "0" + (startDate.getMonth() + 1).toString() : (
        startDate.getMonth() + 1);
    let day = startDate.getDate().toString().length === 1 ? "0" + startDate.getDate() : startDate.getDate();
    dateList.push(year+"/"+month + "/" + day);
    startDate.setDate(startDate.getDate() + 1);
} 
const obj1={};
const obj2={};
let arr1=[];
let arr2=[];
// const day = new Date(Date.parse(value.replace(/-/g, '/')));
const today = ["周日", "周一", "周二", "周三", "周四", "周五","周六",];
for(i=0;i<dateList.length;i++){
  const day=new Date(Date.parse(dateList[i]));
 arr1.push(day);
 arr2.push(today[day.getDay()]);
}
for(let key in dateList){
  obj1[key]=dateList[key];
};
for(let key in arr2){
  obj2[key]=arr2[key];
};
newObj1 = Object.keys(obj1).map(val=>({
  date:obj1[val],
}))
newObj2 = Object.keys(obj2).map(val=>({
  week:obj2[val]
}))
// console.log(newObj1);
// console.log(newObj2);
var objs=newObj1.map((item,index)=>{
  return {...item,...newObj2[index]};
})


/* GET users listing. */
router.get('/', function(req, res, next) {
    // console.log(last30dates());
  res.json({
    data: objs,
    message: "成功！！",
    resCode: 0
  })
});

module.exports = router;