//设计患者预约信息表单模型
var mongoose = require('mongoose')
var Schema = mongoose.Schema
//连接数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

var registerinformationSchema = new Schema({
    patientname:{
        type:String,
        required:true
    },
    patientphone:{
        type:Number,
        required:true
    },
    patientid:{
        type:Number,
        required:true
    },
    depname:{
        type:String,
        required:true
    },
    projectname:{
        type:String,
        required:true
    },
    doctorname:{
        type:String,
        required:true
    },
    registerdate:{
        type:String,
        required:true
    },
    registerstatus:{
        type:String,
        required:true
    },
})
module.exports = mongoose.model('Registerinformation',registerinformationSchema);