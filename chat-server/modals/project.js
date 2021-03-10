//设计科室项目信息表单模型
var mongoose = require('mongoose')
var Schema = mongoose.Schema
//连接数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

var projectSchema = new Schema({
    projectdep:{
        type:String,
        required:true
    },
    projectid:{
        type:Number,
        required:true
    },
    projectname:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('Project',projectSchema);