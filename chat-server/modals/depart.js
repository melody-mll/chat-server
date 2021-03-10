//设计科室信息表单模型
var mongoose = require('mongoose')
var Schema = mongoose.Schema
//连接数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

var departSchema = new Schema({
    depart:{
        type:String,
        required:true
    },
    departid:{
        type:Number,
        required:true
    }
})
module.exports = mongoose.model('Depart',departSchema);