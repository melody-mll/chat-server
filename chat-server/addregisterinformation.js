const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
var express = require('express');
var router = express.Router();
var Registerinformation = require('./modals/registerinformation');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

//mongoose.modal就是用来将一个架构发布为modal
//第一个参数表示集合名称（小写的复数形式，这里的User会变成users集合）
//第二个参数表示架构名称
//返回值：模型构造函数
// var User = mongoose.model('User',userSchema);
//可以对users集合里面的数据来进行增删改查
var admin=new Registerinformation(
{patientname:"毛莉丽",patientphone:18758274410,patientid:342425199909045746,
depname:"骨科",projectname:"project1",doctorname:"医生1",
registerdate:"2021-02-02",registerstatus:"预约成功"})
admin.save(function(err,ret){
    if(err){
        console.log("保存失败")
    }
    else{
        console.log("保存成功")
        console.log(ret)
    }
})
// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));