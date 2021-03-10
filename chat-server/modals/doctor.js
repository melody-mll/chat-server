//设计医生信息表单模型
var mongoose = require('mongoose')
var Schema = mongoose.Schema
//连接数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

var doctorSchema = new Schema({
    doctorid:{
        type:Number,
        required:true
    },
    doctorname:{
        type:String,
        required:true
    },
    doctorsex:{
        type:String,
        required:true
    }, 
    doctorage:{
        type:Number,
        required:true
    },
    doctorphone:{
        type:Number,
        required:true
    },
    doctorposition:{
        type:String,
        required:true
    },
    doctordepart:{
        type:String,
        required:true
    },
    doctorproject:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('Doctor',doctorSchema);