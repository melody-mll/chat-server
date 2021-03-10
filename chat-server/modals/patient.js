//设计患者信息表单模型
var mongoose = require('mongoose')
var Schema = mongoose.Schema
//连接数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

var patientSchema = new Schema({
    patientname:{
        type:String,
        required:true
    },
    patientsex:{
        type:String,
        required:true
    },
    patientid:{
        type:Number,
        required:true
    },
    patientage:{
        type:Number,
        required:true
    },
    patientphone:{
        type:Number,
        required:true
    },
    diseasename:{
        type:String,
        required:true
    },
    diseasedetail:{
        type:String,
        required:true
    },
    clinicdate:{
        type:String,
        required:true
    },
    //表示病例的是否绑定，默认是0，表示未绑定，在保存时为0
    //当小程序端更改绑定时，绑定成功后，才更改为1
    isbinding:{
        type:Number
    }
})
module.exports = mongoose.model('Patient',patientSchema);