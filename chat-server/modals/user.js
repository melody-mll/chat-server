//设计注册信息表单模型
var mongoose = require('mongoose')
var Schema = mongoose.Schema
//连接数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

var userSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    telephone:{
        type:String,
        // required:true
    },
    email:{
        type:String,
        // required:true
    },
    create_time:{
        type:Date,
        //这里直接给方法就行，因为会立即调用
        default:Date.now
    }
})
module.exports = mongoose.model('User',userSchema);