const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Schedule = require('./modals/schedule');
var Patient = require('./modals/patient');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

var userSchema = new Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    telephone:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    }
})
//mongoose.modal就是用来将一个架构发布为modal
//第一个参数表示集合名称（小写的复数形式，这里的User会变成users集合）
//第二个参数表示架构名称
//返回值：模型构造函数
var User = mongoose.model('User',userSchema);
//可以对users集合里面的数据来进行增删改查
//remove 根据条件删除所有
//findOneAndRemove 根据条件删除一个
//Model.findOneAndRemove(conditions,[options],[callback])
//findByIdAndRemove 跟据id删除一个
//Model.findByIdAndRemove(id,[options],[callback])

// User.remove({
//     username:"mll",
// },function(err,ret){
//     if(err){
//         console.log("删除失败")
//     }else{
//         console.log("删除成功")
//         console.log(ret)
//     }
// })
Patient.remove({
    patientsex:"woman",
},function(err,ret){
    if(err){
        console.log("删除失败")
    }else{
        console.log("删除成功")
        console.log(ret)
    }
})

// var admin=new User({
//     username:"zs",
//     password:"111",
//     telephone:18758274410,
//     email:"2371695227@qq.com"
// })
// admin.save(function(err,ret){
//     if(err){
//         console.log("保存成功")
//     }
//     else{
//         console.log("保存成功")
//         console.log(ret)
//     }
// })
// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));